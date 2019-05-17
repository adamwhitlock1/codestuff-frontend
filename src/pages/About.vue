<template>
  <Layout>
    <div class="flex">
      <div class="w-2/3 p-2">
        <p class="text-center text-white">
          Software we have built:
        </p>

        <div class="flex">
          <p class=" text-2xl mt-2 text-black">
            Adam Whitlock is a creative developer living in the mountains of Colorado. He believes in creating clean, moderns, and usable design for the web, and in giving back to his fellow developers. Currently working as a lead developer at Madwire Media, teaching Advanced Photoshop, and Web Design at Front Range Community College.
          </p>
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
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About me'
  }
}
</script>
