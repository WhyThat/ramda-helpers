import { itReturnsAllMutations } from '../../test/sharedExamples';
import { isPlainObject, isNotPlainObject } from '../';

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

