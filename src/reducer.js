 // reducer должна быть чистой функцией и зависеть только от переданных в нее данных (state, action), в action могут быть добавлены разные элементы и тогда их можно использовать
 export default function reducer (state = 0, action) {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    case 'RND':
      return state + action.value;
    default:
      return state;
  }
}