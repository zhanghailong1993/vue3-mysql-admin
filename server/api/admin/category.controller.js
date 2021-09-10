exports.getCategories = async (ctx) => {
  let sql = `SELECT * FROM category`
  try {
    let results = await ctx.execSql(sql)
    ctx.body = {
      errcode: 0,
      success: true,
      data: {
        list: results.length > 0 ? results : []
      }
    }
  } catch (error) {
    console.log(error)
    ctx.body = {
      errcode: 0,
      success: false,
      message: '查询数据出错'
    }
  }
}