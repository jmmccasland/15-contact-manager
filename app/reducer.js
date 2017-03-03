export default function(state, action) {
  switch (action.type) {
    case 'CONTACT@FIND_ALL':
      return {
        contacts: action.data,
      };
    case 'CONTACT@CREATE':
      return {
        contacts: [...state.contacts, action.data],
      };
    case 'CONTACT@REMOVE':
      return { contacts: state.contacts.filter(curr => curr.id !== action.id) };
    default:
      return state || { contacts: [] };
  }
}
