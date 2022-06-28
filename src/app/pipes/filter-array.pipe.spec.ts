import { filterArrayPipe } from './filter-array.pipe';

describe('filterArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new filterArrayPipe();
    expect(pipe).toBeTruthy();
  });
});
