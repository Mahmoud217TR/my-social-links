import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import icons and add them to the Library */
import { faLinkedinIn, faGithub, faXTwitter, faBluesky, faMedium, faDev } from '@fortawesome/free-brands-svg-icons'

library.add(
  faLinkedinIn,
  faGithub,
  faXTwitter,
  faBluesky,
  faMedium,
  faDev,
)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
