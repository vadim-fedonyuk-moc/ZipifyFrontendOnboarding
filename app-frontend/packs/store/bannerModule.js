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
            console.log(data)
            state.bannersData = data;
        },
        setIdBanner(state, id) {
            this.state.idBanner = id;
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
        async fetchBanners({commit}) {
            await axios.get('/api/v1/banners')
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
                    product_id: 7380168376487
                }
            })
                .then( (res) => {
                })
        },
    },
    namespaced: true
}
