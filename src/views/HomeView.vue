<script setup lang="ts">
import { ref } from 'vue'
import BlogCard from "@/components/BlogCard.vue";
type Blog = {
  articleId: string
  title: string
  imgUrl: string
  content: string
  publishedAt: string
}
const blogList = ref<Blog[]>()
// TODO: APIから取得したデータを入れるまでの仮のデータ
blogList.value = [
  {
    articleId: 'id3',
    title: 'エアロバイクを漕いだ後に会議に行くとバレるという話',
    imgUrl: 'https://sakidorico.s3.amazonaws.com/wp/wp-content/uploads/2023/09/64f1787f8af60.jpg',
    content: '<h1>エアロバイクを漕いだ後に会議に行くとバレるという話</h1>',
    publishedAt: '2023/12/09',
  },
  {
    articleId: 'id2',
    title: '俺が好きなサウナを紹介させてくれ！！',
    imgUrl: 'https://manager.reservation.jp//cmn/img/facility/10000001/M/1598601781785219.jpg',
    content: '<h1>俺が好きなサウナを紹介させてくれ！！</h1>',
    publishedAt: '2023/12/08',
  },
  {
    articleId: 'id1',
    title: 'このブログについて',
    content: '<h1>このブログについて</h1>',
    publishedAt: '2023/12/1',
  },
]
</script>

<template>
  <div class="card-container">
    <BlogCard
        v-for="blog in blogList"
        :key="blog.articleId"
        :blog="blog"
    />
  </div>
</template>
<style lang="scss" scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.content {
  background-color: pink;
}
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>
