export default class Physics {
  static async init() {
    const module = await import('@dimforge/rapier3d-compat');
    const RAPIER = module.default;

    await RAPIER.init(); 
    return new Physics(RAPIER);
  }

  constructor(RAPIER) {
    this.RAPIER = RAPIER;
    this.world = new RAPIER.World({
      x: 0,
      y: -9.81,
      z: 0,
    });
  }

  step() {
    this.world.step();
  }
}
