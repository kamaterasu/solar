import 'style.css'

import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.117.1/build/three.module.js'

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls' 

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth,window.innerHeight)
camera.position.setZ(50)

renderer.render(scene,camera)

//const geometry = new THREE.TorusGeometry(10,4,16,100)
//const material = new THREE.MeshStandardMaterial({
//  color:  0xfdf9fa,
//})
//const torus = new THREE.Mesh(geometry,material)

const sunTexture = new THREE.TextureLoader().load('sun.jpg')
const merTexture = new THREE.TextureLoader().load('mercury.jpg')
const venTexture = new THREE.TextureLoader().load('venus.jpg')
const earTexture = new THREE.TextureLoader().load('earth.jpg')
const marTexture = new THREE.TextureLoader().load('mars.jpg')
const jupTexture = new THREE.TextureLoader().load('jupiter.jpg')
const satTexture = new THREE.TextureLoader().load('saturn.jpg')
const uraTexture = new THREE.TextureLoader().load('uranus.jpg')
const nepTexture = new THREE.TextureLoader().load('neptune.jpg')

const sunGeometry = new THREE.SphereGeometry( 20, 32, 16 )
const sunMaterial = new THREE.MeshStandardMaterial({
  map:sunTexture
})
const sun = new THREE.Mesh(sunGeometry,sunMaterial)
sun.position.setZ(-30)

const merGeometry = new THREE.SphereGeometry( 0.5, 32, 16 )
const merMaterial = new THREE.MeshStandardMaterial({
  map:merTexture
})
const mer = new THREE.Mesh(merGeometry,merMaterial)
mer.position.x = 30

const venGeometry = new THREE.SphereGeometry( 1.29, 32, 16 )
const venMaterial = new THREE.MeshStandardMaterial({
  map:venTexture
})
const ven = new THREE.Mesh(venGeometry,venMaterial)
ven.position.x = 60
ven.position.z = 30

const earGeometry = new THREE.SphereGeometry( 1.365, 32, 16 )
const earMaterial = new THREE.MeshStandardMaterial({
  map:earTexture
})
const ear = new THREE.Mesh(earGeometry,earMaterial)
ear.position.x = 90
ear.position.z = 60

const marGeometry = new THREE.SphereGeometry( 0.72, 32, 16 )
const marMaterial = new THREE.MeshStandardMaterial({
  map:marTexture
})
const mar = new THREE.Mesh(marGeometry,marMaterial)
mar.position.x = 120
mar.position.z = 90

const jupGeometry = new THREE.SphereGeometry( 15.4, 32, 16 )
const jupMaterial = new THREE.MeshStandardMaterial({
  map:jupTexture
})
const jup = new THREE.Mesh(jupGeometry,jupMaterial)
jup.position.x = 150
jup.position.z = 120

const satGeometry = new THREE.SphereGeometry( 12.99, 32, 16 )
const satMaterial = new THREE.MeshStandardMaterial({
  map:satTexture
})
const sat = new THREE.Mesh(satGeometry,satMaterial)
sat.position.x = 180
sat.position.z = 150

const uraGeometry = new THREE.SphereGeometry( 5.49, 32, 16 )
const uraMaterial = new THREE.MeshStandardMaterial({
  map:uraTexture
})
const ura = new THREE.Mesh(uraGeometry,uraMaterial)
ura.position.x = 210
ura.position.z = 180

const nepGeometry = new THREE.SphereGeometry( 5, 32, 16 )
const nepMaterial = new THREE.MeshStandardMaterial({
  map:nepTexture
})
const nep = new THREE.Mesh(nepGeometry,nepMaterial)
nep.position.x = 240
nep.position.z = 210

scene.add(sun,mer,ven,ear,mar,jup,sat,ura,nep)



const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(50,50,50)

const ambientLight = new THREE.AmbientLight(0xC8C1C0)
scene.add(/*pointLight,*/ambientLight)

const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200,50)
//scene.add(lightHelper,gridHelper)

//const controls = new OrbitControls(camera,renderer.domElement)

function addStar(){
  const geometry = new THREE.SphereGeometry(0.09 ,25,24)
  const material = new THREE.MeshStandardMaterial({
    color:  0xffffff
  })
  const star = new THREE.Mesh(geometry,material)

  const [x,y,z] = Array(3).fill().map(()=> THREE.MathUtils.randFloatSpread(100))
  star.position.set(x,y,z)
  scene.add(star)
}

Array(100).fill().forEach(addStar)

const spaceTexture = new THREE.TextureLoader().load('space.jpg')
//scene.background = spaceTexture
var t = 0,t1=0,t2=0,t3=0,t4=0,t5=0,t6=0,t7=0;

function moveCamera(){
  const b = document.body.getBoundingClientRect().top
  camera.position.z = b * -0.01
  camera.position.x = b * -0.0002
  camera.rotation.y = b * -0.0002


}

document.body.onscroll = moveCamera

function animate(){
  requestAnimationFrame(animate)
  t += 0.006
  t1 += 0.008
  t2 += 0.01
  t3 += 0.012
  t4 += 0.014
  t5 += 0.016
  t6 += 0.018
  t7 += 0.020
  sun.rotation.y += 0.005;
  mer.rotation.y += 0.03;
  mer.position.x = 30*Math.cos(t7) + 0;
  mer.position.z = 30*Math.sin(t7) + 0;
  ven.rotation.y += 0.03;
  ven.position.x = 60*Math.cos(t6) + 1;
  ven.position.z = 60*Math.sin(t6) + 1;
  ear.rotation.y += 0.03;
  ear.position.x = 90*Math.cos(t5) + 2;
  ear.position.z = 90*Math.sin(t5) + 2;
  mar.rotation.y += 0.03;
  mar.position.x = 120*Math.cos(t4) + 3;
  mar.position.z = 120*Math.sin(t4) + 3;
  jup.rotation.y += 0.03;
  jup.position.x = 150*Math.cos(t3) + 4;
  jup.position.z = 150*Math.sin(t3) + 4;
  sat.rotation.y += 0.03;
  sat.position.x = 180*Math.cos(t2) + 5;
  sat.position.z = 180*Math.sin(t2) + 5;
  ura.rotation.y += 0.03;
  ura.position.x = 210*Math.cos(t1) + 6;
  ura.position.z = 210*Math.sin(t1) + 6;
  nep.rotation.y += 0.03;
  nep.position.x = 240*Math.cos(t) + 7;
  nep.position.z = 240*Math.sin(t) + 7;
  

  //controls.update()

  renderer.render(scene,camera)
}

 animate()