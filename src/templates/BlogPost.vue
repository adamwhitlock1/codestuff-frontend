<template>
  <Layout>
    <div
      v-if="!$page.post.fullwidth"
      class="container flex flex-wrap justify-center pt-12 mx-auto"
    >
      <div
        class="pr-4"
        :class="{ 'w-2/5': $page.post.image, 'w-full': !$page.post.image }"
      >
        <h1
          class="px-4 py-2 text-2xl tracking-wide text-white rounded bg-cyan-500"
        >
          {{ $page.post.title }}
        </h1>
        <p class="pr-2 my-3 italic text-right">Posted: {{ $page.post.date }}</p>
        <div
          class="border-t border-yellow-600 content"
          v-html="$page.post.content"
        />
      </div>
      <div v-if="$page.post.image" class="w-3/5">
        <g-image
          class="px-2 border border-gray-200 rounded shadow-lg"
          :src="$page.post.image"
        />
      </div>
    </div>

    <!-- full width layout -->
    <div v-else class="container flex flex-wrap justify-center pt-12 mx-auto">
      <div class="w-2/5 px-6">
        <g-image
          v-if="$page.post.image"
          class="p-2 mx-auto mb-2 border border-gray-200 rounded shadow-lg"
          :src="$page.post.image"
        />
        <h1
          class="px-4 py-2 text-2xl tracking-wide text-white rounded bg-cyan-500"
        >
          {{ $page.post.title }}
        </h1>
        <p class="pb-3 pr-2 my-3 italic text-right border-b border-yellow-600">
          Posted: {{ $page.post.date }}
        </p>
      </div>
      <div class="w-3/5">
        <div
          class="px-4 pt-0 mt-0 text-lg content"
          v-html="$page.post.content"
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
  },
  mounted() {
    let codepenScript = document.createElement('script')
    codepenScript.setAttribute(
      'src',
      'https://static.codepen.io/assets/embed/ei.js'
    )
    document.head.appendChild(codepenScript)
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
      fullwidth
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

.article .content {
  line-height: 1.5;
}

iframe {
  margin-top: 20px;
}
</style>
