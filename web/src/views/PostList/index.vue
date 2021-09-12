<template>
  <section class="post-table">
    <el-table :loading="loading" :data="tableData" style="width: 100%">
      <el-table-column align="center" type="index" label="#"></el-table-column>
      <el-table-column align="center" prop="title" label="标题" width="180"> </el-table-column>
      <el-table-column align="center" prop="categoryId" label="分类" width="180"> </el-table-column>
      <el-table-column align="center" prop="createTime" label="创建时间"> </el-table-column>
      <el-table-column align="center" prop="status" label="状态"> </el-table-column>
      <el-table-column width="300" fixed="right" align="center" prop="operate" label="操作">
        <template #default="scope">
          <router-link :to="`/edit/${scope.row.id}`" class="btn-edit">
            <el-button type="text" size="mini">编辑</el-button>
          </router-link>
          <el-button
            type="text"
            size="mini"
            v-if="scope.row.status === 'PUBLISHED'"
            @click="offlinePost(scope.row.id, scope.$index)"
          >下线</el-button>
          <el-button
            v-else
            type="text"
            size="mini"
            @click="publishPost(scope.row.id, scope.$index)"
          >发布</el-button>
          <el-button
            size="mini"
            type="text"
            @click="deletePost(scope.row.id, scope.$index)"
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
import useMessage from '@/useSetup/useElMessage'

let tableData = ref([])
let loading = ref(false)
const { ElMessageBox, message } = useMessage()

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

const deletePost = (id, index) => {
  ElMessageBox.alert('删除后无法恢复，确认删除该篇文章？', '确认删除', {
    confirmButtonText: '确定',
    callback: async (action) => {
      if (action === 'confirm') {
        let res = await api.post.deletePost({
          id
        })
        const { errcode } = res
        if (errcode === 0) {
          message.success('删除成功')
          fetchData()
        }
      }
    }
  })
}

const publishPost = async (id, index) => {
  ElMessageBox.alert('确认是否发布该篇文章？', '确认发布', {
    confirmButtonText: '确定',
    callback: async (action) => {
      if (action === 'confirm') {
        let res = await api.post.publishPost({
          id
        })
        const { errcode } = res
        if (errcode === 0) {
          message.success('发布文章成功')
          fetchData()
        }
      }
    }
  })
}

const offlinePost = async (id, index) => {
  ElMessageBox.alert('确认是否下线该篇文章？', '确认下线', {
    confirmButtonText: '确定',
    callback: async (action) => {
      if (action === 'confirm') {
        let res = await api.post.offlinePost({
          id
        })
        const { errcode } = res
        if (errcode === 0) {
          message.success('下线文章成功')
          fetchData()
        }
      }
    }
  })
}


</script>
<style lang="less" scoped>
.btn-edit {
  display: inline-block;
  margin-right: 10px;
}
</style>