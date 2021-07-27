<template>
  <div>
    <transition name="modal" v-if="showModal">
      <div class="modal-background">
        <div class="modal">
          <h2 class="modal__title">Edit your banner</h2>
          <form @submit="updateBanner" class="modal__form form">
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
            <button type="button" @click="openResourcePicker()">
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
  name: "EditBannerForm",
  props: {
    banner: {
      title: String,
      content: String,
      style: {
        key: String,
      },
      product_id: Number,
    },
  },
  components: {
    "chrome-picker": Chrome,
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
      colors: "",
    };
  },
  created() {
    this.showModal = true;
  },
  mounted() {
    this.bannerTitle = this.banner.title;
    this.bannerContent = this.banner.content;
    this.bannerColor = this.banner.style.key;
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
        bannerId: this.bannerId,
        title: this.bannerTitle,
        content: this.bannerContent,
        bannerColor: this.bannerColor.hex,
        productId: this.productId,
      });
    },
  },
};
</script>

<style>
.modal-background {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal {
  border-radius: 2px;
  width: 50%;
  padding: 20px;
  padding-bottom: 20px;
  margin: 30px auto;
  transition: all 0.3s ease;
  background-color: rgb(196, 196, 196);
}

.modal__title {
  text-align: center;
}

.modal__form {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
}

.form__btn {
  margin: 20px 0;
}

.form__btn--closing {
  width: 30%;
  margin: 0 auto;
}
</style>