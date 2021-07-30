<template>
  <div>
    <div class="header">
      <button @click="showModal = true" class="add-btn">Create banner</button>
    </div>
    <add-banner-form v-if="showModal" @submit="closeModal" @close="closeModal">
    </add-banner-form>
    <banner-list :bannersData="updatedBannersData"></banner-list>
  </div>
</template>

<script>
import AddBannerForm from "./components/AddBannerForm.vue";
import BannerList from "./components/BannerList.vue";
import { mapGetters } from "vuex";

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
  created() {
    this.getBanners();
  },
  computed: {
    ...mapGetters({ updatedBannersData: "getBannersData" }),
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

<style scoped>
.header {
  margin-bottom: 2em;
  width: 100%;
  height: 3em;
  background-color: rgb(196, 196, 196);
  display: flex;
  justify-content: flex-end;
}

.add-btn {
  width: 10%;
  margin: auto 3px;
  height: 2em;
  border: none;
  border-radius: 5px;
}

.add-btn:hover {
  cursor: pointer;
}
</style>