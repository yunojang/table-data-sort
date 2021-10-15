function cachingDecorator(func) {
  let cache = new Map();

  return function (key, arg) {
    if (cache.has(key)) {
      return cache.get(key);
    }

    let result = func(arg);
    cache.set(key, result);

    return result;
  };
}

export default cachingDecorator;
