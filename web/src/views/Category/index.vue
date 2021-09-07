<template>
  <section class="category">
    <div class="cat-header">
      <ul class="cat-list">
        <li class="cat-item" v-for="(cat, index) in catList" :key="cat.id">
          <el-button :type="currentCat.id === cat.id ? 'primary' : ''" size="small" @click="editCategory(cat, index)">
            {{cat.name}}({{cat.count}})
            <i class="el-icon-close icon" v-if="cat.id !== 0"></i>
          </el-button>
        </li>
      </ul>
      <el-button type="primary" size="small" icon="el-icon-plus">添加分类</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column align="center" type="index" label="#"></el-table-column>
      <el-table-column align="center" prop="title" label="标题" width="180"> </el-table-column>
      <el-table-column align="center" prop="name" label="分类" width="180"> </el-table-column>
      <el-table-column align="center" prop="date" label="创建时间"> </el-table-column>
      <el-table-column align="center" prop="status" label="状态"> </el-table-column>
      <el-table-column align="center" prop="operate" label="操作" fixed="right">
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
  const catList = reactive([])
  const currentCat = reactive({
    id: 0,
    name: '全部分类',
    count: 0
  })
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

  const editCategory = (cat, index) => {
    console.log(cat, index)
  }
</script>

<style lang="less" scoped>
.cat-header {
  display: flex;
  align-items: flex-start;
}
.cat-list {
  display: flex;
  flex-wrap: wrap;
  .cat-item {
    margin: 0 1em 1em 0;
  }
  .icon {
    color: red;
  }
}
</style>