import { itReturnsAllMutations } from '../../../tools/sharedExamples';
import strToCamelCase from '../';

describe('strToCamelCase', () => {
  const mutations = [{
    name: 'With empty string',
    props: '',
  }, {
    name: 'With camelCase string',
    props: 'camelCaseString',
  }, {
    name: 'With dashes',
    props: 'str-with-dashes',
  }, {
    name: 'With first char un uppercase',
    props: 'StrWithUpperCase',
  }, {
    name: 'With random string',
    props: 'Iam@-random/string',
  }];
  itReturnsAllMutations(strToCamelCase, mutations);
});
