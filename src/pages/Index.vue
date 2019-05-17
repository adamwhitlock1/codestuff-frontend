<template>
  <Layout>
    <div

      class="container mt-12 flex justify-center align-middle items-center object-center"
    >
      <div class="flex-1 mt-24 justify-center align-middle items-center object-center p-4 mx-12 bg-trans-gradient rounded-lg shadow">
        <h2 class="text-4xl font-light italic mb-0 pb-0 text-white text-center">
          Unique software &amp; creative resources.
        </h2>
        <h3 class="text-2xl tracking-wide text-white text-center mt-0">
          Building software and web based solutions for developers and designers.
        </h3>
        <p class="text-center text-white">
          Projects:
        </p>
        <div class="flex px-12">
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
    </div>



    <transition
      name="fade"
      appear
    >
      <div id="three-container" />
    </transition>


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
        // this.scene.background = new THREE.Color( 0x000000 )

        this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true})
        this.renderer.setSize(container.clientWidth, container.clientHeight)
        this.renderer.setClearColor( 0x000000, 0 )

        let line_mat =[]
        let line_geo = []
        for (let i = 0; i < this.line_count; i++ ) {
          let color_index = Math.round(this.getRandomArbitrary(0, 2) )
          let colors = [ '#fff02a', '#00afec', '#ea148c' ]
          line_mat[i] = new THREE.LineBasicMaterial( { color: colors[color_index] } )
          line_geo[i] = new THREE.Geometry()
          let line_verts = Math.round(this.getRandomArbitrary(2, 10) )

          for (let v = 0; v < line_verts; v++ ) {
            line_geo[i].vertices.push(new THREE.Vector3( this.getRandomArbitrary(-100, 100), this.getRandomArbitrary(-100, 100), this.getRandomArbitrary(-100, 100)) )
          }

          this.lines[i] = new THREE.Line( line_geo[i], line_mat[i] )
          this.scene.add(this.lines[i])
        }

        var part_geometry = new THREE.BufferGeometry()
				var part_vertices = []
				for ( var i = 0; i < 15000; i ++ ) {
					part_vertices.push( THREE.Math.randFloatSpread( 2000 ) ) // x
					part_vertices.push( THREE.Math.randFloatSpread( 2000 ) ) // y
					part_vertices.push( THREE.Math.randFloatSpread( 2000 ) ) // z
        }

        part_geometry.addAttribute( 'position', new THREE.Float32BufferAttribute( part_vertices, 3 ) )
				var particles = new THREE.Points( part_geometry, new THREE.PointsMaterial( { color: 0x888888 } ) )
				this.scene.add( particles )

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
          this.lines[i].rotation.x += .001
        this.lines[i].rotation.y += .0005
        this.lines[i].rotation.z += -.001
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
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(27,3,17,1) 100%);
  overflow: hidden;
  animation-name: fade-in;
  animation-duration: 1.25s;
}

@keyframes fade-in {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}

.bg-trans-gradient {
  background: radial-gradient(circle, rgba(0,0,0,.85) 10%, rgba(27,3,17,0.05) 100%);
}

</style>
