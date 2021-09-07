<template>
  <el-aside class="menu" width="150px">
    <div class="user">
      <img src="../../assets/logo.png" alt="网站logo图片" />
    </div>
    <el-menu :default-active="route.path" router background-color="#495060" text-color="#ffffff">
      <el-menu-item index="/">
        <template #title>首页</template>
      </el-menu-item>
      <el-menu-item index="/postlist">
        <i class="el-icon-tickets"></i>
        <template #title>文章列表</template>
      </el-menu-item>
      <el-menu-item index="/edit">
        <i class="el-icon-document"></i>
        <template #title>新增文章</template>
      </el-menu-item>
      <el-menu-item index="/category">
        <i class="el-icon-folder"></i>
        <template #title>分类管理</template>
      </el-menu-item>
      <el-menu-item index="/tag">
        <i class="el-icon-paperclip"></i>
        <template #title>标签管理</template>
      </el-menu-item>
      <el-menu-item index="/laboratory">
        <template #title>实验室</template>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>
<script setup>
  import { useRoute } from 'vue-router'
  const route = useRoute()
</script>
<style lang="less" scoped>
.menu {
  background: #495060;
  .user {
    padding: 2em;
    img {
      width: 100%;
      height: 100%;
      cursor: pointer;
      transition: all .8s;
      &:hover {
        transform: scale(1.2) rotate(360deg)
      }
    }
  }
}
</style>