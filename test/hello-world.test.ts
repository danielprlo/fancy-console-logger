import { sayHello } from '../src/hello-world'

describe('Test hello world', () => {
  test('Gets hello world response', () => {
    expect(sayHello()).toBe('Hello world');
  });
});