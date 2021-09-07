<template>
  <el-header class="header">
    <div class="header-left">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>哈哈列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="header-right">
      <el-avatar :size="40" class="avatar"></el-avatar>
      <el-dropdown>
        <span class="el-dropdown-link">
          张海龙<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>
<script setup>
  const logout = () =>  {
    alert('退出登录')
  }
</script>
<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #eff2f7;
  &-right {
    display: flex;
    align-items: center;
    margin-right: 10px;
    .avatar {
      margin-right: 20px;
    }
  }
}
</style>