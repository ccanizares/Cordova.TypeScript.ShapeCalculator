module AreaCalculator {
    "use strict";    

    export class Circle implements IShape {
        protected radius: number;

        constructor(radius: number) {
            this.radius = radius;
        }

        Area() {
            return this.radius * Math.PI;
        }
    }
}