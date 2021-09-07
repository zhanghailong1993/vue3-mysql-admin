<template>
  <section class="laboratory">
    <div class="laboratory-header">
      <h2><span>实验室项目列表</span></h2>
      <el-button size="small" type="primary" icon="el-icon-plus">添加项目</el-button>
      <Project />
    </div>
  </section>
</template>
<script setup>
import Project from '@/components/Project/index.vue'
</script>