export default function counter(state = 'I0001', action) {
  console.log(action);
  switch (action.type) {
    case 'change':
      return action.id
    default:
      return state
  }
}
