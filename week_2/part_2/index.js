class Rectangle{
    constructor(length,breadth,paintColor="red"){
        this.length=length;
        this.breadth=breadth;
        this.paintColor=paintColor;
      //   all three of there are the properties of our object
    }

   //  below are the 2 methods(function) of our object
    area(){
        const area = this.length*this.breadth;
        return area
    }
    paint(){
        console.log(`painting with color ${this.paintColor}`);
      //   this is how we can pass varibles in string
      // just like f-string in python
    }

    static mySTATICmethod(){
      console.log("I AM A STATIC METHOD, I BELONG TO A CLASS");
      console.log("AND NOT TO ITS INSTANCES");
      console.log("THUS I CAN BE CALLED DIRECTLY ON THE CLASS");
      console.log("AND CALLING ME ON OBJECTS WILL GIVE ERROR");
    }
}
// in our constructor we have given a default value to the 
// paintColor , so if it is not given when a new object is created
// then it will be set to default of red


// this is how we create a new object,i.e a new isntance of our class

const myRec=new Rectangle(12,10,"blue");
const area=myRec.area();
console.log(area);
console.log(myRec.length);
myRec.paint();

const myRec2= new Rectangle(10,5);
myRec2.paint();

Rectangle.mySTATICmethod();
// calling a static method on our class
