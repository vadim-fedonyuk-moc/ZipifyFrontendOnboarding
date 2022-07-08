<template>
  <form class="ba-form-section" @submit.prevent="formSubmit">
    <div>
      <h3 class="ba-form-section__title">Creation points</h3>
      <div class="ba-form-section__line "></div>
    </div>
    <div class="ba-form-block">
      <label>Name banner</label>
      <input
          class="ba-form-block__name-banner"
          type="text" placeholder="Name banner"
          :value="inputText"
          @input="updateInput">
    </div>
    <button
        class="ba-form-section__target-product"
        type="button"
        @click="resourcePicker()">Target value
    </button>
    <div>
      <label>Background color</label>
      <input
          class="ba-form-section__color-banner"
          type="color"
          :value="inputColor"
          @input="updateInputColor">
    </div>
    <div>
      <p>Text banner*</p>
      <p class="text-banner-description">*no more than 50 symbols </p>
      <Wysiwyg
          @update:model-value-wysiwyg="setInputWysiwyg"
      />
    </div>
    <div class="ba-form-section__control-section">
      <router-link to="/">
        <button class="ba-control-section__button ba-control-section__button--back" type="button">Back</button>
      </router-link>
      <button class="ba-control-section__button ba-control-section__button--save" type="submit">Save</button>
    </div>
  </form>
</template>

<script>
import {mapMutations, mapState, mapActions} from 'vuex';
import Wysiwyg from "./Wysiwyg";
import {ResourcePicker} from "@shopify/app-bridge/actions";
import app from "../../shared/shopifyApp";


export default {
  name: "EditForm",
  components: {Wysiwyg},
  methods: {
    resourcePicker() {
      const productPicker = ResourcePicker.create(app, {
        resourceType: ResourcePicker.ResourceType.Product,
        options: {
          selectMultiple: false,
          showHidden: false,
        }
      })
      productPicker.dispatch(ResourcePicker.Action.OPEN)
      productPicker.subscribe(ResourcePicker.Action.SELECT, ({selection}) => {
        this.$store.commit('banner/setIdProductBanner', selection[0].id.slice(22))
      })
    },
    ...mapMutations({
      setInputText: 'banner/setInputText',
      setInputColor: 'banner/setInputColor',
      setInputWysiwyg: "banner/setInputWysiwyg"
    }),
    ...mapActions({
      createBanner: 'banner/createBanner',
      changeBanner: 'banner/changeBanner'
    }),
    formSubmit() {
      if (this.$store.state.banner.idBanner) {
        this.changeBanner()
      } else {
        this.createBanner()
      }
    },
    updateInput(value) {
      this.setInputText(value.target.value)
    },
    updateInputColor(value) {
      this.setInputColor(value.target.value)
    },
  },
  computed: {
    ...mapState({
      inputText: state => state.banner.inputText,
      inputColor: state => state.banner.inputColor,
      inputWysiwyg: state => state.banner.inputWysiwyg,
      idBanner: state => state.banner.idBanner
    })
  },
  mounted() {
    this.$store.commit('banner/setInputColor', '#FFF')
  }
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
