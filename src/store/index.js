import { createStore } from 'vuex'
import {country} from './country'
import {events} from './events'
import {standing} from './standing'


export const store = createStore({
  modules: {
    country,
    events,
    standing
  }
})