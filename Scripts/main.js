import * as THREE from '../node_modules/three/build/three.module.js'
import {
    gsap
} from '../node_modules/gsap/src/gsap-core.js'
import {
    ExpoScaleEase,
    RoughEase,
    SlowMo
} from '../node_modules/gsap/src/EasePack.js'

gsap.registerPlugin(TextPlugin, ExpoScaleEase, RoughEase, SlowMo);

// ----------------- Canvas 1-----------------

const canvas_1 = document.querySelector('.canvas-1')
canvas_1.style.position = 'absolute';

// ----------------- Scene -----------------

const scene = new THREE.Scene()

// ----------------- Camera -----------------

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.x = -1.5
camera.position.y = 1.5
camera.position.z = 5

// ----------------- Lights -----------------



// ----------------- Render -----------------

const renderer = new THREE.WebGLRenderer({
    canvas: canvas_1,
    antialias: true,
    alpha: true
})

renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// ----------------- Mesh -----------------

const geometry = new THREE.BoxGeometry(2, 2, 2)

const material = new THREE.MeshBasicMaterial({
    color: 0x7161F5
})
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

// ----------------- Helpers -----------------

const gridHelper = new THREE.GridHelper(10, 10);
scene.add(gridHelper);
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// ----------------- Loop -----------------

function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}
animate();

// ----------------- Resize -----------------

function onWindowResize() {
    camera.aspect = (window.innerWidth / window.innerWidth);
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerWidth);
}
window.addEventListener('resize', onWindowResize, false);












// // ----------------- Render -----------------
// const renderer = new THREE.WebGLRenderer({
//     antialias: true,
//     alpha: true
// });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // ----------------- Scene -----------------
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//     50,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     100
// );
// camera.position.z = 6;
// camera.position.y = 0;

// // ----------------- Mesh -----------------
// const geometry = new THREE.BoxGeometry(2, 2, 2);
// const material = new THREE.MeshBasicMaterial({
//     color: 0x7161F5,
// });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// // ----------------- Helpers -----------------
// const gridHelper = new THREE.GridHelper(10, 10);
// scene.add(gridHelper);
// const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);

// // ----------------- Loop -----------------
// const animate = function () {
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
// };
// animate();

// // ----------------- Resize -----------------
// function onWindowResize() {
//     camera.aspect = (window.innerWidth / window.innerWidth);
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerWidth);
// }
// window.addEventListener('resize', onWindowResize, false);