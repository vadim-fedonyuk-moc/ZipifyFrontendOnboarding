<template>
  <div>
    <ul v-if="bannersData" class="banners">
      <li
        v-for="banner in bannersData"
        :key="banner.id"
        class="banners__banner banner"
      >
        <div :style="banner.style" class="banner__style">{{ banner.style.color }}</div>
        <h3 class="banner__title">{{ banner.title }}</h3>
        <p class="banner__content">{{ banner.content }}</p>
        <edit-banner-form
          :key="banner.title"
          v-if="isOpenModal"
          :banner="selectedBanner"
          @submit="closeModal"
          @close="closeModal"
        ></edit-banner-form>
        <div class="banner__actions actions">
          <button
            @click="onClickEditButton(banner)"
            class="actions__btn btn btn--grey"
          >
            Edit
          </button>
          <button
            @click="deleteBanner(banner.id)"
            class="actions__btn btn btn--without-bg"
          >
            Delete
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import EditBannerForm from "./EditBannerForm.vue";
import '../../styles/application.css';

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
      bannersListData: this.bannersData,
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
    deleteBanner(bannerId) {
      this.$store.dispatch("deleteBanner", { bannerId: bannerId });
    },
  },
};
</script>

<style>
.banners {
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
  color: #000000;
}

.banners__banner {
  margin: 1em;
  padding: 1em;
  width: 20%;
  text-align: center;
  background-color: #d6d6d6;
  border-radius: 5%;
}
</style>