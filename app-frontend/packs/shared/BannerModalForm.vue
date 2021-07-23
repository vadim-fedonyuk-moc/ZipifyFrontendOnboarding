<template>
  <div>
    <transition name="modal">
      <div
        v-if="isDisplayModal"
        @click.self="isDisplayModal = false"
      >
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
          <button v-on:click="openResourcePicker()">select product</button>
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
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "BannerModal",
  data() {
    return {
      bannerTitle: "",
      bannerContent: "",
      bannerColor: "",
      bannerId: 0,
      productId: 0,
      bannersData: [],
      isDisplayModal: false
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