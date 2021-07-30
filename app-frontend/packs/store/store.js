import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const mutations = {
  setBanner(state, banner) {
    state.banner.title = banner.title
    state.banner.content = banner.content
    state.banner.style = banner.style
    state.banner.product_id = banner.product_id
  },
  SET_BANNERS(state, banners) {
    state.bannersData = banners;
  },
  UPDATE_BANNERS(state, updatedBanner) {
    const index = state.bannersData.findIndex(banner => banner.id === updatedBanner.id)
    state.bannersData.splice(index, 1, updatedBanner)
  },
  DELETE_BANNER(state, id) {
    let index = state.bannersData.findIndex(banner => banner.id == id);
    state.bannersData.splice(index, 1);
    this.state.bannersData = state.bannersData;
  }
}

const state = {
  bannersData: [],
}

const getters = {
  getBannersData: state => {
    return state.bannersData
  }
}

const actions = {
  fetchBanners({ commit }) {
    fetch("api/v1/banners")
      .then(response => response.json())
      .then((response) => {
        commit("SET_BANNERS", response.data);
      });
  },

  createBanner({ commit }, data) {
    const { title, content, bannerColor, productId } = data;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        banner: {
          title: title,
          content: content,
          style: { color: bannerColor },
          product_id: productId,
        },
      }),
    };
    fetch("api/v1/banners", requestOptions).then((response) =>
      console.log(response)
    );
  },

  updateBanner({ commit }, data) {
    const { id, title, content, bannerColor, productId } = data;
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        banner: {
          title: title,
          content: content,
          style: { color: bannerColor },
          product_id: productId,
        },
      }),
    }
    fetch(`api/v1/banners/${id}`, requestOptions)
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        commit('UPDATE_BANNERS', response.data)
      });
  },

  deleteBanner({ commit }, bannerId) {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    bannerId = bannerId.bannerId;
    fetch("api/v1/banners/" + bannerId, requestOptions)
      .then((response) => {
        console.log(response)
        commit('DELETE_BANNER', bannerId)
      });
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
