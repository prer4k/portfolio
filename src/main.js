import Env from './core/env.js';
import Physics from './core/physics.js';
import Cube from './objects/cube.js';
import Ground from './objects/ground.js';

(async () => {
  const physics = await Physics.init();
  const env = new Env(physics);

  const ground = new Ground(physics);
  const cube = new Cube(env, physics);

  env.scene.add(ground);
  env.scene.add(cube);
})();
