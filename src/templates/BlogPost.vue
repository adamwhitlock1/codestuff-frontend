<template>
  <Layout>
    <div class="flex flex-wrap container mx-auto justify-center pt-12">
      <div
        class="pr-4"
        :class="{ 'w-2/5': $page.post.image, 'w-full': !$page.post.image }"
      >
        <h1
          class="text-2xl bg-cyan-500 py-2 text-white rounded tracking-wide px-4"
        >
          {{ $page.post.title }}
        </h1>
        <p class="pr-2 text-right my-3 italic">Posted: {{ $page.post.date }}</p>
        <div
          class="content border-t border-yellow-600"
          v-html="$page.post.content"
        />
      </div>
      <div v-if="$page.post.image" class="w-3/5">
        <g-image
          class="rounded shadow-lg border-gray-200 border px-2"
          :src="$page.post.image"
        />
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    }
  }
}
</script>

<page-query>
  query Post ($path: String!) {
    post(path: $path) {
      title
      date (format: "D MMMM, YYYY")
      content
      image
    }
  }
</page-query>

<style>
/* .header {
    margin-bottom: 70px;
  } */

.article {
  margin-top: 15px;
}

.article h1 {
  font-size: 40px;
}

.article img {
  width: 100%;
  border-radius: 5px;
}

.content p a {
  @apply text-magenta-600;
  text-decoration: underline;
}

.content p {
  @apply mt-2;
}

.content a:hover {
  text-decoration: none;
}

.content ol,
.content ul {
  list-style-position: outside;
}

.content ul {
  list-style: disc;
  padding-left: 20px;
}

.content p:first-child {
  margin-top: 15px;
}

.article .content p {
  margin-top: 0;
  margin-bottom: 10px;
  line-height: 1.5;
}

iframe {
  margin-top: 20px;
}
</style>
