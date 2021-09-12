<template>
  <section class="edit right-container">
    <el-form ref="forms" :model="post" :rules="rules" label-width="80px">
      <el-form-item prop="title" label="文章标题">
        <el-input type="text" v-model="post.title" placeholder="文章标题" clearable />
      </el-form-item>
      <el-form-item prop="categoryId" style="text-align:left" clearable label="分类">
        <el-select clearable v-model="post.categoryId">
          <el-option
            v-for="item in categoryArr"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="newTag" label="标签">
        <el-input type="text" clearable v-model.trim="post.newTag" placeholder="标签，可使用 逗号, 分号; 分割" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="btn-default btn-primary" @click="publishArticle">发布文章</el-button>
        <el-button type="primary" class="btn-default" @click="draftPost">保存草稿</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>
<script setup>
import { ref, reactive } from 'vue'
import * as api from '@/api'
import { useRoute } from 'vue-router'
import useElMessage from '@/useSetup/useElMessage.js'

const route = useRoute()

const categoryArr = ref([])
const forms = ref(null)

let post = reactive({
  title: '',
  categoryId: '',
  newTag: '',
  status: 'PUBLISHED',
  content: '这是一个文章',
  poster: 'https://www.baidu.com'
})

const rules = reactive({
  title: [
    {
      required: true,
      message: '请填写文章标题'
    }
  ],
  categoryId: [
    {
      required: true,
      message: '请选择分类'
    }
  ],
  newTag: [
    {
      required: true,
      message: '请填写标签'
    }
  ]
})

const { message } = useElMessage()

const handleSubmit = async (value = {}) => {
  const res = await api.post.addPost({
    ...post,
    ...value
  })
  const { errcode } = res
  if (errcode === 0) {
    message.success('发布成功')
  }
}

const publishArticle = () => {
  forms.value.validate((err) => {
    if (err) {
      handleSubmit()
    }
  })
}

const draftPost = () => {
  forms.value.validate((err) => {
    if (err) {
      handleSubmit({
        status: 'DRAFT'
      })
    }
  })
}


const fetch = async () => {
  const res = await api.category.getCategories()
  const { errcode, data = {} } = res
  if (errcode === 0) {
    categoryArr.value = data?.list ?? []
  }
}
fetch()

const getPostById = async (id) => {
  let res = await api.post.getPostById({
    id
  })
  const { success } = res
  if (success) {
    // this.isFirtUpdatePostChange = true;
    // this.isFirtUpdateTagsChange = true;
    post = res?.post || {}
    // this.tags = res.tags;
  }
}

if (route.params.id) {
  getPostById(route.params.id)
}

</script>