<template>
  <div>
    <button v-on:click="createBanner()">Add</button>
  </div>
</template>

<script>
export default {
  mounted() {
    fetch("api/v1/banners").then((response) => console.log(response));
  },
  methods: {
    createBanner() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          banner: {
            title: "Our Clothes",
            content: "Our clothes are the best!!!!",
            style: { key: "#FFFFFF" },
            product_id: 6806344794283,
          },
        }),
      };
      fetch("api/v1/banners", requestOptions).then((response) =>
        console.log(response)
      );
    },
  },
};
</script>
<style>
</style>