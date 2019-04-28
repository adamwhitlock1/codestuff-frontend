<template>
  <div>
    <form name="contact" class="m-10" netlify>
      <div class="flex flex-row">

        <div class="w-1/2">
          <label class="ml-6 w-1/3">Name </label>
          <input type="text" name="name" class="w-2/3 p-2 px-6 rounded-full border-0 text-cyan-dark shadow-md font-sans text-2xl mx-2" />
        </div>

        <div class="w-1/2">
          <label class="ml-6 w-1/3">Email </label>
          <input type="email" name="email" class="w-2/3 p-2 px-6 rounded-full border-0 text-cyan-dark shadow-md font-sans text-2xl mx-2" />
        </div>

      </div>

      <div class="flex flex-row mx-6">
        <div class="w-full mt-6">
          <p class="w-full">Message </p>
          <textarea class="rounded-lg w-full font-sans text-2xl p-3 border-0 text-cyan-dark shadow-md" rows="8" name="message" />
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

  }
</script>

<style>

</style>