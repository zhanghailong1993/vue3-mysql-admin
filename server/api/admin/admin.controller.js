exports.login = async(ctx) => {
  const { username = '', password = '' } = ctx.request.body
  if (!username || !password) {
    ctx.body = {
      errcode: 2000,
      success: false,
      message: '用户名或密码不能为空'
    }
    return
  }
  try {
    let results = await ctx.execSql(`SELECT id, hashedPassword, salt FROM user WHERE role='ADMIN' and userName = ?`, username)
    if (results.length > 0) {

    } else {
      const res = await ctx.execSql(`INSERT INTO user SET ?`, {
        id: 32,
        hashedPassword: password,
        salt: '',
        userName: username,
        role: 'ADMIN'
      })
      if (res) {
        ctx.body = {
          errcode: 0,
          success: true,
          data: res
        }
      }
    }
  } catch (error) {
    console.log(error)
    ctx.body = {
      errcode: 2000,
      success: false,
      message: '查询数据出错'
    }
  }
}

exports.signOut = async(ctx) => {
  
}