<template>
  <Layout>
    <h1>Welcome to codestuff.io</h1>
    <ul class="post-list">
      <li v-for="{ node } in $page.allWordPressPost.edges" :key="node.id">
        <Post :post="node" />
      </li>
    </ul>
    <Pager :info="$page.allWordPressPost.pageInfo"/>
    <form hidden name="contact" class="m-10" method="POST" action="/success/" data-netlify="true" data-netlify-honeypot="bot-field">

      <p hidden>
        <label>
        Don’t fill this out: <input name="bot_field" />
        </label>
      </p>
      <input type="hidden" name="form-name" value="contact" />

      <div class="flex flex-row">

        <div class="w-1/2">
          <label class="ml-6 w-1/3">Name </label>
          <input type="text" name="name" required class="w-2/3 p-2 px-6 rounded-full border-0 text-cyan-dark shadow-md font-sans text-2xl mx-2" />
        </div>

        <div class="w-1/2">
          <label class="ml-6 w-1/3">Email </label>
          <input type="email" name="email" required class="w-2/3 p-2 px-6 rounded-full border-0 text-cyan-dark shadow-md font-sans text-2xl mx-2" />
        </div>

      </div>

      <div class="flex flex-row mx-6">
        <div class="w-full mt-6">
          <p class="w-full">Message </p>
          <textarea class="rounded-lg w-full font-sans text-2xl p-3 border-0 text-cyan-dark shadow-md" required rows="8" name="message" />
        </div>
      </div>

      <div class="flex flex-row mt-4 justify-end">
        <button class="btn-default bg-cyan-darkest text-white mr-6" type="submit">Send me a message :)</button>
      </div>

    </form>
  </Layout>
</template>

<page-query>
query Home ($page: Int) {
  allWordPressPost (page: $page, perPage: 10) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
        excerpt
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
import Post from '~/components/Post.vue'

export default {
  components: {
    Pager,
    Post
  },
  metaInfo: {
    title: 'Welcome to codestuff.io'
  }
}
</script>
