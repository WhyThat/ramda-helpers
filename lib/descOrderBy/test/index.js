import descOrderBy from '../';
import { itReturnsCorrectResult } from '../../../tools/sharedExamples';

describe('descOrderBy', () => {
  const mutations = [{
    name: 'With empty args',
    props: ['', []],
  }, {
    name: 'With a non ordered array of object',
    props: ['b', [{ a: 5, b: 1 }, { b: 4 }, { b: 2 }, { b: 3 }]],
  }, {
    name: 'With key not present in any object',
    props: ['c', [{ a: 5, b: 1 }, { b: 4 }, { b: 2 }, { b: 3 }]],
  }, {
    name: 'With key present only in few object',
    props: ['c', [{ a: 5, b: 1, c: 3 }, { b: 4, c: 6 }, { b: 2 }, { b: 3 }]],
  }];

  describe('Should be a function', () => {
    itReturnsCorrectResult(typeof descOrderBy);
  });

  mutations.forEach((mutation) => {
    describe(mutation.name, () => {
      itReturnsCorrectResult(descOrderBy(...mutation.props));
    });
  });
});
