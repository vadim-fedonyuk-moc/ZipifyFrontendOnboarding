<template>
  <div id="editor-container" class="ba-editor-container">
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
        [{ 'header': 1 }, { 'header': 2 }],
        [{ 'indent': '-1'}, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'font': [] }],
        [{ 'align': [] }],
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
