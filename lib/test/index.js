import * as ramdaHelpers from '../';

describe('RamdaHelpers', () => {
  test('helpers should be defined', () => {
    Object.keys(ramdaHelpers).forEach((helperKey) => {
      const helper = ramdaHelpers[helperKey];
      expect(typeof helper).toEqual('function');
    });
  });
});
