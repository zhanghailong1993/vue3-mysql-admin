import { reactive } from 'vue'

export default function () {
  const loadings = reactive({})

  const setLoading = (loadingName, value) => {
    loadings[loadingName] = value
  }
  return {
    loadings,
    setLoading
  }
}