<template>
  <el-container class="home">
    <aside-menu />
    <el-container>
      <Header />
      <el-main>
        <router-view />
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </el-container>
</template>

<script setup>
import AsideMenu from '@/components/AsideMenu/index.vue'
import Header from '@/components/Header.vue'

</script>
<style lang="less" scoped>
.home {
  height: 100vh;
}
</style>
