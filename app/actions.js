export function findAll(data) {
  return {
    type: 'CONTACT@FIND_ALL',
    data
  };
}

export function create(contact) {
  return {
    type: 'CONTACT@CREATE',
    data: {
      contact,
      id: new Date(),
    }
  };
}

export function remove(id) {
  return {
    type: 'CONTACT@REMOVE',
    data: id,
  };
}
