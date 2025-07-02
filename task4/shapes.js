class Shape {
  constructor(name) {
    this.name = name;
  }

  getArea() {
    throw new Error('getArea() must be implemented in subclass');
  }

  getPerimeter() {
    throw new Error('getPerimeter() must be implemented in subclass');
  }

  toString() {
    return `${this.name} - Area: ${this.getArea().toFixed(2)}, Perimeter: ${this.getPerimeter().toFixed(2)}`;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super('Rectangle');
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

class Square extends Shape {
  constructor(side) {
    super('Square');
    this.side = side;
  }

  getArea() {
    return this.side ** 2;
  }

  getPerimeter() {
    return 4 * this.side;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super('Circle');
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

export { Shape, Rectangle, Square, Circle };
