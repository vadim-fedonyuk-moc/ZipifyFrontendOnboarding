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
        <edit-banner-form
          :key="banner.title"
          v-if="isOpenModal"
          :banner="selectedBanner"
          @submit="closeModal"
          @close="closeModal"
        ></edit-banner-form>
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
import EditBannerForm from "./EditBannerForm.vue";

export default {
  props: ["bannersData"],
  components: {
    EditBannerForm,
  },
  data() {
    return {
      selectedBanner: {},
      bannerId: 0,
      isOpenModal: false,
    };
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

    closeModal() {
      this.isOpenModal = false;
    },
    async deleteBanner(bannerId) {
      await this.$store.dispatch("deleteBanner", { bannerId: bannerId });
    },
  },
};
</script>

<style>
</style>