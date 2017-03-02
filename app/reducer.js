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
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact._id !== action._id),
      };
    default:
      return state || { contacts: [] };
  }
}
