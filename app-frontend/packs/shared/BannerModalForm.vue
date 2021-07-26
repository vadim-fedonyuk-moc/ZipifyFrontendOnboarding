<template>
  <div>
    <!-- <transition name="modal"> -->
      <!-- <div
        v-if="isDisplayModal"
        @click.self="isDisplayModal = false"
      > -->
      <form @submit.prevent="createBanner()" class="form">
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
        <button @click="openResourcePicker()">select product</button>
        <label for="bannerColor">Banner color:</label>
        <input
          id="bannerColor"
          v-model="bannerColor"
          type="text"
          name="bannerColor"
          placeholder="#..."
        />
        <button type="submit">Add</button>
      </form>
      <!-- </div> -->
      <v-color-picker dot-size="25" swatches-max-height="200"></v-color-picker>
    <!-- </transition> -->
  </div>
</template>

<script>
import createApp from "@shopify/app-bridge";
import { ResourcePicker } from "@shopify/app-bridge/actions";

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
  name: "BannerModalForm",
  data() {
    return {
      bannerTitle: "",
      bannerContent: "",
      bannerColor: "",
      bannerId: 0,
      productId: 0,
      bannersData: [],
      isDisplayModal: false,
    };
  },
  methods: {
    createBanner() {
      this.$store.dispatch("createBanner", {
        title: this.bannerTitle,
        content: this.bannerContent,
        bannerColor: this.bannerColor,
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
.form {
  display: flex;
  flex-direction: column;
  width: 50%;
}
</style>