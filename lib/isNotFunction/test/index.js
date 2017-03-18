import { itReturnsAllMutations } from '../../../tools/sharedExamples';
import isNotFunction from '../';

describe('isNotFunction', () => {
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

  itReturnsAllMutations(isNotFunction, mutations);
});

