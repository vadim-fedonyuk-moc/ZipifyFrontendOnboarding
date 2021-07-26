<template>
  <div>
    <button @click="isOpenModal = true">Create banner</button>
    <banner-modal-form
      v-if="isOpenModal"
      @addBanner="createBanner"
    ></banner-modal-form>
    <button v-on:click="getBanners()">get banners</button>
    <button v-on:click="showBanners()">show banner</button>
    <banner-list :bannersData="bannersData"></banner-list>
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
      isOpenModal: false,
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

    createBanner(data) {
      this.isOpenModal = false;
      this.$store.dispatch("createBanner", {
        title: data.title,
        content: data.content,
        bannerColor: data.bannerColor,
        productId: data.product_id,
      });
    },
    // showModal() {
    //   this.isDisplayModal = true;
    // },

    // closeModal() {
    //   this.isDisplayModal = false;
    // },
  },
};
</script>
<style>
</style>