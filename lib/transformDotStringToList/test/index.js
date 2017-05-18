import transformToList from '../';
import { itReturnsCorrectResult } from '../../../tools/sharedExamples';

describe('TransformDotStringToList', () => {
  const mutations = [
    { name: 'With an empty string', props: '' },
    { name: 'With an empty array', props: [] },
    { name: 'With dotted string', props: 'a.b.c' },
    { name: 'With array', props: ['a', 'b', 'c'] },
  ];

  mutations.forEach((mutation) => {
    describe(mutation.name, () => {
      itReturnsCorrectResult(transformToList(mutation.props));
    });
  });
});

