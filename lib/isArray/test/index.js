import { itReturnsAllMutations } from '../../test/sharedExamples';
import { isArray, isNotArray } from '../';

describe('isArray', () => {
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

  itReturnsAllMutations(isArray, mutations);
});
