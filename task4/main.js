import { Rectangle, Square, Circle } from './shapes.js';

const shapes = [
  new Rectangle(10, 5),
  new Square(6),
  new Circle(3)
];

shapes.forEach(shape => console.log(shape.toString()));
