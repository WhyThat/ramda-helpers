import { itReturnsAllMutations } from '../../../tools/sharedExamples';
import isSet from '../';

describe('isSet', () => {
  const mutations = [{
    name: 'With null',
    props: null,
  }, {
    name: 'With undefined',
    props: undefined,
  }, {
    name: 'With empty string',
    props: '',
  }, {
    name: 'With empty array',
    props: [],
  }, {
    name: 'With empty object',
    props: {},
  }, {
    name: 'With an non-empty array',
    props: ['non-Empty'],
  }, {
    name: 'With an non-empty object',
    props: { a: '' },
  }];

  itReturnsAllMutations(isSet, mutations);
});
