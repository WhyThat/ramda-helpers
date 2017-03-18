import { itReturnsCorrectResult } from '../../test/sharedExamples';
import maxByKey from '../';

describe('maxByKey', () => {
  const mutations = [{
    name: 'With null',
    props: [null, null, []],
  }, {
    name: 'key not defined in nested object',
    props: ['b', { a: 0 }, []],
  }, {
    name: 'key defined',
    props: ['a', { a: 0 }, [{ a: 6 }, { a: 5 }]],
  }];

  mutations.forEach((mutation) => {
    describe(mutation.name, () => {
      itReturnsCorrectResult(maxByKey(...mutation.props));
    });
  });
});
