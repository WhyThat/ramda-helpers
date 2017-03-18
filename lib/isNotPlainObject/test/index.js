import { itReturnsAllMutations } from '../../../tools/sharedExamples';
import isNotPlainObject from '../';

describe('isNotPlainObject', () => {
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

  itReturnsAllMutations(isNotPlainObject, mutations);
});

