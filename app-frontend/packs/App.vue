<template>
  <div>
    <form @submit.prevent="createBanner()">
      <p>
        <label for="bannerTitle">Title:</label>
        <input
          id="bannerTitle"
          v-model="bannerTitle"
          type="text"
          name="bannerTitle"
        />
      </p>
      <p>
        <label for="bannerContent">Content:</label>
        <input
          id="bannerContent"
          v-model="bannerContent"
          type="text"
          name="bannerContent"
        />
      </p>
      <p>
        <label for="productId">Product Id:</label>
        <input
          id="productId"
          v-model="productId"
          type="number"
          name="productId"
        />
      </p>
      <p>
        <label for="bannerColor">Banner color:</label>
        <input
          id="bannerColor"
          v-model="bannerColor"
          type="text"
          name="bannerColor"
          placeholder="#..."
        />
      </p>
      <p>
        <button type="submit">Add</button>
      </p>
    </form>
    <label for="bannerId">Banner id:</label>
    <input id="bannerId" type="number" v-model="bannerId" />
    <button v-on:click="deleteBanner()">delete</button>
    <button v-on:click="updateBanner()">update</button>
    <button v-on:click="getBanners()">get banners</button>
    <button v-on:click="getBannerById()">get banner</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerTitle: "",
      bannerContent: "",
      bannerColor: "",
      bannerId: 0,
      productId: 0,
    };
  },

  methods: {
    getBanners() {
      this.$store.dispatch("getBanners");
    },

    getBannerById() {
      this.$store.dispatch("getBannerById", { bannerId: this.bannerId });
    },

    createBanner() {
      this.$store.dispatch("createBanner");
    },

    deleteBanner() {
      this.$store.dispatch("deleteBanner");
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