<template>
  <section class="post-table">
    <el-table :loading="loading" :data="tableData" style="width: 100%">
      <el-table-column align="center" type="index" label="#"></el-table-column>
      <el-table-column align="center" prop="title" label="标题" width="180"> </el-table-column>
      <el-table-column align="center" prop="categoryId" label="分类" width="180"> </el-table-column>
      <el-table-column align="center" prop="createTime" label="创建时间"> </el-table-column>
      <el-table-column align="center" prop="status" label="状态"> </el-table-column>
      <el-table-column width="300" fixed="right" align="center" prop="operate" label="操作">
        <template #default>
          <el-button type="text" size="mini"
            >编辑</el-button
          >
          <el-button type="text" size="mini"
            >上线</el-button
          >
          <el-button type="text" size="mini"
            >发布</el-button
          >
          <el-button
            size="mini"
            type="text"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>
<script setup>
import { ref } from 'vue'
import * as api from '@/api'

let tableData = ref([])
let loading = ref(false)

const fetchData = async () => {
  loading.value = true
  const res = await api.post.getPostList({
    page: 1,
    limit: 10
  }).finally(() => loading.value = false)
  const { errcode, data = {}} = res
  if (errcode === 0) {
    const { list = [] } = data
    tableData.value = list
  }
}
fetchData()

</script>