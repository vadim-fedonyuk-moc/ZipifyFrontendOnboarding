<template>
  <div>
    <transition name="modal" v-if="showModal">
      <div class="modal-background">
        <div class="modal">
          <div class="modal__btn-close btn-close">
            <button type="button" @click="close" class="btn-close btn--without-bg">
              Close
            </button>
          </div>
          <h2 class="modal__title">Edit your banner</h2>
          <form @submit="updateBanner" class="modal__form form">
            <div class="form__field field">
              <label for="bannerTitle">Title:</label>
              <input
                id="bannerTitle"
                v-model="bannerTitle"
                type="text"
                name="bannerTitle"
                class="field__input"
              />
            </div>

            <div class="form__field field">
              <p>Content:</p>
              <button
                type="button"
                @click="isOpenTEditor = true"
                class="field__btn btn"
              >
                Add content
              </button>
            </div>

            <div class="form__field field">
              <label for="productId">Product Id:</label>
              <button
                type="button"
                @click="openResourcePicker()"
                class="field__btn btn"
              >
                select product
              </button>
            </div>

            <div class="form__field field">
              <label for="bannerColor">Banner color:</label>
              <button
                type="button"
                @click="showColorPicker = true"
                class="field__btn btn"
              >
                Choose color
              </button>
            </div>
            <chrome-picker
              v-model="bannerColor"
              v-if="showColorPicker"
              class="form__color-picker"
            ></chrome-picker>
            <button type="submit" class="form__btn btn btn--center">Save</button>
          </form>
        </div>
      </div>
    </transition>
    <div v-if="isOpenTEditor" class="field__editor">
      <p>editor</p>
      <ToastUiEditor
        v-if="isOpenTEditor"
        @close="onCloseEditor"
        v-model="bannerContent"
        :bannerContent="this.bannerContent"
      />
    </div>
  </div>
</template>

<script>
import createApp from "@shopify/app-bridge";
import "../../styles/application.css";
import { ResourcePicker } from "@shopify/app-bridge/actions";
import { Chrome } from "vue-color";
import ToastUiEditor from "./ToastUiEditor.vue";

const apiKey = process.env.SHOPIFY_API_KEY;
const decodedHost = "storozheko1.myshopify.com";

const app = createApp({
  apiKey,
  host: btoa(decodedHost),
});

const bannerPicker = ResourcePicker.create(app, {
  resourceType: ResourcePicker.ResourceType.Product,
  selectMultiple: false,
});

export default {
  name: "EditBannerForm",
  props: {
    banner: {
      title: String,
      content: String,
      style: {
        color: String,
      },
      product_id: Number,
    },
  },
  components: {
    "chrome-picker": Chrome,
    ToastUiEditor,
  },
  data() {
    return {
      bannerId: 0,
      bannerTitle: "",
      bannerContent: "",
      bannerColor: "",
      productId: 0,
      showModal: false,
      showColorPicker: false,
      isOpenTEditor: false,
    };
  },
  created() {
    this.showModal = true;
  },
  mounted() {
    this.bannerTitle = this.banner.title;
    this.bannerContent = this.banner.content;
    this.bannerColor = this.banner.style.color;
    this.productId = this.banner.product_id;
    this.bannerId = this.banner.id;
  },
  methods: {
    close() {
      this.$emit("close");
    },
    openResourcePicker() {
      bannerPicker.dispatch(ResourcePicker.Action.OPEN);
      bannerPicker.subscribe(ResourcePicker.Action.SELECT, (selectPayload) => {
        this.productId = selectPayload.selection[0].id;
        this.productId = this.productId.replace("gid://shopify/Product/", "");
      });
    },
    updateBanner() {
      this.$emit("submit");
      this.$store.dispatch("updateBanner", {
        id: this.bannerId,
        title: this.bannerTitle,
        content: this.bannerContent,
        bannerColor: this.bannerColor.hex,
        productId: this.productId,
      });
    },
    onCloseEditor(data) {
      this.isOpenTEditor = false;
      this.bannerContent = data;
    },
  },
};
</script>

<style scoped>
</style>