import { createStore } from 'vuex'
import * as utils from '@/utils'

const nploading = new utils.Loading({ delay: 500 })

export default createStore({
  state: {
    loadings: {

    }
  },
  mutations: {
    setLoading (state, data) {
      state.loadings = { ...state.loadings, ...data }
      if (Object.values(state.loadings).some(v => v)) {
        nploading.start()
      } else {
        nploading.done()
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
