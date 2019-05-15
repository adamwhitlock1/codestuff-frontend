<template>
  <div>
    <nav class="flex items-center justify-between flex-wrap bg-cyan w-full z-10 pin-t shadow-lg">
      <div class="flex items-center flex-no-shrink text-white lg:ml-4">
        <g-link
          class="text-white no-underline hover:text-white hover:no-underline"
          to="/"
        >
          <img
            src="@/assets/images/codestuff-logo-1.svg"
            alt=""
            class="h-16 mt-4 lg:mt-3 mb-2"
          >
        </g-link>
      </div>

      <div class="block lg:hidden">
        <button
          id="nav-toggle"
          class="flex items-center px-3 py-2 bg-transparent active:border-0 focus:border-0 focus:outline-none active:outline-none border-0 mr-4 hover:text-white hover:border-white"
          @click="showMobileNav"
        >
          <svg
            class="fill-current text-white h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        id="nav-content"
        :class="{'h-px opacity-0': isMobileNavHidden}"
        class="w-full flex-grow pt-4 lg:flex lg:items-center lg:w-auto lg:block lg:pt-1 lg:pb-2 h-auto lg:opacity-100 -mt-4 -mb-5"
      >
        <ul class="list-reset lg:flex justify-end flex-1 items-center px-10">
          <li class="p-2 mx-3 nav-link">
            <g-link
              class="text-white no-underline"
              to="/"
            >
              about
            </g-link>
          </li>
          <li class="p-2 mx-3 nav-link">
            <dropdown
              dropdown-text="software"
              :links="[
                {
                  text: 'cliplo',
                  to: '/cliplo'
                },
                {
                  text: 'designer panel',
                  to: '/designer-panel'
                },
                {
                  text: 'betapic',
                  to: '/betapic'
                },
              ]"
            />
          </li>
          <li class="p-2 mx-3 nav-link">
            <g-link
              class="text-white no-underline"
              to="/design"
            >
              design
            </g-link>
          </li>
          <li class="p-2 mx-3 nav-link">
            <g-link
              class="text-white no-underline"
              to="/photography"
            >
              photography
            </g-link>
          </li>
          <li class="p-2 mx-3 lg:pb-2 md:pb-12 sm:pb-12 nav-link">
            <g-link
              class="text-white no-underline"
              to="/contact"
            >
              hire me
            </g-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import Dropdown from "./Dropdown"
export default {
  name: "Header",
  components: {
    Dropdown
  },
  data(){
    return {
      isMobileNavHidden: true
    }
  },
  methods: {
    showMobileNav() {
      this.isMobileNavHidden = !this.isMobileNavHidden
    }
  }
}
</script>

<style>

</style>