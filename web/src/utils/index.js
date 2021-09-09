import npLoading from './loading'
import { ElMessage } from 'element-plus'

export const Loading = npLoading

/**
 * 消息提示队列
 * @param {string} msg
 * @param {number} delay
 */

export const alertMessage = (() => {
  const queue = []
  let timer = null
  return (msg = '', delay = 1000) => {
    if (!msg) return
    queue.push({
      msg,
      callback() {
        setTimeout(() => ElMessage(msg), queue.length * delay)
      }
    })
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      const temp = []
      while(queue.length > 0) {
        const { msg, callback } = queue.shift()
        if (temp.includes(msg)) continue
        temp.push(msg)
        callback()
      }
    }, 500)
  }
})()