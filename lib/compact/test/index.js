import compact from '../';
import { itReturnsAllMutations } from '../../test/sharedExamples';

describe('orderByDesc', () => {
  const mutations = [
    { name: 'With an empty list', props: [] },
    { name: 'With one falsey elements', props: [undefined] },
    { name: 'With elements', props: [1, '', 'test', null, 0, undefined] },
  ];

  itReturnsAllMutations(compact, mutations);
});
