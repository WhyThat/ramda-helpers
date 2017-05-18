import { is, split, when } from 'ramda';

export default when(is(String), split('.'));

