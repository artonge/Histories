var VueRouter = require('vue-router').default

// Import views
import HomeView    from '../Views/HomeView/HomeView'
import StoryView   from '../Views/StoryView/StoryView'
import StoriesView from '../Views/StoriesView/StoriesView'
import StoryCreationView from '../Views/StoryCreationView/StoryCreationView'

// Build VueRouter
export default new VueRouter(<vuejs.RouterOption>{
	routes: [
		{ name: 'root', path: '/', redirect: '/home' },
		{ name: 'home', path: '/home', component: HomeView },
		{ name: 'stories', path: '/stories', component: StoriesView },
		{ name: 'story', path: '/stories/:storyID', component: StoryView },
		{ name: 'create', path: '/create', component: StoryCreationView },
	]
})
