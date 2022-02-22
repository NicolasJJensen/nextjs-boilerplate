export function reject<T, U extends keyof T>(obj: T, keys: U[]): Omit<T, U> {
  return (Object.keys(obj) as U[]).reduce(
    (acc, curr) => (keys.includes(curr) ? acc : { ...acc, [curr]: obj[curr] }),
    {} as Omit<T, U>
  )
}

export function select<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const ret: any = {};
  keys.forEach(key => {
    ret[key] = obj[key];
  })
  return ret;
}