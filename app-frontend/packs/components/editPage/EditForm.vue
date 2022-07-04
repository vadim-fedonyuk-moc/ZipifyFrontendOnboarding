<template>
  <div class="ba-form-section">
    <div>
      <h3 class="ba-form-section__title">Creation points</h3>
      <div class="ba-form-section__line "></div>
    </div>
    <div class="ba-form-block">
      <label>Name banner</label>
      <input class="ba-form-block__name-banner" type="text" placeholder="Name banner">
    </div>
    <input class="ba-form-section__target-product" type="button" value="Target product">
    <div>
      <label>Background color</label>
      <input class="ba-form-section__color-banner" type="color">
    </div>
    <div>
      <p>Text banner*</p>
      <p class="text-banner-description">*no more than 50 symbols </p>
      <Wysiwyg/>
    </div>
  </div>
  <div class="ba-form-section__control-section">
    <button class="ba-control-section__button ba-control-section__button--back" type="button">Back</button>
    <button class="ba-control-section__button ba-control-section__button--save" type="submit">Save</button>
  </div>
</template>

<script>
import Wysiwyg from "./Wysiwyg";

export default {
  name: "EditForm",
  components: {Wysiwyg}
}
</script>

<style scoped>
.ba-form-section {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px 30px 70px 30px;
  background: var(--color-background);
  border-right: solid 1px rgba(151, 151, 151, 0.35);
  width: 40%;
}

.ba-form-section__title {
  margin: 0;
}

.ba-form-block__name-banner {
  padding-left: 5px;
  margin-top: 10px;
  border-radius: 5px;
  border: solid 1px rgba(151, 151, 151, 0.35);
  height: 30px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.ba-form-section__line {
  margin-top: 15px;
  width: 100%;
  height: 2px;
  border-top: solid 1px var(--color-line);
}

.ba-form-block {
  display: flex;
  flex-direction: column;
}

.text-banner-description {
  font-size: 12px;
  margin: 2px;
}

.ba-form-section__color-banner {
  margin-left: 50px;
}

.ba-form-section__target-product {
  border-radius: 5px;
  height: 34px;
  background: var(--color-white);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border: solid 1px rgba(151, 151, 151, 0.35);
  font-size: 15px;
}

.ba-form-section__control-section {
  position: fixed;
  right: 50px;
  bottom: 50px;
}

.ba-control-section__button {
  width: 100px;
  height: 30px;
  margin: 15px;
  border-radius: 5px;
}

.ba-control-section__button--back {
  border: solid 2px var(--color-violet);
  background: var(--color-white);
  font-size: 15px;
}

.ba-control-section__button--save {
  border: none;
  background: var(--color-violet);
  color: var(--color-white);
  font-size: 15px;
}
</style>
