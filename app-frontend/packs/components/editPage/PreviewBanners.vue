<template>
  <div class="ba-preview-section">
    <div>
      <div class="ba-preview-section__banner" :style="{ backgroundColor: inputColor}">
        <p v-html="this.innerWysiwyg"></p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "PreviewBanners",
  computed: {
    ...mapState({
      inputColor: state => state.banner.inputColor,
      innerWysiwyg: state => state.banner.inputWysiwyg
    })
  },
}
</script>

<style scoped>
.ba-preview-section {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-white);
  width: 60%;
}

.ba-preview-section__banner {
  width: 500px;
  height: 40px;
  background-color: #FFFFFF;
}
</style>
