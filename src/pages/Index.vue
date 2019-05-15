<template>
  <Layout>
    <div class="container">
      <div class="flex">
        <div class="w-2/3 p-2">
          <h3 class="mt-6 text-5xl mb-2">
            Welcome
          </h3>
          <p class=" text-2xl mt-2">
            Adam Whitlock is a creative developer living in the mountains of Colorado. He believes in creating clean, moderns, and usable design for the web, and in giving back to his fellow developers. Currently working as a lead developer at Madwire Media, teaching Advanced Photoshop, and Web Design at Front Range Community College.
          </p>

          <p class="text-center">
            Software I have built:
          </p>

          <div class="flex">
            <g-link
              class="btn-default text-white text-center no-underline bg-magenta w-1/3 mx-2"
              to="/cliplo"
            >
              cliplo
            </g-link>
            <g-link
              class="btn-default text-black text-center no-underline bg-yellow w-1/3 mx-2"
              to="/designer-panel"
            >
              designer panel
            </g-link>
            <g-link
              class="btn-default text-white text-center no-underline bg-cyan w-1/3 mx-2"
              to="/betapic"
            >
              betapic
            </g-link>
          </div>

          <p class="text-center">
            Other:
          </p>

          <div class="flex">
            <g-link
              class="btn-default text-white text-center no-underline bg-cyan w-1/3 mx-2"
              to="/design"
            >
              design
            </g-link>

            <g-link
              class="btn-default text-black text-center no-underline bg-yellow w-1/3 mx-2"
              to="/photography"
            >
              photography
            </g-link>

            <g-link
              class="btn-default text-white text-center no-underline bg-magenta w-1/3 mx-2"
              to="/hire-me"
            >
              hire me
            </g-link>
          </div>
        </div>

        <div class="w-1/3 p-4">
          <img
            class="w-full rounded-lg shadow-lg mt-20"
            src="@/assets/images/profile.jpg"
            alt=""
          >
        </div>
      </div>


      <form
        hidden
        name="contact"
        class="m-10"
        method="POST"
        action="/success/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot_field">
          </label>
        </p>
        <input
          type="hidden"
          name="form-name"
          value="contact"
        >

        <div class="flex flex-row">
          <div class="w-1/2">
            <label class="ml-6 w-1/3">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              class="w-2/3 p-2 px-6 rounded-full border-0 text-cyan-dark shadow-md font-sans text-2xl mx-2"
            >
          </div>

          <div class="w-1/2">
            <label class="ml-6 w-1/3">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              class="w-2/3 p-2 px-6 rounded-full border-0 text-cyan-dark shadow-md font-sans text-2xl mx-2"
            >
          </div>
        </div>

        <div class="flex flex-row mx-6">
          <div class="w-full mt-6">
            <p class="w-full">
              Message
            </p>
            <textarea
              class="rounded-lg w-full font-sans text-2xl p-3 border-0 text-cyan-dark shadow-md"
              required
              rows="8"
              name="message"
            />
          </div>
        </div>

        <div class="flex flex-row mt-4 justify-end">
          <button
            class="btn-default bg-cyan-darkest text-white mr-6"
            type="submit"
          >
            Send me a message :)
          </button>
        </div>
      </form>
    </div>
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
