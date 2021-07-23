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
        <div class="banner__btn btn">
          <button class="btn--grey">Edit</button>
          <button v-on:click="deleteBanner(banner.id)" class="btn--without-bg">
            Delete
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["bannersData"],
  data() {
    return {
      banners: [],
      bannerId: 0,
    };
  },
  computed: {
    completed() {
      this.banners = this.$store.getters.getBannersData.data;
    },
  },
  methods: {
    async deleteBanner(bannerId) {
      await this.$store.dispatch("deleteBanner", { bannerId: bannerId });
    },
  },
};
</script>

<style>

</style>