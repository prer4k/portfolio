import * as THREE from 'three';
import registerEntity from '../core/entity.js';

export default class Cube extends THREE.Mesh {
  constructor(env) {
    super(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    );

    registerEntity(this, env);
  }

  update = (delta) => {
    this.rotation.x += delta;
    this.rotation.y += delta * 0.5;
  }
}
