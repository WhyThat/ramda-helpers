export default (result) => {
  test('returns correct result', () => {
    expect(result).toMatchSnapshot();
  });
};
