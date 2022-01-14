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

console.log(THREE)

// Canvas
const canvas = document.querySelector('canvas.canvas')