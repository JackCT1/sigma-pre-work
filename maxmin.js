const returnMinAndMax = (array) => {
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array.length; j++) {
      if (array[i] < array[j]) {
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }
  const minElement = array[0];
  const maxElement = array[array.length - 1];
  return [minElement, maxElement];
};
