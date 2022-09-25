import { FancyConsoleLogger } from '../src/fancy_console_logger'
import { TextColors, endLine } from '../src/console_colors'

describe('Should compile', () => {
  test('Testing the imports of the file', () => {
    expect(1).toEqual(1)
  });
});

describe('Instantiation class', () => {
  test('Log function accepts text title', () => {
    FancyConsoleLogger.log('Some test')
  });
  test('Log function accepts text title and payload', () => {
    FancyConsoleLogger.log('Some test', {})
  });
});

describe('Logger console logs content', () => {
  test('Log function should log the title', () => {
    console.log = jest.fn();
    FancyConsoleLogger.log('Some test')
    expect(console.log).toHaveBeenCalledWith('Some test')
  });
  test('Log function should log the title and payload', () => {
    console.log = jest.fn();
    FancyConsoleLogger.log('Some test', { another: 'test', anotherMore: 'test' })
    expect(console.log).toHaveBeenCalledWith('Some test -> another: test anotherMore: test ')
  });
  test('Log function should log the title in color green', () => {
    console.log = jest.fn();
    FancyConsoleLogger.log('This text should be green', {}, TextColors.Green)
    expect(console.log).toHaveBeenCalledWith(`${TextColors.Green}%s${endLine}`, 'This text should be green')
  });
  test('Log function should log the title in color red', () => {
    console.log = jest.fn();
    FancyConsoleLogger.log('This text should be red', {}, TextColors.Red)
    expect(console.log).toHaveBeenCalledWith(`${TextColors.Red}%s${endLine}`, 'This text should be red')
  });
});