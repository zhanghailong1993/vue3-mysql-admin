const moment = require('moment')

exports.getPostList = async (ctx) => {
  try {
    let sql = `SELECT * FROM post`
    let results = await ctx.execSql(sql)
    ctx.body = {
      errcode: 0,
      success: true,
      message: '',
      data: {
        list: results
      }
    }
  } catch (error) {
    console.log(error)
    ctx.body = {
      success: 0,
      message: '查询数据出错',
      posts: null
    }
  }
}

exports.addPost = async (ctx) => {
  let postData = ctx.request.body
  const newData = {
    ...postData,
    createTime: moment().format('YYYY-MM-DD HH:mm:ss')
  }
  try {
    let insert = await ctx.execSql(`INSERT INTO post SET ?`, newData)
    if (insert.affectedRows > 0) {
      ctx.body = {
        errcode: 0,
        success: true,
        message: ''
      }
    } else {
      ctx.body = {
        errcode: 2000,
        success: false,
        message: '添加文章出错'
      }
    }
  } catch (error) {
    console.log(error)
    ctx.body = {
      errcode: 2000,
      success: false,
      message: '添加文章出错'
    }
  }
}

exports.deletePost = async(ctx) => {
  const { id } = ctx.request.body
  let sql = `DELETE FROM post WHERE id=${id}`
  try {
    const results = await ctx.execSql(sql)
    ctx.body = {
      errcode: 0,
      success: true
    }
  } catch (error) {
    ctx.body = {
      errcode: 2000,
      success: false,
      message: '文章删除出错'
    }
  }
}

exports.publishPost = async (ctx) => {
  const { id = 0 } = ctx.request.body
  let sql = `UPDATE post SET STATUS='PUBLISHED' WHERE id=${id}`
  try {
    const results = await ctx.execSql(sql)
    ctx.body = {
      errcode: 0,
      success: true,
      results
    }
  } catch (error) {
    ctx.body = {
      errcode: 2000,
      success: false,
      message: '文章发布出错'
    }
  }
}

exports.offlinePost = async (ctx) => {
  const { id = 0 } = ctx.request.body
  let sql = `UPDATE post SET STATUS='OFFLINE' WHERE id=${id}`
  try {
    const results = await ctx.execSql(sql)
    ctx.body = {
      errcode: 0,
      success: true,
      results
    }
  } catch (error) {
    ctx.body = {
      errcode: 2000,
      success: false,
      message: '文章下线出错'
    }
  }
}

exports.getPostById = async (ctx) => {
  const { id = 0 } = ctx.request.body
  let sql = `SELECT * FROM post WHERE id=${id}`
  try {
    let results = await ctx.execSql(sql)
    if (results.length > 0) {
      ctx.body = {
        errcode: 0,
        success: true,
        post: results[0]
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