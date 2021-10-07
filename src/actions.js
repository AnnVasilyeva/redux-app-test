// функция action creator, создает action кторый мы передаем в dispatch
export const inc = () => ({type: 'INC'});
export const dec = () => ({type: 'DEC'});
export const rnd = () => {
  return {type: 'RND', value: Math.floor(Math.random() * 10)}
};