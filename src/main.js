import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faEnvelope, faFileWord, faHandScissors, faFaceMeh, faLightbulb } from '@fortawesome/free-regular-svg-icons'

import { faGithub, faLinkedin, faCodepen } from '@fortawesome/free-brands-svg-icons'

import { faHouse, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faEnvelope, faGithub, faLinkedin, faFileWord, faCodepen, faHandScissors, faFaceMeh, faHouse, faShoppingBasket, faLightbulb)


const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
