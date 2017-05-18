import { itReturnsAllMutations } from '../../../tools/sharedExamples';
import isNotArray from '../';

describe('isNotArray', () => {
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

  itReturnsAllMutations(isNotArray, mutations);
});

