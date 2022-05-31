function trace(array) {
  return array.reduce((sum, row, index) => sum + row[index], 0);
}
