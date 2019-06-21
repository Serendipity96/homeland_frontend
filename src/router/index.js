import Vue from 'vue'
import VueRouter  from 'vue-router'
import Essay from '../components/essay/essay'
import Record from '../components/record/record'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/essay'
    },
    {
        path: '/essay',
        component: Essay
    },
    {
        path: '/record',
        component: Record
    }
]

export  default new VueRouter ({
    routes
    }
)