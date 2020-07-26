<template>
  <Layout>
    <div class="flex flex-row items-center lg:py-12 md:mt-6 md:px-12">
      <div class="z-40 hidden w-1/2 -mr-2 bg-transparent md:block">
        <g-image
          class="w-full rounded shadow-xl"
          src="@/assets/images/cliplo-main-history.jpg"
          alt=""
          quality="100"
        />
      </div>
      <div
        class="p-2 text-center text-white bg-white border rounded md:shadow md:p-10 md:w-1/2"
      >
        <h4 class="m-0 mb-3 text-4xl text-black">
          Cliplo
        </h4>
        <div
          class="flex items-center justify-center p-8 font-extrabold rounded text-cyan-800 md:mr-6 md:ml-8 bg-cyan-100 md:shadow"
        >
          <p>
            tech used:<br />
            vue, nuxt, express, axios, vuex, electron, nedb, carbon cli,
            tailwindcss.
          </p>
        </div>

        <div class="flex-row mx-2 md:ml-6">
          <g-image
            class="relative z-40 visible w-full -mt-8 -mb-12 md:hidden"
            src="@/assets/images/cliplo-main-history-trans.png"
            alt=""
          />
        </div>

        <p
          class="inline-block px-10 pt-12 pb-12 mx-2 -mb-20 text-sm text-white rounded-lg md:bg-transparent bg-cyan-500 md:mx-4 md:pt-4 md:text-base md:text-cyan-500"
        >
          A modern clipboard manager that is built for developer productivity.
          Access your clipboard history even after your computer restarts. Share
          code snippets instantly on carbon.now.sh, and archive your snippets
          for long term usage. Stay on task and remember to take breaks
          throughout the day with a built in pomodoro timer.
        </p>

        <button
          v-scrolly="{ id: '#howitworks' }"
          class="self-center justify-center hidden px-12 py-3 mt-6 font-sans text-lg text-center text-white no-underline transition border-0 rounded-full shadow btn-default md:inline-block transition-duration-300 bg-cyan-500"
        >
          how it works
        </button>
      </div>
    </div>

    <!-- START HOW IT WORKS ROW -->
    <div
      id="howitworks"
      class="relative flex-row items-center px-6 pb-0 mt-8 -mb-6 md:flex md:ml-4 md:mt-40 md:pt-20 md:px-12 md:py-6"
    >
      <div
        class="w-full py-1 text-white bg-black rounded shadow-md md:bg-magenta-500 md:-mr-10 md:pl-6 md:pr-12 md:w-2/5"
      >
        <h4 class="mt-6 mb-0 mb-3 text-2xl text-center md:text-4xl h4">
          How it works.
        </h4>
        <p
          class="px-6 py-4 mx-10 my-0 text-sm font-extrabold text-center text-white bg-gray-900 rounded shadow md:bg-magenta-200 md:px-10 lg:text-base md:text-magenta-600"
        >
          Cliplo watches your clipboard and saves entries as they are copied
          throughout the day.
        </p>
        <div
          class="z-40 block mt-6 -mb-4 -ml-4 -mr-4 text-center text-white bg-transparent md:hidden"
        >
          <g-image src="@/assets/images/how-it-works-trans.png" alt="" />
        </div>
        <div class="flex flex-row py-4 pb-10 md:pb-6">
          <div class="w-full px-6 md:px-12">
            <ul class="text-xs list-disc md:ml-6 lg:text-base">
              <li>
                A persistent local database keeps your clipboard history so that
                you can revisit it even after you have restarted your computer.
              </li>
              <li class="mt-2">
                Save any past clipboard entry to be archived for future use, and
                edit entries to add or remove content as needed.
              </li>
              <li class="mt-2">
                Clear you clipboard history when you want to tidy things up, and
                cut out some clutter.
              </li>
              <li class="mt-2">
                Cliplo also keeps track of what application you copy items from,
                what the original tab/document name was, and it will also
                analyze clipboard content to tag your clipboard entries
                automatically.
              </li>
            </ul>
          </div>
        </div>

        <div
          class="items-center justify-center hidden pb-12 align-middle md:flex"
        >
          <button
            v-scrolly="{ id: '#otherFeatures' }"
            class="self-center px-12 py-3 mb-4 font-sans text-lg no-underline bg-white border-0 rounded-full btn-default text-magenta-500 lg:mb-0"
          >
            other features
          </button>
        </div>
      </div>

      <div
        class="z-40 hidden -mt-8 -mb-8 text-center text-white bg-transparent md:block md:w-3/5 md:mx-0 md:ml-0"
      >
        <g-image
          src="@/assets/images/how-it-works-1.jpg"
          alt=""
          class="w-full rounded shadow-lg"
          quality="100"
        />
      </div>
    </div>

    <!-- START CARBON ROW -->
    <div
      id="otherFeatures"
      class="flex-row items-center block py-6 pt-0 mx-4 mb-12 md:flex md:ml-6 md:mr-12 md:pt-20 md:mt-32 md:px-12"
    >
      <div
        class="hidden w-full pt-12 mb-0 -mr-10 text-center text-white bg-transparent md:inline-block lg:w-2/3 ld:m-3"
      >
        <g-image
          src="@/assets/images/carbon-cliplo.jpg"
          alt=""
          class="hidden w-full md:inline-block"
        />
      </div>
      <!-- START TEXT SECTION -->
      <div
        class="block py-1 pb-16 -mb-12 text-white bg-yellow-500 rounded shadow-md md:w-1/3 md:pr-10 md:pl-10 md:pb-8 md:mb-16"
      >
        <h4
          class="mt-12 mb-0 mb-3 text-2xl text-center text-black md:text-4xl h4"
        >
          Carbon at the click of a button.
        </h4>
        <p
          class="px-10 py-4 mx-10 my-0 text-sm font-extrabold text-center text-black bg-yellow-300 rounded shadow md:text-base md:px-16"
        >
          Take any clipboard entry and export it out into a Carbon image.
        </p>
        <div class="flex flex-row text-xs">
          <p
            class="w-full px-20 text-sm text-center text-black md:text-base md:pt-6 md:pb-8"
          >
            Use Carbon to share your code snippets on twitter, medium, and other
            social media outlets.
          </p>
        </div>
        <div
          class="flex flex-row px-4 -ml-2 -mr-2 text-center bg-white rounded-lg shadow-lg md:bg-transparent md:-ml-2 md:-mr-8 md:shadow-none"
        >
          <div class="w-full pb-4 mt-4 md:pb-12 md:mt-0">
            <button
              v-scrolly="{ id: '#pomodoro' }"
              class="hidden px-12 py-3 font-sans text-lg text-black no-underline bg-white border-black rounded-full btn-default md:inline-block md:text-yellow-500 md:bg-black"
            >
              explore the pomodoro timer
            </button>
            <g-image
              src="@/assets/images/carbon-cliplo.jpg"
              alt=""
              class="w-full md:hidden md:mt-6"
              quality="100"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- START EDITS ROW -->
    <div
      id="pomodoro"
      class="flex-row items-center -mt-12 md:flex md:py-6 md:mt-32 md:px-10 md:pt-20"
    >
      <div
        class="block py-1 pb-16 mt-12 ml-6 mr-6 text-white bg-black rounded shadow-md md:ml-10 md:mr-4 lg:w-1/3 lg:pl-10 lg:pr-10 md:-mr-10 md:mt-1"
      >
        <h4 class="mt-12 mb-0 mb-3 text-2xl text-center md:text-4xl h4">
          Pomodoro Timer
        </h4>
        <p
          class="px-6 py-4 mx-10 my-0 text-sm font-extrabold text-center text-gray-700 bg-gray-100 rounded shadow md:text-base md:px-10"
        >
          This is somewhat a personal feature, as I use a Pomodoro timer in my
          everyday workflow to help take consistent breaks and maintain focus.
        </p>

        <div class="flex flex-row text-center">
          <div class="hidden w-full pb-12 mt-6 md:inline-block md:pb-0">
            <button
              v-scrolly="{ id: '#customize' }"
              class="px-12 py-3 font-sans text-lg text-black no-underline bg-white rounded-full btn-default"
            >
              customize cliplo
            </button>
          </div>
        </div>
      </div>
      <div
        class="relative z-40 px-0 -mt-8 text-center text-white md:ml-2 md:mr-1 lg:w-2/3 md:mt-0"
      >
        <g-image
          src="@/assets/images/pomodoro-cliplo.jpg"
          alt=""
          class="w-full px-0 rounded shadow-lg md:-ml-0"
          quality="100"
        />
      </div>
    </div>

    <!-- START CUSTOMIZE ROW -->
    <div
      id="customize"
      class="flex flex-row items-center pb-6 mb-12 ml-4 mr-4 -mt-10 md:ml-10 md:pt-24 md:py-6 md:px-12 md:mt-32"
    >
      <!-- START FULL COLUMN -->
      <div
        class="w-full px-8 py-1 text-white rounded shadow-lg bg-cyan-500 md:px-12"
      >
        <h4 class="mt-12 mb-3 text-2xl text-center md:text-4xl">
          Customize Cliplo
        </h4>
        <p
          class="px-6 py-4 my-0 text-sm font-extrabold text-center rounded shadow bg-cyan-100 md:mx-24 md:px-12 md:text-base text-cyan-600"
        >
          Cliplo comes loaded with over 45 different themes for the clipboard
          snippet styling thanks to the CodeMirror library. You can also
          customize the color scheme of the user interface with any colors you
          would like!
        </p>

        <div class="mt-4 -ml-10 -mr-10 md:mx-2">
          <g-image
            src="@/assets/images/cliplo-themes.jpg"
            alt=""
            class="mt-4 rounded shadow-lg md:mt-10"
          />
        </div>

        <h4 class="mb-3 text-2xl text-center md:mt-12 md:text-4xl">
          Interested in learning more?<br />
          Contact me to sign up for the beta testing program, <br />or to help
          contribute to this open source project.
        </h4>

        <contact-form />

        <p class="pb-6 text-center">
          Thanks for taking a look!
        </p>
      </div>
    </div>
  </Layout>
</template>

<script>
import ContactForm from '../components/ContactForm'
export default {
  metaInfo: {
    title: 'Cliplo clipboard manager'
  },
  components: {
    ContactForm
  }
}
</script>

<style></style>
