export default (state = {}, action) => {
 switch (action.type) {
  case 'QUERIES':
   return {
    result: action.payload
   }
  default:
   return state
 }
}