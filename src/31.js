function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  // Avoid overflow by taking modulo of the difference between max and min
  if (max - min <= 1) {
    return (Math.random() * (max - min + 1)) | 0;
  }

  return Math.floor((min + Math.random() * ((max - min) / 2)) | 0);
}
