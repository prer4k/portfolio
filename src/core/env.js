import * as THREE from 'three';
import Animate from './animate.js';

export default class Env {
  constructor() {
    this.animate = new Animate();
    this.clock = new THREE.Clock();

    this.init();
    window.addEventListener('resize', this.onWindowResize);
  }

  init() {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      10000
    );
    this.camera.position.z = 3;

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setAnimationLoop(this.loop);

    document.querySelector('.screen')
      .appendChild(this.renderer.domElement);
  }

  loop = () => {
    const delta = this.clock.getDelta();

    this.animate.update(delta);
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;

    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }
}
