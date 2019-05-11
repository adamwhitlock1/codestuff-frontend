<template>
  <on-click-outside :do="handleClickOutside">
    <div class="relative mx-auto">
      <a @click="open = !open" type="button" class="w-full block bg-transparent cursor-pointer text-white rounded py-2 focus:outline-0">
        {{dropdownText}}&nbsp; <font-awesome :icon="['fas', 'chevron-down']" :class="dropdownStatus"/>
      </a>
      <transition name="dropdownFade">
      <div v-show="open" class="px-4 py-2 rounded bg-white border absolute z-50 w-32 shadow-lg">
         <div v-for="(link, index) in links" :key="index" class="my-3 mx-2">
        <g-link class="text-cyan-darker leading-normal no-underline hover:text-magenta" :to="link.to">{{link.text}}</g-link>
         </div>
      </div>
      </transition>
    </div>
  </on-click-outside>
</template>

<script>
import OnClickOutside from "./OnClickOutside.vue";

export default {
  name: "Dropdown",
  props: {
    links: {
      type: Array,
      default: [{text: "no text set", to: "/"}]
    },
    dropdownText: {
      type: String,
      default: "No dropdown text"
    }
  },
  components: {
    OnClickOutside
  },
  data() {
    return {
      open: false
    };
  },
  methods: {
    handleClickOutside() {
      if (this.open) {
        this.open = false;
      }
    }
  },
  computed: {
    dropdownStatus() {
      if (this.open == false){
        return "closed"
      } else {
        return "open"
      }
    }
  }
};
</script>

<style>
.open {
  transform: scaleY(-1);
}
.fa-chevron-down {
  margin-bottom: -2px;
  transition: .3s;
}
.dropdownFade-enter-active, .dropdownFade-leave-active {
  transition: .35s;
}
.dropdownFade-enter, .dropdownFade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
