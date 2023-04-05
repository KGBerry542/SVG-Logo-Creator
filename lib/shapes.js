// shape
class Shape {
    constructor() {
      this.color = "black";
    }
  
    setColor(color) {
      this.color = color;
    }
  
    getColor() {
      return this.color;
    }
  }
  
  // triangle
  class Triangle extends Shape {
    constructor(base, height) {
      super();
      this.base = base;
      this.height = height;
      this.type = "Triangle";
    }
  
    getArea() {
      return 0.5 * this.base * this.height;
    }
  }
  
  // circle
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
      this.type = "Circle";
    }
  
    getArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }
  
  // square
  class Square extends Shape {
    constructor(side) {
      super();
      this.side = side;
      this.type = "Square";
    }
  
    getArea() {
      return Math.pow(this.side, 2);
    }
  }
  
  module.exports = { Shape, Triangle, Circle, Square };
  