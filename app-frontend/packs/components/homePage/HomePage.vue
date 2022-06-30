<template>
  <Header/>
  <BannersSection/>
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

</style>
