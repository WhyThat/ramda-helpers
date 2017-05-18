import {
  comparator,
  curry,
  gt,
  prop,
  sort,
} from 'ramda';

const descComparatorByProp = curry(propName => comparator(
      (a, b) => gt(prop(propName, a), prop(propName, b))));

const descOrderBy = curry((propName, list) => sort(descComparatorByProp(propName), list));

/**
 *  Sort desc a list of nested object by a prop
 *  @name descOrderBy
 *  @param {string} propName
 *  @param {Array} listOfNestedObject
 *  @returns {Array}
 *  @example
 *  descOrderBy('a', [{ a:1, b:2 }, { a:2, b:1 }])  //=> [{ a:2, b:1 }, { a:1, b:2 }]
 */
export default descOrderBy;
