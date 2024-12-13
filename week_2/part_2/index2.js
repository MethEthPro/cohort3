// we understand get and set
class Example {
    constructor(value) {
        this._value = value; // Using a convention to name the internal property
    }

    // Getter
    get value() {
        return this._value;
    }

    // Setter
    set value(newValue) {
        if (newValue < 0) {
            console.log("Value cannot be negative.");
        } else {
            this._value = newValue;
        }
    }
}

// Example usage
const example = new Example(10);
console.log(example.value); // Calls the getter, Output: 10

example.value = 20;         // Calls the setter
console.log(example.value); // Output: 20

example.value = -5;         // Output: Value cannot be negative.
console.log(example.value); // Output: 20 (unchanged)
