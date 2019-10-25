import factorial from '../factorial';

describe('Factorial', () => {
  test('Base case factorial of zero', () => {
    expect(factorial(0)).toBe(1);
  });

  test('Base case factorial of one', () => {
    expect(factorial(1)).toBe(1);
  });

  test('Factorial of four', () => {
    expect(factorial(4)).toBe(24);
  });

  test('Factorial of six', () => {
    expect(factorial(6)).toBe(720);
  });
});
