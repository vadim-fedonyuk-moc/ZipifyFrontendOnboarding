<template>
  <div>
    <transition name="modal" v-if="showModal">
      <div class="modal-background">
        <div class="modal">
          <div class="modal__btn-close btn-close">
            <button type="button" @click="close" class="btn-close btn--closing">
              Close
            </button>
          </div>
          <h2 class="modal__title">Add your banner</h2>

          <form @submit="createBanner" class="modal__form form">
            <div class="form__field field">
              <label for="bannerTitle">Title:</label>
              <input
                id="bannerTitle"
                v-model="bannerTitle"
                type="text"
                name="bannerTitle"
                class="field__input"
              />
            </div>

            <div class="form__field field">
              <p>Content:</p>
              <button
                type="button"
                @click="isOpenTEditor = true"
                class="field__btn btn"
              >
                Add content
              </button>
              <p v-if="bannerContent">{{ bannerContent }}</p>
            </div>

            <div class="form__field field">
              <p>Product Id:</p>
              <button
                type="button"
                @click="openResourcePicker"
                class="field__btn btn"
              >
                select product
              </button>
            </div>
            <div class="form__field">
              <p v-if="productId"># {{ productId }}</p>
            </div>

            <div class="form__field">
              <p>Banner color:</p>
              <button
                type="button"
                @click="showColorPicker = true"
                class="field__btn btn"
              >
                Choose color
              </button>
            </div>
            <chrome-picker
              v-model="bannerColor"
              v-if="showColorPicker"
              class="form__color-picker"
            ></chrome-picker>
            <button type="submit" class="form__btn btn">Save</button>
          </form>
        </div>
      </div>
    </transition>
    <div v-if="isOpenTEditor" class="field__editor">
      <p>editor</p>
      <ToastUiEditor
        v-if="isOpenTEditor"
        @close="onCloseEditor"
        v-model="bannerContent"
      />
    </div>
  </div>
</template>

<script>
import createApp from "@shopify/app-bridge";
import { ResourcePicker } from "@shopify/app-bridge/actions";
import ToastUiEditor from "./ToastUiEditor.vue";

import { Chrome } from "vue-color";

const apiKey = process.env.SHOPIFY_API_KEY;
const decodedHost = "storozheko1.myshopify.com";

const app = createApp({
  apiKey,
  host: btoa(decodedHost),
});

const bannerPicker = ResourcePicker.create(app, {
  resourceType: ResourcePicker.ResourceType.Product,
  selectMultiple: false,
});

export default {
  components: {
    "chrome-picker": Chrome,
    ToastUiEditor,
  },
  data() {
    return {
      bannerTitle: "",
      bannerContent: "",
      bannerColor: "",
      productId: 0,
      showModal: false,
      showColorPicker: false,
      isOpenTEditor: false,
      colors: "",
    };
  },
  created() {
    this.showModal = true;
  },
  methods: {
    close() {
      this.$emit("close");
      this.showModal = false;
    },
    createBanner() {
      this.$store.dispatch("createBanner", {
        title: this.bannerTitle,
        content: this.bannerContent,
        bannerColor: this.bannerColor.hex,
        productId: this.productId,
      });
    },
    openResourcePicker() {
      bannerPicker.dispatch(ResourcePicker.Action.OPEN);
      bannerPicker.subscribe(ResourcePicker.Action.SELECT, (selectPayload) => {
        this.productId = selectPayload.selection[0].id;
        this.productId = this.productId.replace("gid://shopify/Product/", "");
      });
    },
    onCloseEditor(data) {
      this.isOpenTEditor = false;
      this.bannerContent = data;
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
  width: 70%;
  padding: 20px;
  margin: 30px auto;
}

.modal__title {
  text-align: center;
}

.modal__form {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
}

.form__field {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  margin: 10px auto;
}

.field__input {
  border: none;
  width: 70%;
  height: 1.5em;
  border-radius: 5px;
}

.btn-close {
  display: flex;
  justify-content: flex-end;
  margin: 0;
}

.btn--closing {
  width: 30%;
  border: none;
  background-color: inherit;
}

.btn {
  margin: 0 auto;
  width: 50%;
  height: 2em;
  border: none;
  border-radius: 5px;
}

.btn:hover,
.btn--closing:hover {
  cursor: pointer;
}

.form__color-picker {
  width: 100%;
  margin: 0 auto;
}
</style>