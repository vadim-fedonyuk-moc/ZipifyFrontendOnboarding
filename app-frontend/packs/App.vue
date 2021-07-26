<template>
  <div>
    <label for="bannerId">Banner id:</label>
    <input id="bannerId" type="number" v-model.number="bannerId" />
    <button v-on:click="updateBanner()">update</button>
    <button v-on:click="getBanners()">get banners</button>
    <button v-on:click="showBanners()">show banner</button>
    <banner-list :bannersData="bannersData"></banner-list>
    <!-- <button type="button" @click="showModal">Open modal</button> -->
    <BannerModalForm />
    <BannerList />
    <button @click="isDisplayModal = !isDisplayModal">Open modal</button>
  </div>
</template>

<script>
import BannerList from "./components/BannerList.vue";
import BannerModalForm from "./shared/BannerModalForm.vue";

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
  },
};
</script>
<style>
</style>