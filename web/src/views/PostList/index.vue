<template>
  <section class="post-table">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column align="center" type="index" label="#"></el-table-column>
      <el-table-column align="center" prop="title" label="标题" width="180"> </el-table-column>
      <el-table-column align="center" prop="name" label="分类" width="180"> </el-table-column>
      <el-table-column align="center" prop="date" label="创建时间"> </el-table-column>
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
  import { reactive } from 'vue'
  const tableData = reactive([
    {
      title: '不告诉你',
      date: '2016-05-02',
      name: '王小虎',
      status: '完成',
    },
    {
      title: '不告诉你2',
      date: '2016-09-02',
      name: '王小军',
      status: '完成'
    },
    {
      title: '不告诉你3',
      date: '2016-09-02',
      name: '王小军军',
      status: '完成'
    },
    {
      title: '不告诉你4',
      date: '2016-09-02',
      name: '王小军军军',
      status: '完成'
    },
  ])
</script>