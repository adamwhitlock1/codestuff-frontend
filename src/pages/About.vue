<template>
  <Layout>
    <div class="container mx-auto">
      <div class="block mx-6 md:flex">
        <div class="p-4 mt-4 md:w-2/3 md:mt-16">
          <div class="md:flex">
            <h3 class="w-full my-2 text-4xl italic text-black">
              HI...I'm Adam!
            </h3>
            <g-image
              class="block w-full mt-6 mb-4 rounded-lg shadow-lg md:hidden"
              src="@/assets/images/profile.jpg"
              alt=""
            />
          </div>
          <div class="flex">
            <div
              class="px-4 text-xl text-black border-0 border-l-4 border-yellow-500 border-solid md:pr-6"
            >
            <p class="mb-3">
              A creative software engineer living in the mountains of
              Northern Colorado. I enjoy frontend and full-stack software for the web and
              beyond.
              </p>
             <p class="mb-3"> I'm currently working on  <a
                href="https://www.va.gov"
                target="_blank"
                class="text-cyan-600 font-semibold"
                >VA.gov</a
              > as a senior engineer with
              <a
                href="https://www.adhocteam.us"
                target="_blank"
                class="text-cyan-600 font-bold"
                >Ad Hoc.</a
              > I focus on improving accessibility for users through the VA Profile and Authenticated Experience team. Are you a fellow engineer looking for an amazing opportunity? <a href="https://grnh.se/07dc914e2us" target="_blank" class="text-cyan-600 font-semibold">Ad Hoc is hiring!</a></p>
              <p class="mb-3">
              In the past I have taught Adobe Photoshop and Web Design at Front
              Range Community College, and also built software for         <a
                href="https://www.dealerinspire.com/"
                target="_blank"
                class="text-cyan-600 font-bold"
                >Dealer Inspire</a> and         <a
                href="https://www.madwire.com/"
                target="_blank"
                class="text-cyan-600 font-bold"
                >Madwire Media</a>. Always looking for new and exciting
              projects to lend a hand with.</p>

              <p class="mb-3">
              My favorite breakfast food is
              waffles. I build and fly RC airplanes when the wind isn't too wild outside, and I think fly fishing is a pretty good time.
              </p>
            </div>
          </div>
          <div class="flex justify-end w-full ml-4 align-middle md:ml-0">
            <a
              href="https://github.com/adamwhitlock1"
              target="_blank"
              class="flex items-center self-center justify-center w-12 h-12 mx-3 text-center text-black bg-transparent border-none btn-xs hover:bg-yellow-500 hover:text-black"
            >
              <font-awesome :icon="['fab', 'github']" class="fa-lg" />
            </a>
            <a
              href="https://twitter.com/codestuff2"
              target="_blank"
              class="flex items-center self-center justify-center w-12 h-12 mx-3 text-center text-black bg-transparent border-none btn-xs hover:bg-yellow-500 hover:text-black"
            >
              <font-awesome :icon="['fab', 'twitter']" class="fa-lg" />
            </a>
            <a
              href="https://dribbble.com/codestuff2"
              target="_blank"
              class="flex items-center self-center justify-center w-12 h-12 mx-3 text-center text-black bg-transparent border-none btn-xs hover:bg-yellow-500 hover:text-black"
            >
              <font-awesome :icon="['fab', 'dribbble']" class="fa-lg" />
            </a>
            <g-link
              to="/contact"
              class="self-center justify-center mx-3 text-center text-white btn-default bg-magenta-500 hover:bg-yellow-500 hover:text-black"
            >
              contact
            </g-link>
          </div>
        </div>

        <div class="hidden w-1/3 p-4 mt-4 md:block">
          <g-image
            class="w-full mt-20 rounded-lg shadow-lg"
            src="@/assets/images/profile.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About Codestuff",
  },
};
</script>
