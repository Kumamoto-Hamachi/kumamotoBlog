<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
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
  // TODO: 後ほどAPIから取得するようにする
  blog.value = {
    title: 'エアロバイクを漕いだ後に会議に行くとバレるという話',
    ogpUrl: 'https://sakidorico.s3.amazonaws.com/wp/wp-content/uploads/2023/09/64f1787f8af60.jpg',
    content: '<h1>エアロバイクを漕いだ後に会議に行くとバレるという話</h1>',
    published: '2023/12/09',
    articleId: articleId.value
  }
  isLoaded.value = true
})

</script>

<template>
  <div v-if="isLoaded">
    <div class="blog-cotent" v-html="blog.content"></div>
  </div>
</template>

<style scoped>

</style>