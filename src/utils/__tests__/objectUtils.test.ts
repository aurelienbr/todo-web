import { flatten } from './../objectUtils';

test('flatten must return a flattened object with correct key/value', () => {
  const a = {
    b: {
      c: 1,
      d: 2,
      f: {
        g: 4
      }
    },
    e: 3
  };

  const flattened = flatten(a);
  expect(flattened).toEqual({
    'b.c': 1,
    'b.d': 2,
    e: 3,
    'b.f.g': 4
  });
});
