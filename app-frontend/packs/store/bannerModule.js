import axios from "axios"
import router from "../router";

export const bannerModule = {
    state() {
        return {
            bannersList: Object,
            currentBanner: Object,
            idBanner:'',
            idProductBanner: Number,
            inputText:'',
            inputColor:'',
            inputWysiwyg: '',

        }
    },
    getters: {},
    mutations: {
        setData(state, data) {
            state.bannersList = data;
        },
        setCurrentBanner(state, data) {
            state.currentBanner = data;
        },
        setIdBanner(state, id) {
            state.idBanner = id;
        },
        setInputText(state, value) {
            state.inputText = value;
        },
        setInputColor(state, value) {
            state.inputColor = value;
        },
        setInputWysiwyg(state, value) {
            state.inputWysiwyg = value;
        },
        setIdProductBanner(state, value) {
            state.idProductBanner = value;
        },
    },
    actions: {
        fetchBanners({commit}) {
             axios.get('/api/v1/banners')
                .then((res) => {
                    commit('setData', res.data.data)
                })
        },
        createBanner({state}) {
            console.log(state.idProductBanner)
              axios.post('/api/v1/banners', {
                banner: {
                    title: state.inputText,
                    style: {
                        color: state.inputColor
                    },
                    content: state.inputWysiwyg,
                    product_id: state.idProductBanner
                }
            })
                  .then(() => router.push('/'))
        },
        fetchBanner({state, commit}) {
            axios.get('/api/v1/banners/'+ state.idBanner)
                .then((res) => {
                    commit('setCurrentBanner', res.data.data);
                })
                .then(() => router.push('/edit'))
        },
        deleteBanner({state, dispatch}) {
            axios.delete('/api/v1/banners/' + state.idBanner)
                .then((res) => {
                    dispatch('fetchBanners');
                })
        },
        changeBanner({state}) {
            axios.put('/api/v1/banners/' + state.idBanner, {
                banner: {
                    title: state.inputText,
                    style: {
                        color: state.inputColor
                    },
                    content: state.inputWysiwyg,
                    product_id:state.idProductBanner
                }
            })
                .then(() => router.push('/'));
        },
    },
    namespaced: true
}
