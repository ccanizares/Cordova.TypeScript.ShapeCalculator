module AreaCalculator{
    "use strict";

    export class Calculator implements IShape {
        protected shapes: Array<IShape>;

        constructor() {
            this.shapes = new Array<IShape>();
        }

        AddShape(shape: IShape) {
            this.shapes.push(shape);
        }

        Area() {
            debugger;
            var area: number = 0;
            this.shapes.forEach(function (shape) {
                area += shape.Area();
            });

            return area;
        }
    }
}