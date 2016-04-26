export default function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
     case 'ADD2': 
      return 10
    default:
      return state
  }
}
