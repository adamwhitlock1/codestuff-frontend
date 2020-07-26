<template>
  <div>
    <Layout>
      <div class="flex-row items-center block py-6 mt-6 md:flex md:px-10">
        <div class="block px-2 md:hidden md:w-2/3 md:pr-4">
          <g-image
            class="w-full"
            src="@/assets/images/betapic-screens-white.jpg"
            alt=""
          />
        </div>

        <div
          class="p-6 text-center text-white bg-white rounded md:pr-16 md:w-1/3"
        >
          <h4 class="m-0 mb-3 text-4xl text-magenta-500">
            Betapic: unified search for Creative Commons images.
          </h4>
          <p
            class="px-10 py-4 mx-12 my-0 font-extrabold bg-white rounded shadow text-magenta-700"
          >
            tech used: node, polka server, unsplash/pexels/pixabay apis,
            svelte/sapper, tailwindcss.
          </p>
          <p class="my-4 text-magenta-500">
            Necessity is the mother of invention. As a designer, I wanted to
            simplify the search for creative commons image assets. Betapic
            brings Unsplash, Pixabay, and Pexels together into one interface.
          </p>
          <div class="mt-8 mb-8">
            <a
              href="//betapic.codestuff.io"
              target="_blank"
              class="px-6 py-3 font-sans text-lg text-white no-underline border-0 rounded-full shadow bg-magenta-500"
            >
              try out betapic
            </a>
          </div>
        </div>

        <div class="hidden px-2 md:block md:w-2/3 md:pr-4">
          <g-image src="@/assets/images/betapic-screens-white.jpg" alt="" />
        </div>
      </div>
    </Layout>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Betapic photo search",
  },
};
</script>

<style lang="scss" scoped></style>
