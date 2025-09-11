function arrayIntersection(arrA, arrB) {
  const intersection = arrA.filter((value) => arrB.includes(value));
  if (intersection.length > 0) {
    return Array.from(intersection);
  }
  return [];
}

module.exports = arrayIntersection;
