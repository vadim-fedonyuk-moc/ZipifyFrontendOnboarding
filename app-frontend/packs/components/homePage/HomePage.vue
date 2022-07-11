<template>
  <div class="home-page">
    <Header/>
    <BannersSection/>
  </div>
</template>

<script>
import Header from "./header/Header";
import BannersSection from "./bannersSection/BannersSection";
import PopupConfirm from "./bannersSection/PopupConfirm";


export default {
  name: "HomePage",
  components: {PopupConfirm, BannersSection, Header}
}
</script>

<style scoped>
.home-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
