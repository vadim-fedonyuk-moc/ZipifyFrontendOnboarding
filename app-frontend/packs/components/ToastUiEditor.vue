<template>
  <div class="modal-background">
    <div class="modal">
      <editor
        :initialValue="editorText"
        :options="editorOptions"
        ref="toastEditorEl"
        height="500px"
        initialEditType="wysiwyg"
        previewStyle="vertical"
        :value="editorData"
      />
      <button @click="onClickButton" class="modal__btn btn btn--center">Save</button>
    </div>
  </div>
</template>

<script>
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import '../../styles/application.css';
import { Editor } from "@toast-ui/vue-editor";

export default {
  name: "ToastUiEditor",
  props: ['bannerContent'],
  components: {
    editor: Editor,
  },
  data() {
    return {
      editorText: this.bannerContext,
      editorOptions: {
        hideModeSwitch: true,
      },
      editorData: "",
    };
  },
  methods: {
    onClickButton() {
      this.editorData = this.$refs.toastEditorEl.invoke("getMarkdown");
      this.$emit('close', this.editorData);
    },
  },
};
</script>

<style>
</style>