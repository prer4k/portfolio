import * as THREE from 'three';

export default class RapierDebug {
  constructor(scene, physics) {
    this.physics = physics;

    this.geometry = new THREE.BufferGeometry();
    this.material = new THREE.LineBasicMaterial({
      color: 0xff0000,
    });

    this.mesh = new THREE.LineSegments(this.geometry, this.material);
    this.mesh.frustumCulled = false;

    scene.add(this.mesh);
  }

  update() {
    const debug = this.physics.world.debugRender();

    this.geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(debug.vertices, 3)
    );
  }

  dispose() {
    this.geometry.dispose();
    this.material.dispose();
  }
}
