// 判断是否为空数组
export function nonEmptyArray(obj) {
  return Array.isArray(obj) && !!obj.length;
}

// 深度取值
export function getIn(path, object, defaultValue) {
  const isTrue = (v) => !!v || v === 0;
  return path.reduce((xs, x) => (isTrue(xs) && isTrue(xs[x]) ? xs[x] : defaultValue), object);
}
