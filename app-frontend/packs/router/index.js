import { createRouter, createWebHistory } from 'vue-router'
import EditorPage from "../components/editPage/EditorPage";
import HomePage from "../components/homePage/HomePage";

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage,
    },
    {
        path: '/edit',
        name: 'EditPage',
        component: EditorPage,
    },
]
const index = createRouter({
    history: createWebHistory(),
    routes
})
export default index
