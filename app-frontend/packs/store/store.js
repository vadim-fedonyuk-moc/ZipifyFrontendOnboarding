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
	FETCH_BANNERS(state, banners) {
		if ((state.bannersData).length) {
			state.bannersData = [];
		}
		state.bannersData.push(banners);
	},
	DELETE_BANNER(state, id) {
		let index = state.bannersData.findIndex(banner => banner.id == id)
		state.bannersData.splice(index, 1)
	}
}

const state = {
	productId: [
		6806344794283,
		6799744958635,
		6806345547947
	],
	banner: {
		bannerId: 7,
		title: 'title',
		content: 'new content',
		style: { key: '#hhfdfjhd' },
		product_id: 6806344794283,
	},
	bannersData: []
}

const getters = {
	getBannersData: state => {
		return state.bannersData
	}
}

const actions = {
	getBannerById({ commit }, bannerId) {
		fetch("api/v1/banners/" + bannerId).then((response) =>
			console.log(response)
		)
	},

	getBanners({ commit }) {
		fetch("api/v1/banners")
			.then(response => response.json())
			.then((response) => {
				commit("FETCH_BANNERS", response.data);
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
					style: { key: bannerColor },
					product_id: productId,
				},
			}),
		};
		console.log(productId);
		fetch("api/v1/banners", requestOptions).then((response) =>
			console.log(response)
		);
	},

	updateBanner({ commit }, data) {
		const { bannerId, title, content, bannerColor, productId } = data;
		const requestOptions = {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				banner: {
					title: title,
					content: content,
					style: { key: bannerColor },
					product_id: productId,
				},
			}),
		}
		fetch(`api/v1/banners/${bannerId}`, requestOptions).then(
			(response) => console.log(response)
		);
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
