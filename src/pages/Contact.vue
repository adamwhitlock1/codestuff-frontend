<template>
  <Layout>
    <h2 class="text-5xl text-center italic mb-0">
      Contact codestuff
    </h2>
    <div class="flex w-full align-middle justify-center mb-4">
      <a
        href="https://github.com/adamwhitlock1"
        target="_blank"
        class="btn-xs bg-transparent justify-center text-center self-center text-black hover:bg-black hover:text-white mx-3"
      >
        <font-awesome
          :icon="['fab', 'github']"
          class="text-xl py-2 h-4"
        />
      </a>
      <a
        href="https://twitter.com/codestuff2"
        target="_blank"
        class="btn-xs bg-transparent justify-center text-center self-center text-black hover:bg-black hover:text-white mx-3"
      >
        <font-awesome
          :icon="['fab', 'twitter']"
          class="text-xl py-2 h-4"
        />
      </a>
      <a
        href="https://dribbble.com/codestuff2"
        target="_blank"
        class="btn-xs bg-transparent justify-center text-center self-center text-black hover:bg-black hover:text-white mx-3"
      >
        <font-awesome
          :icon="['fab', 'dribbble']"
          class="text-xl py-2 h-4"
        />
      </a>
    </div>
    <p class="text-center my-0">
      looking for a great people to work with<br>
      resumes available by request
    </p>
    <contact-form />
  </Layout>
</template>

<script>
import ContactForm from "../components/ContactForm"
export default {
components: {
  ContactForm
}
}
</script>

<style scoped>

</style>