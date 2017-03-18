import { itReturnsAllMutations } from '../../../tools/sharedExamples';
import isFunction from '../';

describe('isFunction', () => {
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

  itReturnsAllMutations(isFunction, mutations);
});
