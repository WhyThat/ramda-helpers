import { itReturnsAllMutations } from '../../test/sharedExamples';
import renameKeysBy from '../';

const renameWithPrefix = renameKeysBy(str => `prefix_${str}`);
describe('renameKeysBy', () => {
  const mutations = [{
    name: 'With empty object',
    props: {},
  }, {
    name: 'With simple object',
    props: {
      test: '',
    },
  }, {
    name: 'With nested object',
    props: {
      test: {
        test2: '',
      },
    },
  }, {
    name: 'With complex object',
    props: {
      test: {
        test2: [
          { test2_1: [{ test2_1_1: '' }] },
          { test2_2: '' },
        ],
      },
    },
  }];
  itReturnsAllMutations(renameWithPrefix, mutations);
});
