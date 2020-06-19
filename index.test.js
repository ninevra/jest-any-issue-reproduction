test('any(Symbol) should match symbols', () => {
  expect(Symbol()).toEqual(expect.any(Symbol));
});

test('any(BigInt) should match bigints', () => {
  expect(1n).toEqual(expect.any(BigInt));
});

test('any(Object) should not match null', () => {
  expect(null).not.toEqual(expect.any(Object));
});
