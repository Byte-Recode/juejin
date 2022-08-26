import Vue from "vue";
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import layout from '../pages/layout'
import home from '../pages/home'
import pins from '../pages/pins'
import course from '../pages/course'
import live from '../pages/live/index'
import event from '../pages/event/index'
import homeTags from "../pages/home/homeTags";
import courseTags from "../pages/course/courseTags";
import creator from "../pages/creator/index";
import editor from "../pages/creator/editor.vue"
import chest from "../pages/creator/chest/index.vue"
import postarticle from "../pages/article/article.vue"

const routes = [{
		path: '/',
		component: layout,
		children: [{
				path: '/',
				component: home,
				children: [{
					path: '/',
					component: homeTags
				}]
			},
			{
				path: 'pins',
				component: pins
			},
			{
				path: 'course',
				component: course,
				children: [{
					path: '/course',
					component: courseTags
				}]
			},
			{
				path: 'live',
				component: live
			},
			{
				path: 'event',
				component: event
			},
			{
				path: 'article',
				component: postarticle
			},
		]
	},
	{
		path: '/creator',
		component: creator
	},
	{
		path: '/chest',
		component: chest
	},
	{
		path: '/editor',
		component: editor
	},
]

const router = new VueRouter({
	mode: 'history',
	routes,
	linkActiveClass: 'active'
})
export default router