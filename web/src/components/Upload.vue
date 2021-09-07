<template>
  <section class="upload">
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
    >
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>    
  </section>
</template>
<script setup>

</script>
<style lang="less" scoped>
.avatar-uploader {
  text-align: left;
}
</style>