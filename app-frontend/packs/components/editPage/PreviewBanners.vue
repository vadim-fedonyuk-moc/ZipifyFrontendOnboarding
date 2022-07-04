<template>
  <div class="ba-preview-section">
    <div>
      <div class="ba-preview-section__banner"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PreviewBanners"
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
  background-color: #730E15;
}
</style>
