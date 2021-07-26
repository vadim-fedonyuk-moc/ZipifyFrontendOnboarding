<template>
  <div>
    <ul v-if="bannersData" class="banners">
      <li
        v-for="banner in bannersData[0]"
        :key="banner.title"
        class="banners__banner banner"
      >
        <div class="banner__style">color: {{ banner.style.key }}</div>
        <h3 class="banner__title">{{ banner.title }}</h3>
        <p class="banner__content">{{ banner.content }}</p>
        <banner-modal-form
          v-if="isOpenModal"
          :banner="banner"
          @updateBanner="onModalClose"
        ></banner-modal-form>
        <div class="banner__btn btn">
          <button @click="openModal" class="btn--grey">Edit</button>
          <button @click="deleteBanner(banner.id)" class="btn--without-bg">
            Delete
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import BannerModalForm from "../shared/BannerModalForm.vue";

export default {
  props: ["bannersData"],
  components: {
    BannerModalForm,
  },
  data() {
    return {
      banners: [],
      bannerId: 0,
      isOpenModal: false,
      // bannerTitle: "title",
      // bannerContent: "",
      // bannerColor: "",
      // productId: 0,
      // productTitle: "",
      // showModal: false,
    };
  },
  computed: {
    completed() {
      this.banners = this.$store.getters.getBannersData.data;
    },
  },
  methods: {
    openModal() {
      this.isOpenModal = true;
    },
    onModalClose(data) {
      this.isOpenModal = false;
      console.log(data);
      this.updateBanner(data);
    },
    async deleteBanner(bannerId) {
      await this.$store.dispatch("deleteBanner", { bannerId: bannerId });
    },
    updateBanner(data) {
      console.log(data);
      this.$store.dispatch("updateBanner", {
        bannerId: data.banner_Id,
        title: data.title,
        content: data.content,
        bannerColor: data.bannerColor,
        productId: data.product_id,
      });
    },
  },
};
</script>

<style>
</style>