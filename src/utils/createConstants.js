import assign from 'object-assign';

export default function createConstants(...constants){
  return constants.reduce((acc, constant) => {
    return assign(memo, {
      [constant]: constant
    });
  }, {});
}
