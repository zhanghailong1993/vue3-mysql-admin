import { getCurrentInstance } from 'vue'

export default function () {
  const internalInstance = getCurrentInstance()
  const message = internalInstance.appContext.config.globalProperties.$ElMessage
  const ElMessageBox = internalInstance.appContext.config.globalProperties.$ElMessageBox

  return {
    message,
    ElMessageBox
  }
}