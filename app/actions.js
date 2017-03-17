export function findAll(contacts) {
  return {
    type: 'CONTACT@FIND_ALL',
    data: contacts,
  };
}

export function create(contact) {
  return {
    type: 'CONTACT@CREATE',
    data: { ...contact, id: (new Date()).toString() }
  };
}

export function remove(id) {
  return {
    type: 'CONTACT@REMOVE',
    id,
  };
}
