function getMinMax(str) {
  const strArray = str
  .split(' ')
  .filter(str0 => Number(str0) )
  .map(str0 => Number(str0))
  .sort((a,b) => a - b);
  
  let result = {
    min:  strArray[0],
    max: strArray.at(-1)
  }
  return result;
}
