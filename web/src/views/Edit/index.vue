<template>
  <section class="edit right-container">
    <el-form label-width="80px">
      <el-form-item label="文章标题">
        <el-input type="text" v-model="post.title" placeholder="文章标题" />
      </el-form-item>
      <el-form-item style="text-align:left" clearable label="分类">
        <el-select multiple v-model="post.categoryId">
          <el-option>1</el-option>
          <el-option>2</el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-input type="text" v-model.trim="post.newTag" placeholder="标签，可使用 逗号, 分号; 分割" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="btn-default btn-primary">发布文章</el-button>
        <el-button type="primary" class="btn-default">保存草稿</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>
<script setup>
import { reactive } from 'vue'

const post = reactive({
  title: '',
  categoryId: '',
  newTag: ''
})
</script>