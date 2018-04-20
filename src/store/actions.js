import {RECEIVE_ADLIST,RECEIVE_CAROUSEL,RECEIVE_SORTLIST,RECEIVE_BRANDLIST,RECEIVE_BRAND} from './mutation-types'
import {reqAdList,reqCarousel,reqSortList,reqBrandList,reqBrands} from "../api/index";
export default {
  // 异步获取adList
  async getAdList({commit}) {
    // 异步请求获取categorys
    const result = await reqAdList()
    if (result.code === 0) {
      const adLists = result.data
      // 提交commutation
      commit(RECEIVE_ADLIST, {adLists})
    }
  },
  async getCarousel({commit}) {
    // 异步请求获取categorys
    const result = await reqCarousel()
    if (result.code === 0) {
      const carousels = result.data
      // 提交commutation
      commit(RECEIVE_CAROUSEL, {carousels})
    }
  },
  async getSortList({commit}) {
    // 异步请求获取categorys
    const result = await reqSortList()
    if (result.code === 0) {
      const lists = result.data
      // 提交commutation
      commit(RECEIVE_SORTLIST, {lists})
    }
  },
 async getBrandList({commit}) {
  // 异步请求获取brands
  const result = await reqBrandList()
  if (result.code === 0) {
    const brands = result.data
    // 提交commutation
    commit(RECEIVE_BRANDLIST, {brands})
  }
},
  async getAllBrand({commit}) {
    // 异步请求获取brands
    const result = await reqBrands()
    if (result.code === 0) {
      const allbrand = result.data
      // 提交commutation
      commit(RECEIVE_BRAND, {allbrand})
    }
  }
}
