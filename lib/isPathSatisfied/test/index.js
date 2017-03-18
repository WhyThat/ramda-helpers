import { itReturnsCorrectResult } from '../../test/sharedExamples';
import isPathSatisfied from '../';

const obj1 = { a: { b: { c: {} } } };

describe('isPathSatisfied', () => {
  const mutations = [{
    name: 'With empty props',
    props: ['', {}],
  }, {
    name: 'With empty string predicate and an object',
    props: ['', obj1],
  }, {
    name: 'With a string predicate and truthy path (deepth == 1)',
    props: ['a', obj1],
  }, {
    name: 'With a string predicate and truthy path (deepth > 1)',
    props: ['a.b', obj1],
  }, {
    name: 'With a string predicate and falsy path (deepth == 1)',
    props: ['b', obj1],
  }, {
    name: 'With a string predicate and falsy path (deepth > 1)',
    props: ['a.c', obj1],
  }, {
    name: 'With a string predicate and falsy path (deepth > 1)',
    props: ['a.c.d', obj1],
  }, {
    name: 'With empty array predicate and an object',
    props: [
      [], obj1,
    ],
  }, {
    name: 'With a array predicate and truthy path (deepth == 1)',
    props: [
      ['a'], obj1,
    ],
  }, {
    name: 'With a array predicate and truthy path (deepth > 1)',
    props: [
      ['a', 'b'], obj1,
    ],
  }, {
    name: 'With a array predicate and falsy path (deepth == 1)',
    props: [
      ['b'], obj1,
    ],
  }, {
    name: 'With a array predicate and falsy path (deepth > 1)',
    props: [
      ['a', 'c'], obj1,
    ],
  }];

  mutations.forEach((mutation) => {
    describe(mutation.name, () => {
      itReturnsCorrectResult(isPathSatisfied(...mutation.props));
    });
  });
});

