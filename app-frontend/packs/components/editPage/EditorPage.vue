<template>
  <div class="edit-page">
    <ProjectBanner/>
    <div class="content-wrap">
      <EditForm/>
      <PreviewBanners/>
    </div>
  </div>
</template>

<script>
import EditForm from "./EditForm";
import ProjectBanner from "../sharedComponents/ProjectBanner";
import PreviewBanners from "./PreviewBanners";

export default {
  name: "EditorPage",
  components: {PreviewBanners, ProjectBanner, EditForm}
}
</script>

<style scoped>
.edit-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.content-wrap {
  height: 100%;
  display: flex;
}

</style>
