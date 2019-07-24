import Vue from 'vue'
import VueRouter  from 'vue-router'
import EssayList from '../components/essay/essayList'
import EssayDetail from '../components/essay/detail'
import EssayEdit from '../components/essay/edit'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/essay'
    },
    {
        path: '/essay',
        component: EssayList
    },
    {
        path: '/essay/detail/:id',
        component: EssayDetail
    },
    {
        path: '/essay/edit',
        component: EssayEdit
    },
]

export  default new VueRouter ({
    routes
    }
)
