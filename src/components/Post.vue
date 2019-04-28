<template>
  <div>
    <h3 class="h2 text-4xl" v-html="post.title" />
    <div v-html="post.excerpt" />
    <g-link :to="post.path">
      Keep Reading...
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
