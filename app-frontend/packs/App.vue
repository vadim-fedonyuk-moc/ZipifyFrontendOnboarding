<template>
  <div>
    <label for="bannerId">Banner id:</label>
    <input id="bannerId" type="number" v-model.number="bannerId" />
    <button v-on:click="updateBanner()">update</button>
    <button v-on:click="getBanners()">get banners</button>
    <button v-on:click="showBanners()">show banner</button>
    <banner-list :bannersData="bannersData"></banner-list>
    <!-- <button type="button" @click="showModal">Open modal</button> -->
    <div v-if="isDisplayModal">
      <banner-modal-form></banner-modal-form>
    </div>
    <button @click="isDisplayModal = !isDisplayModal">Open modal</button>
  </div>
</template>

<script>
import createApp from "@shopify/app-bridge";
import { ResourcePicker } from "@shopify/app-bridge/actions";

import BannerList from "./components/BannerList.vue";
import BannerModalForm from "./shared/BannerModalForm.vue";

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
    BannerList,
    BannerModalForm,
  },

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
  mounted() {
    this.getBanners();
  },
  methods: {
    async getBanners() {
      console.log(process.env);
      await this.$store.dispatch("getBanners");
      this.bannersData = this.$store.getters.getBannersData;
    },

    showModal() {
      this.isDisplayModal = true;
    },

    closeModal() {
      this.isDisplayModal = false;
    },

    updateBanner() {
      this.$store.dispatch("updateBanner", {
        bannerId: this.bannerId,
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
</style>