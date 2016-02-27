module AreaCalculator {
    "use strict";

    export class Square implements IShape {
        protected Height: number;

        constructor(Height: number) {
            this.Height = Height;
        }

        Area() {
            return this.Height * this.Height;
        }
    }
}