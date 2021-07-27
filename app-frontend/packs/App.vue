<template>
  <div>
    <add-banner-form v-if="showModal" @submit="closeModal" @close="closeModal">
    </add-banner-form>
    <button @click="showModal = true">Create banner</button>
    <banner-list :bannersData="bannersData"></banner-list>
  </div>
</template>

<script>
import AddBannerForm from "./components/AddBannerForm.vue";
import BannerList from "./components/BannerList.vue";

export default {
  components: {
    BannerList,
    AddBannerForm,
  },

  data() {
    return {
      bannersData: [],
      showModal: false,
    };
  },
  mounted() {
    this.getBanners();
  },
  methods: {
    async getBanners() {
      await this.$store.dispatch("fetchBanners");
      this.bannersData = this.$store.getters.getBannersData;
    },
    closeModal() {
      this.showModal = false;
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