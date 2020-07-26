<template>
  <Layout>
    <h2 class="mb-0 pt-12 text-5xl italic text-center">
      Contact
    </h2>
    <div class="flex justify-center w-full mb-4 align-middle">
      <a
        href="https://github.com/adamwhitlock1"
        target="_blank"
        class="flex items-center self-center justify-center w-12 h-12 mx-3 text-center text-black bg-transparent border-none btn-xs hover:bg-black hover:text-white"
      >
        <font-awesome :icon="['fab', 'github']" class="fa-2x" />
      </a>

      <a
        href="https://twitter.com/codestuff2"
        target="_blank"
        class="flex items-center self-center justify-center w-12 h-12 mx-3 text-center text-black bg-transparent border-none btn-xs hover:bg-black hover:text-white"
      >
        <font-awesome :icon="['fab', 'twitter']" class="fa-2x" />
      </a>
      <a
        href="https://dribbble.com/codestuff2"
        target="_blank"
        class="flex items-center self-center justify-center w-12 h-12 mx-3 text-center text-black bg-transparent border-none btn-xs hover:bg-black hover:text-white"
      >
        <font-awesome :icon="['fab', 'dribbble']" class="fa-2x" />
      </a>
    </div>
    <p class="my-0 text-center">
      looking for great people to work with<br />
      resume available by request
    </p>
    <div class="container justify-center mx-auto">
      <contact-form class="mx-4" />
    </div>
  </Layout>
</template>

<script>
import ContactForm from '../components/ContactForm'
export default {
  metaInfo: {
    title: 'Contact'
  },
  components: {
    ContactForm
  }
}
</script>

<style scoped></style>
