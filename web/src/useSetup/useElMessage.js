import { getCurrentInstance } from 'vue'

export default function () {
  const internalInstance = getCurrentInstance()
  const message = internalInstance.appContext.config.globalProperties.$ElMessage
  return {
    message
  }
}