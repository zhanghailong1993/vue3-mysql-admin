<template>
  <section class="login">
    <div class="login-section">
      <h2>Don's 后台管理系统</h2>
      <el-form ref="ruleRef" :model="params" :rules="rules" label-width="70px">
        <el-form-item prop="username" label="用户名">
          <el-input name="new-username" autocomplete="off" v-model="params.username" clearable placeholder="用户名" />
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input autocomplete="new-password" v-model="params.password" clearable type="password" placeholder="密码" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import * as api from '@/api'
import { useRouter } from 'vue-router'
import useElMessage from '@/useSetup/useElMessage.js'

const { message } = useElMessage()
const router = useRouter()

const ruleRef = ref(null)
const params = reactive({
  username: '',
  password: ''
})

const rules = ref({
  password: [
    {
      required: true,
      message: '请输入密码'
    }
  ],
  username:  [
    {
      required: true,
      message: '请输入用户名'
    }
  ]
})

const loginHandler = async () => {
  const res = await api.login.login(params)
  const { errcode = 0, data ={} } = res
  if (errcode === 0) {
    const { token = '' } = data
    message.success('登录成功')
    localStorage.setItem('DON_BLOG_TOKEN', token);
    router.replace('/postlist')
  }
}

const login = () => {
  ruleRef.value.validate((err) => {
    if (err) {
      loginHandler()
    }
  })
}

</script>
<style lang="less" scoped>
@base-color: #2d8cf0;

.login {
  position: relative;
  height: 100vh;
  background-color: #324057;
  .login-section {
    position: absolute;
    width: 400px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -54%);
    /deep/ .el-form-item__label {
      color: #fff;
    }
  }
  h2 {
    font-size: 2.5em;
    color: #fff;
    text-align: center;
    margin-bottom: 1.5em;
  }
  .login-form {
    padding: 2em;
    background-color: #fff;
    border-radius: 0.2em;
  }
  .form-group {
    margin-bottom: 1.5em;
    input, button {
      width: 100%;
      font-size: 1em;
      line-height: 2;
      margin: 0;
      padding: 0.6em 1em;
      border: 1px solid #ddd;
      border-radius: 4em;
      box-sizing: border-box;
      &:focus {
        border-color: @base-color;
      }
    }
    .btnLogin {
      color: #fff;
      cursor: pointer;
      border-color: @base-color;
      background-color: @base-color;
    }
  }
  .error {
    position: absolute;
    left: 50%;
    bottom: 1em;
    transform: translateX(-50%);
    font-size: 1em;
    color: red;
    text-align: center;
  }
}
</style>