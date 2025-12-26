import Env from './core/env.js';
import Cube from './objects/cube.js';

new (class App {
  constructor() {
    this.env = new Env();

    this.cube = new Cube(this.env);
    this.env.scene.add(this.cube);
  }
})();
