<template>
  <div>
    <transition name="modal" v-if="showModal">
      <div class="modal-background">
        <div class="modal">
          <h2 class="modal__title">Add your banner</h2>
          <form @submit="createBanner" class="modal__form form">
            <label for="bannerTitle">Title:</label>
            <input
              id="bannerTitle"
              v-model="bannerTitle"
              type="text"
              name="bannerTitle"
            />
            <label for="bannerContent">Content:</label>
            <input
              id="bannerContent"
              v-model="bannerContent"
              type="text"
              name="bannerContent"
            />
            <label for="productId">Product Id:</label>
            <button type="button" @click="openResourcePicker">
              select product
            </button>
            <div v-if="productId">
              <p># {{ productId }}</p>
            </div>
            <label for="bannerColor">Banner color:</label>
            <button type="button" @click="showColorPicker = true">
              Choose color
            </button>
            <chrome-picker
              v-model="bannerColor"
              v-if="showColorPicker"
            ></chrome-picker>
            <button type="submit" class="form__btn">Save</button>
          </form>
          <button
            type="button"
            @click="close"
            class="form__btn form__btn--closing"
          >
            Close
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import createApp from "@shopify/app-bridge";
import { ResourcePicker } from "@shopify/app-bridge/actions";
import { Chrome } from "vue-color";

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
  components: {
    "chrome-picker": Chrome,
  },
  data() {
    return {
      bannerTitle: "",
      bannerContent: "",
      bannerColor: "",
      productId: 0,
      showModal: false,
      showColorPicker: false,
      colors: "",
    };
  },
  created() {
    this.showModal = true;
  },
  methods: {
    close() {
      this.$emit("close");
      this.showModal = false;
    },
    createBanner() {
      this.$store.dispatch("createBanner", {
        title: this.bannerTitle,
        content: this.bannerContent,
        bannerColor: this.bannerColor.hex,
        productId: this.productId,
      });
    },
    openResourcePicker() {
      bannerPicker.dispatch(ResourcePicker.Action.OPEN);
      bannerPicker.subscribe(ResourcePicker.Action.SELECT, (selectPayload) => {
        this.productId = selectPayload.selection[0].id;
        this.productId = this.productId.replace("gid://shopify/Product/", "");
      });
    },
  },
};
</script>

<style>
</style>