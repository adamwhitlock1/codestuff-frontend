<template>
  <div>
    <Layout>
      <div class="block md:flex items-center flex-row py-6 mt-6 md:px-12">
        <div class="block md:hidden md:w-2/3 px-2 md:pr-4">
          <g-image
            class="w-full"
            src="@/assets/images/betapic-screens-white.jpg"
            alt=""
          />
        </div>

        <div class="text-white text-center p-6 md:pr-16 bg-white rounded md:w-1/3">
          <h4 class="text-4xl text-magenta m-0 mb-3">
            Betapic: unified search for creative commons images.
          </h4>
          <p class="font-extrabold mx-12 my-0 text-magenta-darker rounded px-10 py-4 bg-white shadow">
            tech used: node, express, various apis, ejs, jquery.
          </p>
          <p class="text-magenta mb-4">
            Necessity is the mother of invention. As a designer, I wanted to simplify the search for creative commons image assets. Betapic brings Unsplash, Pixabay, and Pexels together into one interface.
          </p>
          <div class="mt-8 mb-8">
            <a
              href="//betapic.codestuff.io"
              target="_blank"
              class="rounded-full font-sans border-0 text-white text-lg no-underline bg-magenta shadow px-6 py-3"
            >
              try out betapic
            </a>
          </div>
        </div>

        <div class="hidden md:flex md:w-2/3 px-2 md:pr-4">
          <g-image
            class="w-full"
            src="@/assets/images/betapic-screens-white.jpg"
            alt=""
          />
        </div>
      </div>
    </Layout>
  </div>
</template>

<script>
  export default {
    metaInfo: {
    title: 'Betapic photo search'
  }

  }
</script>

<style lang="scss" scoped>

</style>