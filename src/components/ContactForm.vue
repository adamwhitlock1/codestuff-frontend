<template>
  <div>
    <form name="contact" class="m-10" method="POST" v-on:submit.prevent="handleSubmit" action="/success/" data-netlify="true" data-netlify-honeypot="bot-field">

      <p hidden>
        <label>
        Don’t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div class="flex flex-row">

        <div class="w-1/2">
          <label class="ml-6 w-1/3">Name </label>
          <input type="text" name="name" required v-model="formData.name" class="w-2/3 p-2 px-6 rounded-full border-0 text-cyan-dark shadow-md font-sans text-2xl mx-2" />
        </div>

        <div class="w-1/2">
          <label class="ml-6 w-1/3">Email </label>
          <input type="email" name="email" required v-model="formData.email" class="w-2/3 p-2 px-6 rounded-full border-0 text-cyan-dark shadow-md font-sans text-2xl mx-2" />
        </div>

      </div>

      <div class="flex flex-row mx-6">
        <div class="w-full mt-6">
          <p class="w-full">Message </p>
          <textarea class="rounded-lg w-full font-sans text-2xl p-3 border-0 text-cyan-dark shadow-md" v-model="formData.message" required rows="8" name="message" />
        </div>
      </div>

      <div class="flex flex-row mt-4 justify-end">
        <button class="btn-default bg-cyan-darkest text-white mr-6" type="submit">Send me a message :)</button>
      </div>

    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formData: {},
      }
    },
    methods: {
      encode(data) {
        return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
      },
      handleSubmit(e) {
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: this.encode({
            ...this.formData,
          }),
        })
        .then(() => this.$router.push('/success'))
        .catch(error => alert(error))
      }
    }
  }
</script>

<style>

</style>