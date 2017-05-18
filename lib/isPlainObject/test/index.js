import { itReturnsAllMutations } from '../../../tools/sharedExamples';
import isPlainObject from '../';

describe('isPlainObject', () => {
  const mutations = [{
    name: 'With null',
    props: null,
  }, {
    name: 'With array',
    props: [],
  }, {
    name: 'With object',
    props: {},
  }, {
    name: 'With function',
    props: () => {},
  }];

  itReturnsAllMutations(isPlainObject, mutations);
});
