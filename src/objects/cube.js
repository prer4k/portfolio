// src/objects/cube.js
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import registerEntity from '../core/entity.js';

export default class Cube extends THREE.Mesh {
  constructor(env, physics) {
    super(
      new RoundedBoxGeometry(1, 1, 1, 8, 0.15),
      new THREE.MeshStandardMaterial({
        color: 0x00ff00,
        roughness: 0.4,
        metalness: 0.1,
      })
    );

    // spawn position
    this.position.set(0, 10, 0);

    // rotate so a corner points downward
    this.rotation.set(
      Math.PI / 4, // X
      0,
      Math.PI / 4  // Z
    );

    const RAPIER = physics.RAPIER;

    // sync initial rotation to Rapier
    const q = this.quaternion;

    const bodyDesc = RAPIER.RigidBodyDesc.dynamic()
      .setTranslation(0, 2, 0)
      .setRotation({
        x: q.x,
        y: q.y,
        z: q.z,
        w: q.w,
      })
      .setCanSleep(false);

    this.body = physics.world.createRigidBody(bodyDesc);

    const colliderDesc = RAPIER.ColliderDesc.cuboid(0.5, 0.5, 0.5)
      .setFriction(1.0)
      .setRestitution(1);

    physics.world.createCollider(colliderDesc, this.body);

    registerEntity(this, env);
  }

  update = () => {
    const pos = this.body.translation();
    const rot = this.body.rotation();

    this.position.set(pos.x, pos.y, pos.z);
    this.quaternion.set(rot.x, rot.y, rot.z, rot.w);
  };
}
