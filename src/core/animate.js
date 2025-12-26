export default class Animate {
  constructor() {
    this.updatables = new Set();
  }

  add(fn) {
    this.updatables.add(fn);
  }

  remove(fn) {
    this.updatables.delete(fn);
  }

  update(delta) {
    for (const fn of this.updatables) {
      fn(delta);
    }
  }
}
