import ErrorRepository from '../classErrorRepository';

test('testing error', () => {
  const packErr = new ErrorRepository();
  const result = packErr.translate(404);
  expect(result).toBe('Not found');
});

test('testing unknown error', () => {
  const packErr = new ErrorRepository();
  const result = packErr.translate(414);
  expect(result).toBe('Unknown error');
});
