import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default class Controls {
  constructor(camera, domElement) {
    this.controls = new OrbitControls(camera, domElement);

    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.enablePan = false;

    this.controls.minDistance = 1.5;
    this.controls.maxDistance = 10;
  }

  update() {
    this.controls.update();
  }

  dispose() {
    this.controls.dispose();
  }
}
