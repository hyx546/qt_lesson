
export function reactive(target) {
  const obderved = new Proxy(target, {
    set: () => {

    },
    get: () => {
      
    }
  });
  return obderved;
}