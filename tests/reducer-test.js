import reducer from '../app/reducer';


const defaultState = Object.freeze({
  contacts: [],
});


module('reducer', () => {
  // Test 2
  test('it exists', (assert) => {
    assert.ok(reducer, 'reducer exists');
  });

  // Test 3
  test('it has a default state', (assert) => {
    assert.deepEqual(reducer(null, {}), defaultState, 'Returns the default state');
  });

  // Test 4
  test ('CONTACT@FIND_ALL: it can add new data', (assert) => {
    const startingState = { ...defaultState };
    const actionOne = { type: 'CONTACT@FIND_ALL', data: [{ firstName: 'John', lastName: 'Cena' }] };
    const expectedResult = {contacts: [{ firstName: 'John', lastName: 'Cena' }] };

    assert.deepEqual(reducer(startingState, actionOne), expectedResult);
  });

  // Test 5
  test('CONTACT@FIND_ALL: it can overwrite existing data', (assert) => {
    const startingState = { contacts: [{ firstName: 'Angelina', lastName: 'Jolie' }] };
    const actionOne = { type: 'CONTACT@FIND_ALL', data: [{ firstName: 'John', lastName: 'Cena' }] };
    const expectedResult = { contacts: [{ firstName: 'John', lastName: 'Cena' }] };

    assert.deepEqual(reducer(startingState, actionOne), expectedResult);
  });

  // Test 6
  test ('CONTACT@FIND_ALL: it can overwrite existing data', (assert) => {
    const startingStateTwo = { contacts: [{ firstName: 'Angelina', lastName: 'Jolie' }] };
    const actionTwo = { type: 'CONTACT@FIND_ALL', data: [{ firstName: 'Nic', lastName: 'Cage' }] };
    const expectedResultTwo = { contacts: [{ firstName: 'Nic', lastName: 'Cage' }] };

    assert.deepEqual(reducer(startingStateTwo, actionTwo), expectedResultTwo);
  });

  // Test 7
  test ('CONTACT@CREATE: it can add new data', (assert) => {
    const startingState = { ...defaultState };
    const actionOne = { type: 'CONTACT@CREATE', data: { firstName: 'Johnny', lastName: 'Depp' } };
    const expectedResult = { contacts: [{ firstName: 'Johnny', lastName: 'Depp' }] };

    assert.deepEqual(reducer(startingState, actionOne), expectedResult);
  });

  // Test 8
  test ('CONTACT@CREATE: it can append new data', (assert) => {
    const startingStateTwo = { contacts: [{ firstName: 'Angelina', lastName: 'Jolie' }] };
    const actionTwo = { type: 'CONTACT@CREATE', data: { firstName: 'Johnny', lastName: 'Depp' } };
    const expectedResultTwo = { contacts: [{ firstName: 'Angelina', lastName: 'Jolie' }, { firstName: 'Johnny', lastName: 'Depp' }] };

    assert.deepEqual(reducer(startingStateTwo, actionTwo), expectedResultTwo);
  });
});
