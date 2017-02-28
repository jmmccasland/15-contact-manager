import reducer from '../app/reducer';


const defaultState = Object.freeze({
  games: [],
});

const contactOne = Object.freeze({
  _id: '1234',
  firstname: 'John',
  lastname: 'McCasland',
  street: '123 Ivy St',
  state: 'TN',
});

module('reducer', () => {
  test('it exists', (assert) => {
    assert.ok(reducer, 'reducer exists');
  });

  test('it has a default state', (assert) => {
    assert.deepEqual(reducer(null, {}), defaultState, 'Returns the default state');
  });
});
