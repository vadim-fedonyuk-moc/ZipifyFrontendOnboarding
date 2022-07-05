<template>
  <div class="ba-banners-section">
    <div>
      <h2 class="ba-banners-section__title">Banners</h2>
      <div class="ba-banners-section__line "></div>
    </div>
    <div v-if="true" class="ba-banners-section__cards">
      <Card v-for="card in bannersData"
            :key="card"
            :card="card"
            @onDeleteBanner="onDeleteBanner"
      />
    </div>
    <div v-else class="ba-banners-section__empty">
      <EmptySection/>
    </div>
    <div
        v-if="isShowPopup"
        @click.stop="this.onClosePopup"
    >
      <div @click.stop>
        <PopupConfirm @closePopup="onClosePopup"/>
      </div>
    </div>
  </div>
</template>

<script>
import EmptySection from "./EmptySection";
import Card from "./Card";
import {mapState} from "vuex";
import PopupConfirm from "./PopupConfirm";

export default {
  name: "BannersSection",

  components: {
    Card,
    EmptySection,
    PopupConfirm
  },
  data() {
    return {
      isShowPopup: false
    }
  },
  methods: {
    onDeleteBanner() {
      this.isShowPopup = !this.isShowPopup;
    },
    onClosePopup() {
      this.isShowPopup = !this.isShowPopup;
    }
  },
  computed: {
    ...mapState({
      bannersData: state => state.banner.bannersData
    })
  },

  mounted() {
    this.$store.dispatch('banner/fetchBanners')
  },
}
</script>

<style scoped>

.ba-banners-section {
  padding: 20px 40px;
  height: 100%;
  background: var(--color-background);
}

.ba-banners-section__title {
  font-weight: 600;
  display: flex;
  justify-content: flex-start;

}

.ba-banners-section__line {
  width: 100%;
  height: 2px;
  border-top: solid 1px var(--color-line);
}

.ba-banners-section__empty {
  display: flex;
  justify-content: center;
  margin-top: 100px;
}

.ba-banners-section__cards {
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;
}
</style>
