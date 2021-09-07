<template>
  <section class="login">
    <div class="login-section">
      <h2>Don's Blog 后台管理系统</h2>
      <el-form ref="ruleRef" :model="params" :rules="rules" label-width="120px">
        <el-form-item prop="username" label="用户名">
          <el-input v-model="params.username" clearable placeholder="用户名" />
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input v-model="params.password" clearable type="password" placeholder="密码" />
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

const loginHandler = () => {
  alert('提交')
}

const login = () => {
  ruleRef.value.validate((err) => {
    if (err) {
      loginHandler()
    }
  })
}

</script>