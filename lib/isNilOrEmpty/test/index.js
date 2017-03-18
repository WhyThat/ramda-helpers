import { itReturnsCorrectResult } from '../../../tools/sharedExamples';
import isNilOrEmpty from '../';

describe('isNilOrEmpty', () => {
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
    name: 'With  an no empty string',
    props: 'el',
  }, {
    name: 'With no empty array',
    props: ['el'],
  }, {
    name: 'With no empty object',
    props: {
      el: '',
    },
  }, {
    name: 'With false',
    props: false,
  }];

  mutations.forEach((mutation) => {
    describe(mutation.name, () => {
      itReturnsCorrectResult(isNilOrEmpty(mutation.props));
    });
  });
});

