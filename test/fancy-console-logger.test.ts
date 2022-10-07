import { fcl } from '../src'
import { TextColors, endLine } from '../src/console_colors'

describe('Should compile', () => {
  test('Testing the imports of the file', () => {
    expect(1).toEqual(1)
  });
});

describe('Instantiation class', () => {
  test('Log function accepts text title', () => {
    fcl.log('Some test')
  });
  test('Log function accepts text title and payload', () => {
    fcl.log('Some test', {})
  });
});

describe('Logger console logs content', () => {
  test('Log function should log the title', () => {
    console.log = jest.fn();
    fcl.log('Some test')
    expect(console.log).toHaveBeenCalledWith('Some test')
  });
  test('Log function should log the title and payload', () => {
    console.log = jest.fn();
    fcl.log('Some test', { another: 'test', anotherMore: 'test' })
    expect(console.log).toHaveBeenCalledWith('Some test -> another: test anotherMore: test')
  });
  test('Log function should log the title in color green', () => {
    console.log = jest.fn();
    fcl.log('This text should be green', {}, TextColors.Green)
    expect(console.log).toHaveBeenCalledWith(`${TextColors.Green}%s${endLine}`, 'This text should be green')
  });
  test('Log function should log the title in color red', () => {
    console.log = jest.fn();
    fcl.log('This text should be red', {}, TextColors.Red)
    expect(console.log).toHaveBeenCalledWith(`${TextColors.Red}%s${endLine}`, 'This text should be red')
  });
  test('Log function should log the title and the name of the file', () => {
    console.log = jest.fn();
    fcl.log('This should show info', {}, null, true)
    expect(console.log).toHaveBeenCalledWith(`This should show info in file logger_decorator_file_info.ts`)
  });
  test('Log function should log the title, the payload, in color and the name of the file', () => {
    console.log = jest.fn();
    fcl.log('This should show green', { test: 'test' }, TextColors.Green, true)
    expect(console.log).toHaveBeenCalledWith(`${TextColors.Green}%s${endLine}`, 'This should show green -> test: test in file logger_decorator_file_info.ts')
  });
});