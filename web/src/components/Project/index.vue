<template>
  <section class="project">
    <div>
			<img src="" alt="项目图片">
			<div class="operate">
				<el-button type="primary" icon="el-icon-refresh" @click="updateProject">更新项目</el-button>
				<el-button type="primary" icon="el-icon-delete">删除项目</el-button>
			</div>
		</div>
		<div>
			<h3 class="name">3232323223</h3>
			<p class="description">ewqrwqerqwrqwerqwerwqr</p>
			<el-button icon="el-icon-picture-outline-round">在线效果</el-button>
			<el-button icon="el-icon-eleme">GitHub查看</el-button>
		</div>
  </section>
	<Dialog ref="root" />

</template>
<script setup>
import { ref, onMounted } from 'vue'
import Dialog from './components/Dialog.vue'

const root = ref(null)
const dialogVisible = ref(false)

const updateProject = () => {
	root.value.show()
	// dialogVisible.value = true
}

</script>