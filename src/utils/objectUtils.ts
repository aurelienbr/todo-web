function flattenNextLevel (res: Record<string, string>, key: string, val: string, pre = ''): Record<string, string> {
  const prefix = [pre, key].filter(v => v).join('.');
  return typeof val === 'object'
    ? Object.keys(val).reduce((prev, curr) => flattenNextLevel(prev, curr, val[curr], prefix), res)
    : Object.assign(res, { [prefix]: val });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function flatten (toFlatten: Record<string, any>): Record<string, string> {
  return Object.keys(toFlatten).reduce((prev, curr) => flattenNextLevel(prev, curr, toFlatten[curr]), {});
}
