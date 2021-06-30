const text = 'Te amo Sara';

test('Should contain a text', () => {
  expect(text).toMatch(/Sara/);
});