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
          :key="banner.title"
          v-if="isOpenModal"
          :banner="selectedBanner"
          @submit="onModalSubmit"
          @close="onModalClose"
        ></banner-modal-form>
        <div class="banner__btn btn">
          <button @click="onClickEditButton(banner)" class="btn--grey">
            Edit
          </button>
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
      selectedBanner: {},
      banners: [],
      bannerId: 0,
      isOpenModal: false,
    };
  },
  computed: {
    // completed() {
    //   this.banners = this.$store.getters.getBannersData.data;
    // },
  },
  methods: {
    onClickEditButton(banner) {
      if (!banner) {
        return;
      }
      this.isOpenModal = true;
      this.selectedBanner = banner;
      this.bannerId = banner.id;
    },
    onModalSubmit(data) {
      this.isOpenModal = false;
      this.updateBanner(data);
    },
    onModalClose() {
      this.isOpenModal = false;
    },
    async deleteBanner(bannerId) {
      await this.$store.dispatch("deleteBanner", { bannerId: bannerId });
    },
    updateBanner(data) {
      this.$store.dispatch("updateBanner", {
        bannerId: this.bannerId,
        title: data.title,
        content: data.content,
        bannerColor: data.bannerColor,
        productId: data.productId,
      });
    },
  },
};
</script>

<style>
</style>