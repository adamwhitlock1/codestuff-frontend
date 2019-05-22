<template>
  <div>
    <form
      name="contact"
      method="POST"
      action="/success/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      @submit.prevent="handleSubmit"
    >
      <p hidden>
        <label>
          Don’t fill this out: <input
            v-model="formData['bot-field']"
            name="bot-field"
          >
        </label>
      </p>
      <input
        type="hidden"
        name="form-name"
        value="contact"
      >

      <div class="block md:flex flex-row">
        <div class="mt-6 md:w-1/2">
          <label class="ml-6 md:w-1/3">
            Name
          </label>
          <input
            v-model="formData.name"
            type="text"
            name="name"
            required
            placeholder="adam"
            class="w-5/6 md:w-2/3 p-2 px-4 ml-2 md:px-6 rounded-full border-0 text-cyan-dark shadow-md font-sans text-xl md:mx-2"
          >
        </div>

        <div class="mt-6 md:w-1/2">
          <label class="ml-6 md:w-1/3">
            Email
          </label>
          <input
            v-model="formData.email"
            type="email"
            name="email"
            placeholder="awesome@email.com"
            required
            class="w-5/6 md:w-2/3 p-2 px-4 ml-2 md:px-6 rounded-full border-0 text-cyan-dark shadow-md font-sans text-xl md:mx-2"
          >
        </div>
      </div>

      <p class="mb-1 pt-6 ml-6">
        Message
      </p>
      <div class="flex w-full">
        <textarea
          v-model="formData.message"
          class="rounded-lg flex-grow font-sans text-xl p-5 border-0 text-cyan-dark shadow-md self-center justify-center"
          placeholder="hey there good lookin"
          required
          rows="8"
          name="message"
        />
      </div>

      <div class="block md:flex mb-12 md:w-full flex-row m-4 justify-end">
        <button
          class="btn-default w-full mr-6 md:w-1/3 bg-black border-0 text-white text-lg"
          type="submit"
        >
          Send me a message :)
        </button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formData: {
          'form-name': "contact",
          "bot-field": ""
        },
      }
    },
    methods: {
      encode(data) {
        return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
      },
      handleSubmit() {
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: this.encode({
            ...this.formData,
          }),
        })
        .then(() => this.$router.push('/success'))
        .catch(e => alert(e))
      }
    }
  }
</script>

<style>

</style>