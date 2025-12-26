import * as THREE from 'three';

export default class Ground extends THREE.Mesh {
  constructor(physics) {
    super(
      new THREE.BoxGeometry(10, 0.2, 10),
      new THREE.MeshStandardMaterial({ color: 0x444444 })
    );

    this.position.y = -1;
    this.receiveShadow = true;

    // physics body
    const RAPIER = physics.RAPIER;
    const bodyDesc = RAPIER.RigidBodyDesc.fixed()
      .setTranslation(0, this.position.y + 0.1, 0);

    this.body = physics.world.createRigidBody(bodyDesc);

    const colliderDesc = RAPIER.ColliderDesc.cuboid(5, 0.1, 5);
    physics.world.createCollider(colliderDesc, this.body);
  }
}
