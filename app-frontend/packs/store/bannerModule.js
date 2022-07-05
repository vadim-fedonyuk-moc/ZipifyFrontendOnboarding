import axios from "axios"

export const bannerModule = {
    state() {
        return {
            bannersData: [],
            idBanner:'',
            inputText:'',
            inputColor:'',
            inputWysiwyg: '',
        }
    },
    getters: {},
    mutations: {
        setData(state, data) {
            state.bannersData = data;
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
    },
    actions: {
        fetchBanners({commit}) {
             axios.get('/api/v1/banners')
                .then((res) => {
                    commit('setData', res.data.data)
                })
        },
        createBanner({state}) {
              axios.post('/api/v1/banners', {
                banner: {
                    title: state.inputText,
                    style: {
                        color: state.inputColor
                    },
                    content: state.inputWysiwyg,
                    product_id: 7380166475943
                }
            })
                .then( (res) => {
                })
        },
        deleteBanner({state, dispatch}) {
            axios.delete('/api/v1/banners/' + state.idBanner)
                .then((res) => {
                    dispatch('fetchBanners');
                })
        },
    },
    namespaced: true
}
