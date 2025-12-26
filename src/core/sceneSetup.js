import * as THREE from 'three';

export class SceneLights {
  constructor(scene) {
    this.scene = scene;
    this.init();
  }

  init() {
    this.ambient = new THREE.AmbientLight(0xffffff, 0.8);
    this.scene.add(this.ambient);

    this.directional = new THREE.DirectionalLight(0xffffff, 1);
    this.directional.position.set(3, 5, 2);
    this.directional.castShadow = true;
    this.scene.add(this.directional);
  }
}

export class SceneHelpers {
  constructor(scene) {
    this.scene = scene;
    this.init();
  }

  init() {
    this.axes = new THREE.AxesHelper(3);
    this.scene.add(this.axes);

    this.grid = new THREE.GridHelper(20, 20);
    this.scene.add(this.grid);
  }
}
