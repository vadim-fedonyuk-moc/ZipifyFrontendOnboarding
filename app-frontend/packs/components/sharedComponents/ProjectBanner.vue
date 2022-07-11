<template>
  <div class="ba-project-banner">
    <p class="ba-project-banner__text">Get your banner</p>
  </div>
</template>

<script>
export default {
  name: "ProjectBanner"
}
</script>

<style scoped>
.ba-project-banner {
  margin: 0;
  width: 100%;
  height: 30px;
  background: var(--color-violet);
}

.ba-project-banner__text {
  margin: 0;
  color: var(--color-white);
  display: flex;
  justify-content: center;
  padding: 8px;
}
</style>
