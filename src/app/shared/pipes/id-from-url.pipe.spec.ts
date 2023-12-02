import { IdFromUrlPipe } from './id-from-url.pipe';

describe('IdFromUrlPipe', () => {
  it('create an instance', () => {
    const pipe = new IdFromUrlPipe();
    expect(pipe).toBeTruthy();
  });

  it('create an instance', () => {
    const actualValue = 'https://swapi.dev/api/films/1/';
    const expectedValue = '1';
    const pipe = new IdFromUrlPipe();

    expect(pipe.transform(actualValue)).toBe(expectedValue);
  });
});
