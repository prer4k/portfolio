export default function registerEntity(instance, env) {
  if (instance.update) {
    env.animate.add(instance.update);
  }
}
