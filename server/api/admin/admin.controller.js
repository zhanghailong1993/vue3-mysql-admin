exports.login = async(ctx) => {
  const { username = '', password = '' } = ctx.request.body
  if (!username || !password) {
    ctx.body = {
      success: 0,
      message: '用户名或密码不能为空'
    }
    return
  }
  ctx.body = {
    errcode: 2000,
    success: false,
    message: '用户名或密码不能为空'
  }
}

exports.signOut = async(ctx) => {
  
}