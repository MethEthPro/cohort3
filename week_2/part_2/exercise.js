// Exercise: Create a Library System
// Problem Description:
// You are tasked with creating a simple library system that models different types of books and their properties. You need to:

const { title } = require("process");

// Create a base class called Book that has common properties and methods.
// Create two subclasses:
// PrintedBook: Inherits from Book and adds properties like pageCount.
// EBook: Inherits from Book and adds properties like fileSize.
// Implement methods to:
// Print a description of the book.
// Calculate the book's age based on its publishing year.
// In the case of PrintedBook, it should also calculate how much ink is needed based on the page count.
// Create objects of the PrintedBook and EBook subclasses and demonstrate polymorphism by calling their methods.
// Requirements:
// Class Book (Base Class)

// Properties:
// title (String)
// author (String)
// year (Number)
// Methods:
// getDescription(): Returns a string describing the book (e.g., "Book Title by Author").
// bookAge(): Returns the age of the book (current year minus year).
// Class PrintedBook (Subclass of Book)

// Additional Properties:
// pageCount (Number)
// Methods:
// inkRequired(): Returns an estimate of how much ink is needed based on the page count (1 unit of ink per page).
// Override getDescription(): Include the page count in the description (e.g., "Printed Book Title by Author, 300 pages").
// Class EBook (Subclass of Book)

// Additional Properties:
// fileSize (Number, in MB)
// Methods:
// Override getDescription(): Include the file size in the description (e.g., "EBook Title by Author, 15 MB").
// Demonstration:

// Create one instance of PrintedBook and one instance of EBook.
// Call the getDescription(), bookAge(), and inkRequired() methods on these objects.
// Print the results.
// Hints:
// Use inheritance to avoid code duplication (common properties and methods in the Book class).
// Make sure you override methods in the subclasses when necessary.
// Use the super() keyword to access properties and methods from the parent class in the subclasses.


class Book{
    constructor(title,author,year){
        this.title=title;
        this.author=author;
        this.year=year;
    }
    getDescription(){
        return `${this.title} by ${this.author}`;
    }
    bookAge(){
        const now = new Date();
        const curr_year = now.getFullYear();
        return curr_year-this.year;
    }
}

class PrintedBook extends Book{
    constructor(title,author,year,pageCount){
        super(title,author,year);
        this.pageCount=pageCount;
    }
    inkRequired(){
        return `${this.pageCount} units of ink is required`;
    }
    getDescription(){
        return `printed ${this.title} by ${this.author} in ${this.year},${this.pageCount} pages`;

    }
}

class EBook extends Book{
    constructor(title,author,year,fileSize){
        super(title,author,year);
        this.fileSize=fileSize;
    }
    getDescription(){
        return `EBook ${this.title} by ${this.author},${this.fileSize}MB`;
    }
    inkRequired(){
        return `since it is an ebook no ink required`;
    }

}

const my_printed_book = new PrintedBook("ALCHEMIST","Paulo Coelho",1988,200);
console.log(my_printed_book.getDescription());
console.log(my_printed_book.bookAge());
console.log(my_printed_book.inkRequired());
const my_ebook = new EBook("THE PILGRIMAGE","Paulo Coelho",1987,2);
console.log(my_ebook.getDescription());
console.log(my_ebook.bookAge());
console.log(my_ebook.inkRequired());