import { itReturnsAllMutations } from '../../test/sharedExamples';
import { isFunction, isNotFunction } from '../';

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

