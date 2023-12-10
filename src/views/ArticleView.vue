<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Get from '@/api/articles/index'
const route = useRoute()
const isLoaded = ref<boolean>(false)
const articleId = ref<string>('')
// TODO: 後ほど型を定義する
const blog = ref<any>()

onMounted(async () => {
  if (Array.isArray(route.params.id)) {
    articleId.value = route.params.id.join(',')
  } else {
    articleId.value = route.params.id
  }
  blog.value = await Get.execute(articleId.value)
  isLoaded.value = true
})

</script>

<template>
  <div v-if="isLoaded">
    <div class="blog-content" v-html="blog.content"></div>
  </div>
</template>

<style scoped>
</style>