import { createStore } from 'vuex'
import {country} from './country'
import {events} from './events'


export const store = createStore({
  modules: {
    country,
    events
  }
})