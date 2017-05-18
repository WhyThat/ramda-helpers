import itReturnsCorrectResult from './itReturnsCorrectResult';

export default (fn, mutations) => {
  mutations.forEach((mutation, index) => {
    const name = mutation.name || `mutations ${index}`;

    describe(name, () => {
      itReturnsCorrectResult(fn(mutation.props));
    });
  });
};
