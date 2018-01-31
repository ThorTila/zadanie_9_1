function getTriangleArea(a, h) {
  if (a < 0 || h < 0) {
    return 'Nieprawidlowe dane';
  } else {
    var wynik = a * h / 2;
    return wynik;
  }
}
console.log(getTriangleArea(10, 6));
var triangleArea1 = getTriangleArea(5, 9);
var triangleArea1 = getTriangleArea(2, 55);
var triangleArea1 = getTriangleArea(37, 69);
