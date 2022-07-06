<template>
  <div @click="updateInputWysiwyg">
    <div id="editor-container"
         class="ba-editor-container"
         @keydown="updateInputWysiwyg"
    >
  </div>
  </div>
</template>
<script>
export default {
  name: "Wysiwyg",
  data() {
    return {
      quill: Object,
      toolbarOptions: [
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'color': [] }, { 'background': [] }],
        ['clean']
      ]
    }
  },
  methods: {
    editor() {
      this.quill = new Quill('#editor-container', {
        modules: { toolbar: this.toolbarOptions },
        theme: 'snow',
        placeholder: 'Some text'
      });
    },
    updateInputWysiwyg() {
      this.$emit('update:modelValueWysiwyg', this.quill.root.innerHTML)
    }
  },
  mounted() {
    this.editor()
  }
}
</script>
<style >
.ba-editor-container {
  height: 100px;
  width: 100%;
  background-color: #FFFFFF;
}
</style>
