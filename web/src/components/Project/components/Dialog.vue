<template>
	<el-dialog
		v-model="dialogVisible"
		title="添加项目"
		width="600px"
		:show-close="false"
		:close-on-click-modal="false"
		:close-on-press-escape="false"
	>
		<el-form label-width="90px">
			<el-form-item label="项目图片">
				<Upload />
			</el-form-item>
			<el-form-item label="项目名称">
				<el-input placeholder="项目名称" clearable />
			</el-form-item>
			<el-form-item label="在线地址">
				<el-input placeholder="在线地址" clearable />
			</el-form-item>
			<el-form-item label="GitHub地址">
				<el-input placeholder="GitHub地址" clearable />
			</el-form-item>
			<el-form-item label="项目介绍">
				<el-input placeholder="项目介绍" clearable />
			</el-form-item>
		</el-form>
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="cancel">取 消</el-button>
				<el-button type="primary" @click="cancel">确 定</el-button>
			</span>
		</template>
	</el-dialog>
</template>
<script setup>
  import { ref, defineExpose } from 'vue'
  import Upload from '../../Upload.vue'
  
	const dialogVisible = ref(false)
	
	const cancel = () => {
		dialogVisible.value = false
	}

	const show = () => {
		dialogVisible.value = true
	}

	defineExpose({
		show
	})
  </script>