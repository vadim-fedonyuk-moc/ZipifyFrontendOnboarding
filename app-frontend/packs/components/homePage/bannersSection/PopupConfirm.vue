<template>
  <div class="ba-popup-page">
    <div class="ba-popup-page__content">
      <h3 class="ba-popup-page__main-text">Are you sure?</h3>
      <p class="ba-popup-page__text-description">Do you really want to delete banner “name banner”?</p>
      <div class="ba-popup-page__btn-wrap">
        <button class="ba-btn-wrap__button ba-btn-wrap__button--cancel"
                type="button"
                @click="$emit('closePopup')"
        >Cancel
        </button>
        <button class="ba-btn-wrap__button ba-btn-wrap__button--delete"
                type="button"
                @click="deleteCard"
        >Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
export default {
  name: "PopupConfirm",
  methods: {
    deleteCard() {
      this.deleteBanner();
      this.$emit('closePopup')
    },
    ...mapActions({
      deleteBanner: "banner/deleteBanner",
    })
  },
}
</script>

<style scoped>
.ba-popup-page {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ba-popup-page__content {
  padding: 15px;
  height: 180px;
  width: 350px;
  background-color: var(--color-white);
  border-radius: 5px;
}

.ba-popup-page__main-text {
  text-align: center;
  font-size: 20px;
}

.ba-popup-page__text-description {
  text-align: center;
  font-size: 15px;
}

.ba-popup-page__btn-wrap {
  display: flex;
  justify-content: space-evenly;
  margin: 30px;
}

.ba-btn-wrap__button {
  border: none;
  border-radius: 5px;
  width: 100px;
  height: 30px;
  color: var(--color-white);
  font-size: 15px;
  font-weight: 600;
}

.ba-btn-wrap__button--cancel {
  background-color: var(--color-cancel);
}

.ba-btn-wrap__button--delete {
  background-color: var(--color-delete);
}
</style>
