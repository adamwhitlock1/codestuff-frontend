<template>
  <Layout>
    <div class="container">
      <div class="flex mx-6">
        <div class="w-2/3 mt-16 p-4">
          <p class="text-center text-white">
            Software we have built:
          </p>

          <div class="flex">
            <h3 class="text-4xl mt-2 mb-0 text-black italic">
              Codestuff.io is created by Adam Whitlock
            </h3>
          </div>
          <div class="flex">
            <p class=" text-xl px-4 text-black border-l-4  border-0 border-solid border-yellow">
              Adam is a creative engineer living in the mountains of Colorado. He believes in creating cleanly designed applications, and in giving back to his fellow developers of designers. Currently working as a developer at Madwire Media, teaching Advanced Photoshop, and Web Design at Front Range Community College. Looking for new and exciting prject to lend a hand with. His favorite breakfast food is waffles, and he thinks flyfishing is a pretty good time.
            </p>
          </div>
          <div class="flex w-full align-middle justify-end">
            <a
              href="https://github.com/adamwhitlock1"
              target="_blank"
              class="btn-xs bg-transparent justify-center text-center self-center text-black hover:bg-yellow hover:text-black mx-3"
            >
              <font-awesome
                :icon="['fab', 'github']"
                class="text-xl py-2 h-4 mt-1"
              />
            </a>
            <a
              href="https://twitter.com/codestuff2"
              target="_blank"
              class="btn-xs bg-transparent justify-center text-center self-center text-black hover:bg-yellow hover:text-black mx-3"
            >
              <font-awesome
                :icon="['fab', 'twitter']"
                class="text-xl py-2 h-4 mt-1"
              />
            </a>
            <a
              href="https://dribbble.com/codestuff2"
              target="_blank"
              class="btn-xs bg-transparent justify-center text-center self-center text-black hover:bg-yellow hover:text-black mx-3"
            >
              <font-awesome
                :icon="['fab', 'dribbble']"
                class="text-xl py-2 h-4 mt-1"
              />
            </a>
            <g-link
              to="/contact"
              class="btn-default bg-magenta justify-center text-center self-center text-white hover:bg-yellow hover:text-black mx-3"
            >
              shoot me a message
            </g-link>
          </div>
        </div>


        <div class="w-1/3 p-4">
          <g-image
            class="w-full rounded-lg shadow-lg mt-20"
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
    title: 'About Codestuff'
  }
}
</script>
