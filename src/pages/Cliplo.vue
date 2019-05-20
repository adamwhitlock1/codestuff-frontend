<template>
  <Layout>
    <div class="flex items-center flex-row lg:py-6 md:mt-6 md:px-12">
      <div class="bg-transparent hidden md:block  -mr-10 w-1/2 z-50">
        <g-image
          class="w-full"
          src="@/assets/images/cliplo-main-history-trans.png"
          alt=""
        /></g-image>
      </div>
      <div class="text-white md:shadow-md text-center p-2 md:p-10 md:pl-16 bg-white rounded md:w-1/2">
        <h4 class="text-4xl text-black m-0 mb-3">
          Cliplo:
        </h4>
        <p class="font-extrabold block my-0 text-cyan-darkest rounded px-2 mr-16 md:mr-8 ml-4 px-16 md:px-10 py-10 pt-4 bg-cyan-lightestest md:shadow">
          tech used:<br>
          vue, nuxt, express, lodash, axios, vuex, electron, nedb, carbon cli, tailwind.
        </p>
        <div class="flex-row  w-full">
          <g-image
            class="relative w-5/6 visible md:hidden float-right -mt-8 lg:-mr-24 -mb-12 z-50"
            src="@/assets/images/cliplo-main-history-trans.png"
            alt=""
          /></g-image>
        </div>
        <p class="text-sm md:text-base md:text-cyan md:bg-transparent rounded-lg md:pt-2 py-10 mr-12 pt-12 inline-block ml-4 -mb-20 pt-6 px-4 px-10 pb-14 bg-cyan text-white">
          A modern clipboard manager that is built for developer productivity. Access your clipboard history even after your computer restarts. Share code snippets instantly on carbon.now.sh, and archive your snippets for long term usage. Stay on task and remember to take breaks throughout the day with a built in pomodoro timer.
        </p>

        <button
          v-scrolly="{id: '#howitworks'}"
          class="hidden md:inline-block justify-center text-center md:w-1/2 self-center rounded-full font-sans border-0 text-white text-lg no-underline bg-cyan shadow px-6 py-3"
        >
          how it works
        </button>
      </div>
    </div>

    <!-- START HOW IT WORKS ROW -->
    <div
      id="howitworks"
      class="relative md:flex flex-row items-center md:py-6 ml-12 md:ml-4 pr-6 px-12 mt-4 md:mt-10 pb-0 -mb-6"
    >
      <div class="text-white bg-black md:bg-magenta md:w-2/5 py-1 md:pr-12 md:pl-6 md:-mr-10 rounded shadow-md">
        <h4 class="text-2xl md:text-4xl text-center mt-6 mb-0 mb-3 h4">
          How it works.
        </h4>
        <p class="text-sm lg:text-base font-extrabold mx-10 my-0 md:text-magenta-darker text-center rounded px-10 py-4 bg-grey-darkest text-white md:bg-magenta-lightest shadow">
          Cliplo watches your clipboard and saves entries as they are copied throughout the day.
        </p>
        <div class="flex-row flex py-4 pb-10 md:pb-6">
          <div class="px-8 w-full">
            <ul class="text-xs lg:text-base">
              <li>A persistent local database keeps your clipboard history so that you can revisit it even after you have restarted your computer.</li>
              <li class="mt-2">
                Save any past clipboard entry to be archived for future use, and edit entries to add or remove content as needed.
              </li>
              <li class="mt-2">
                Clear you clipboard history when you want to tidy things up, and cut out some clutter.
              </li>
              <li class="mt-2">
                Cliplo also keeps track of what application you copy items from, what the original tab/document name was, and it will also analyze clipboard content to tag your clipboard entries automatically.
              </li>
            </ul>
          </div>
        </div>

        <div class="hidden md:flex hidden pb-12 align-middle justify-center items-center">
          <button
            v-scrolly="{id: '#otherFeatures'}"
            class="rounded-full font-sans border-0 text-magenta text-lg no-underline bg-white shadow px-6 py-3 mb-4 lg:mb-0 self-center"
          >
            other features
          </button>
        </div>
      </div>

      <div class="text-white text-center bg-transparent md:w-3/5 -ml-20 mr-4 md:mx-0 md:ml-0 -mt-8 -mb-8 z-50">
        <g-image
          src="@/assets/images/how-it-works-trans.png"
          alt=""
        /></g-image>
      </div>
    </div>

    <!-- START CARBON ROW -->
    <div
      id="otherFeatures"
      class="block md:flex flex-row items-center py-6 pt-0 md:mt-12 md:px-12 mb-12"
    >
      <div class="hidden md:inline-block text-white text-center bg-transparent w-full lg:w-2/3 -mr-10 pt-12 mb-0 ld:m-3">
        <g-image
          src="@/assets/images/carbon-cliplo.jpg"
          alt=""
          class="w-full hidden md:inline-block"
        /></g-image>
      </div>
      <!-- START TEXT SECTION -->
      <div class="block text-white bg-yellow w-5/6 md:w-1/3 py-1 md:pr-10 md:pl-10 pb-16 -mb-12 rounded shadow-md">
        <h4 class="text-2xl md:text-4xl text-black text-center mt-12 mb-0 mb-3 h4">
          Carbon at the click of a button.
        </h4>
        <p class="font-extrabold text-sm md:text-base mx-10 my-0 text-black text-center rounded px-10 py-4 bg-yellow-lightest shadow">
          Take any clipboard entry and export it out into a Carbon image.
        </p>
        <div class="flex-row text-xs flex">
          <p class="text-sm md:text-base px-20 md:px-8 pb-8 w-full text-center text-black">
            Use Carbon to share your code snippets on twitter, medium, and other social media outlets.
          </p>
        </div>
        <div class="flex bg-white md:bg-transparent px-4 ml-4 -mr-16 shadow-lg md:shadow-none shadow rounded-lg flex-row text-center">
          <div class="w-full pb-12 mt-6">
            <button
              v-scrolly="{id: '#pomodoro'}"
              class="hidden md:inline-block rounded-full text-black font-sans no-underline border-black text-lg bg-white md:bg-transparent shadow px-6 py-3"
            >
              explore the pomodoro timer
            </button>
            <g-image
              src="@/assets/images/carbon-cliplo.jpg"
              alt=""
              class="w-full md:hidden"
            /></g-image>
          </div>
        </div>
      </div>
    </div>


    <!-- START EDITS ROW -->
    <div
      id="pomodoro"
      class="w-5/6 ml-16 -mt-10 flex-row items-center md:flex md:py-6 md:mt-12 md:px-12"
    >
      <div class="text-white bg-black block w-full lg:w-1/3 py-1 pb-16 lg:pl-10 lg:pr-10 md:-mr-10 mt-12 rounded shadow-md">
        <h4 class="text-2xl md:text-4xl text-center mt-12 mb-0 mb-3 h4">
          Pomodoro Timer
        </h4>
        <p class="font-extrabold mx-10 text-sm md:text-base my-0 text-grey-darker text-center rounded px-10 py-4 bg-grey-lightest shadow">
          This is somewhat a personal feature, as I use a Pomodoro timer in my everyday workflow to help take consistent breaks and maintain focus.
        </p>

        <div class="flex flex-row text-center">
          <div class="hidden md:inline-block w-full pb-12 md:pb-0 mt-6">
            <button
              v-scrolly="{id: '#customize'}"
              class="rounded-full text-black font-sans no-underline text-lg bg-white shadow px-6 py-3"
            >
              customize cliplo
            </button>
          </div>
        </div>
      </div>
      <div class="relative text-white text-center w-full px-0 lg:w-2/3 -mt-8 z-50">
        <g-image
          src="@/assets/images/pomodoro-cliplo.png"
          alt=""
          class="w-full -ml-24 md:-ml-0 px-0"
        /></g-image>
      </div>
    </div>




    <!-- START CONTACT ROW -->
    <div
      id="customize"
      class="flex flex-row items-center -mt-10 lg:py-6 lg:px-12 md:mt-12 mb-32 pb-32"
    >
      <!-- START FULL COLUMN -->
      <div class="text-white bg-cyan w-full py-1 pl-12 pr-6 rounded shadow-deep">
        <h4 class="text-2xl md:text-4xl text-center mt-12 mb-0 mb-3 h4">
          Customize Cliplo
        </h4>
        <p class="font-extrabold text-sm md:text-base mx-10 my-0 text-cyan-darker text-center rounded px-10 py-4 bg-cyan-lightest shadow">
          Cliplo comes loaded with over 45 different themes for the clipboard snippet styling thanks to the CodeMirror library. You can also customize the color scheme of the user interface with any colors you would like!
        </p>
        <g-image
          src="@/assets/images/cliplo-themes.jpg"
          alt=""
          class="rounded mt-10 shadow-deep"
        />

        <h4 class="text-2xl md:text-4xl text-center mt-12 mb-0 mb-3 h4">
          Interested in learning more?<br>
          Contact me to sign up for the beta testing program, <br>or to help contribute to this open source project.
        </h4>

        <contact-form />
        </g-image>
</div>
    </div>
  </Layout>
</template>

<script>
import ContactForm from "../components/ContactForm"
export default {
  metaInfo: {
    title: 'Cliplo clipboard manager'
  },
components: {
  ContactForm
}
}
</script>

<style>



</style>