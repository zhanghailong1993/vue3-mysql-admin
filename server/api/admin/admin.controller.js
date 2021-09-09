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
    console.log(results)
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