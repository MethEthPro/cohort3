// we try to learn inheritance 


// this is our parent class , which we will inherit in our child class
class Shape{
    constructor(color){
        this.color=color;
    }
    area(){
        throw new Error("the area method must be implemented in the subclass");

    }
    paintColor(){
        console.log(`painting with the color ${this.color}`);
    }
    getDescription(){
        return `A shape with color ${this.color}`;
    }
}

// this rectangle child class inherits from the shape class
class Rectangle extends Shape{
    constructor(length,breadth,color){
        super(color);
        this.length=length;
        this.breadth=breadth;
    }
    area(){
        return this.length* this.breadth;
    }
    getDescription(){
        return `A rectangle with color${this.color} and area ${this.area()}`;
    }

}

class Circle extends Shape{
    constructor(radius,color){
        super(color);
        this.radius=radius;
    }
    area(){
        return Math.PI*this.radius*this.radius;
    }
    getDescription(){
        return `A circle with color ${this.color} and area ${this.area()}`;
    }
}
// here we create an object from the shape class
const my_shape = new Shape("red");
my_shape.paintColor();
console.log(my_shape.getDescription());
//my_shape.area();   //this will throw an error 


// here we create an object from the rectangle class
// the rectangle class inherits the shape class
// we can use the properties and methods of the parent class too
const my_rec_1=new Rectangle(12,10,"blue");
console.log(my_rec_1.length,my_rec_1.breadth,my_rec_1.color);
console.log(my_rec_1.getDescription());
console.log(my_rec_1.area());
my_rec_1.paintColor();



const my_circ_1=new Circle(12,"red");
console.log(my_circ_1.radius,my_circ_1.color);
console.log(my_circ_1.getDescription());
console.log(my_circ_1.area());
my_circ_1.paintColor();