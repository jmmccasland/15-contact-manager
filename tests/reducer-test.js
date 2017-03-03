import reducer from '../app/reducer';


const defaultState = Object.freeze({
  contacts: [],
});

const contactOne = {
  firstName: 'John',
  lastName: 'Cena',
  id: 1,
}

const contactTwo = {
  firstName: 'Angelina',
  lastName: 'Jo Lee',
  id: 2,
}


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

  // Test 9
  test ('CONTACT@REMOVE: it can remove the only item from a list', (assert) => {
    const startingStateOne = { contacts: [contactOne] };
    const actionOne = { type: 'CONTACT@REMOVE', id: contactOne.id };
    const expectedResultOne = { contacts: [] };

    assert.deepEqual(reducer(startingStateOne, actionOne), expectedResultOne);
  });

  // Test 10
  test ('CONTACT@REMOVE: it can remove a single item from a list', (assert) => {
    const startingStateOne = { ...defaultState, contacts: [contactOne, contactTwo] };
    const actionOne = { type: 'CONTACT@REMOVE', id: contactOne.id };
    const expectedResultOne = { contacts: [contactTwo] };

    assert.deepEqual(reducer(startingStateOne, actionOne), expectedResultOne);
  });

  // Test 11
  test ('CONTACT@REMOVE: it can remove a single item that doesnt exist from a list ', (assert) => {
    const startingStateOne = { ...defaultState, contacts: [contactOne, contactTwo] };
    const actionOne = { type: 'CONTACT@REMOVE', id: 9 };
    const expectedResultOne = { contacts: [contactOne, contactTwo] };

    assert.deepEqual(reducer(startingStateOne, actionOne), expectedResultOne);
  });


});
