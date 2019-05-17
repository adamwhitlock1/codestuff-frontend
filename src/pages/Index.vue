<template>
  <Layout>
    <div

      class="container z-50"
    >
      <transition
        name="fade"
        appear
      >
        <div class="flex">
          <div class="w-2/3 p-2">
            <p class="text-center text-white">
              Software we have built:
            </p>

            <div class="flex">
              <g-link
                class="btn-default text-white text-center no-underline bg-magenta w-1/3 mx-2"
                to="/cliplo"
              >
                cliplo
              </g-link>
              <g-link
                class="btn-default text-black text-center no-underline bg-yellow w-1/3 mx-2"
                to="/designer-panel"
              >
                designer panel
              </g-link>
              <g-link
                class="btn-default text-white text-center no-underline bg-cyan w-1/3 mx-2"
                to="/betapic"
              >
                betapic
              </g-link>
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
      </transition>
    </div>
    </transition>
    </div>


    <div id="three-container" />


    <form
      hidden
      name="contact"
      class="m-10"
      method="POST"
      action="/success/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot_field">
        </label>
      </p>
      <input
        type="hidden"
        name="form-name"
        value="contact"
      >

      <div class="flex flex-row">
        <div class="w-1/2">
          <label class="ml-6 w-1/3">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            class="w-2/3 p-2 px-6 rounded-full border-0 text-cyan-dark shadow-md font-sans text-2xl mx-2"
          >
        </div>

        <div class="w-1/2">
          <label class="ml-6 w-1/3">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            class="w-2/3 p-2 px-6 rounded-full border-0 text-cyan-dark shadow-md font-sans text-2xl mx-2"
          >
        </div>
      </div>

      <div class="flex flex-row mx-6">
        <div class="w-full mt-6">
          <p class="w-full">
            Message
          </p>
          <textarea
            class="rounded-lg w-full font-sans text-2xl p-3 border-0 text-cyan-dark shadow-md"
            required
            rows="8"
            name="message"
          />
        </div>
      </div>

      <div class="flex flex-row mt-4 justify-end">
        <button
          class="btn-default bg-cyan-darkest text-white mr-6"
          type="submit"
        >
          Send me a message :)
        </button>
      </div>
    </form>
    </div>
  </Layout>
</template>

<script>

import * as THREE from 'three'

export default {
  data(){
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      loader: null,
      lines:[],
      line_count: 15,
      windowHalfX: window.innerWidth / 2,
      windowHalfY: window.innerHeight / 2,
      mouseX: null,
      mouseY: null

    }
  },
  mounted() {
      this.init()
      this.animate()
  },
  methods: {
    init: function() {
        let container = document.getElementById('three-container')

        this.camera = new THREE.PerspectiveCamera(45, container.clientWidth/container.clientHeight, 1, 500)
        this.camera.position.set( 0, 0, 100 )
        this.camera.lookAt( 0, 0, 0 )

        this.scene = new THREE.Scene()
        this.scene.background = new THREE.Color( 0x000000 )
				// this.scene.fog = new THREE.FogExp2( 0xefd1b5, 0.25 )

        this.renderer = new THREE.WebGLRenderer({antialias: true})
        this.renderer.setSize(container.clientWidth, container.clientHeight)

        let line_mat =[]
        let line_geo = []
        for (let i = 0; i < this.line_count; i++ ) {
          let color_index = Math.round(this.getRandomArbitrary(0, 2) )
          let colors = [ '#fff02a', '#00afec', '#ea148c' ]
          line_mat[i] = new THREE.LineBasicMaterial( { color: colors[color_index] } )
          line_geo[i] = new THREE.Geometry()
          let line_verts = Math.round(this.getRandomArbitrary(2, 20) )

          for (let v = 0; v < line_verts; v++ ) {
            line_geo[i].vertices.push(new THREE.Vector3( this.getRandomArbitrary(-100, 100), this.getRandomArbitrary(-100, 100), this.getRandomArbitrary(-100, 100)) )
          }

          this.lines[i] = new THREE.Line( line_geo[i], line_mat[i] )
          this.scene.add(this.lines[i])
        }

        document.addEventListener( 'mousemove', this.onDocumentMouseMove, false )
        window.addEventListener( 'resize', this.onWindowResize, false )
        container.appendChild(this.renderer.domElement)


    },
    onWindowResize() {
				this.windowHalfX = window.innerWidth / 2
				this.windowHalfY = window.innerHeight / 2
				this.camera.aspect = window.innerWidth / window.innerHeight
				this.camera.updateProjectionMatrix()
				this.renderer.setSize( window.innerWidth, window.innerHeight )
			},
    	onDocumentMouseMove( event ) {
				this.mouseX = ( event.clientX - this.windowHalfX )
				this.mouseY = ( event.clientY - this.windowHalfY )
			},
    getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min
    },
    animate: function() {
        requestAnimationFrame(this.animate)
        this.camera.position.x += ( (this.mouseX/2) - this.camera.position.x ) * 0.05
				this.camera.position.y += ( - (this.mouseY/2) - this.camera.position.y ) * 0.05
        this.camera.lookAt( this.scene.position )
        for (let i = 0; i < this.line_count; i++ ) {
          this.lines[i].rotation.x += this.getRandomArbitrary(.0001, .003)
        this.lines[i].rotation.y += this.getRandomArbitrary(.0001, .003)
        }

        this.renderer.render(this.scene, this.camera)
    }
  },
  metaInfo: {
    title: 'Welcome to codestuff.io'
  }
}
</script>

<style>
#three-container {
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: -1;
  top: 0px;
  left: 0px;
}

</style>
