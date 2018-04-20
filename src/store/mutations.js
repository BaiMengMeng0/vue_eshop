import {RECEIVE_ADLIST,RECEIVE_CAROUSEL,RECEIVE_SORTLIST,RECEIVE_BRANDLIST,RECEIVE_BRAND} from './mutation-types'
import Vue from 'vue'
export default {
  [RECEIVE_ADLIST] (state, {adLists}) {
    state.adLists = adLists
  },
  [RECEIVE_CAROUSEL] (state, {carousels}) {
    state.carousels = carousels
  },
  [RECEIVE_SORTLIST] (state, {lists}) {
    state.lists = lists
  },
 [RECEIVE_BRANDLIST] (state, {brands}) {
  state.brands = brands
 },
 [RECEIVE_BRAND] (state, {allbrand}) {
  state.allbrand = allbrand
 }
}
