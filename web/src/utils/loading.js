import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

export default class {
  constructor(opt) {
    const { delay = 300 } = opt || {}
    this.delay = delay
    this.startTime = Date.now()
  }
  start () {
    if (NProgress.isStarted()) return
    this.startTime = now
    if (this.timer) clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      this.timer = null
      if (!NProgress.isStarted()) {
        NProgress.start()
      }
    }, this.delay)
  }
  done () {
    // 小于设定的延迟时间，直接清除定时器不开启加载提示条
    if (NProgress.isStarted()) {
      NProgress.done()
      this.startTime = now
    } else if (now - this.startTime < this.delay && this.timer) {
      clearTimeout(this.timer)
      this.timer = null
    }
  }
}