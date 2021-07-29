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
      <button @click="onClickButton" class="modal__btn">Save</button>
    </div>
  </div>
</template>

<script>
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/vue-editor";

export default {
  name: "ToastUiEditor",
  components: {
    editor: Editor,
  },
  data() {
    return {
      editorText: "Input content here....",
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
.modal-background {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal {
  border-radius: 2px;
  width: 50%;
  padding: 20px;
  margin: 30px auto;
}

.modal__btn {
  margin: 2pd auto;
  width: 50%;
  height: 2em;
  border: none;
  border-radius: 5px;
}
</style>