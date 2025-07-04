NOTION NOTES --- https://petal-estimate-4e9.notion.site/React-Part-1-1177dfd1073580069172fc54e33929c0

Notes:

1. Starting a react project locally:
    - There are various ways to bootstrap a react project locally. Vite is the most widely used one today. Code- npm create vite@latest

2. Components:
    - In React, components are the building blocks of the user interface. They allow you to split the UI into independent, reusable pieces that can be thought of as custom, self-contained HTML elements.

3. useState Hook:
    - The useState hook is one of the fundamental React hooks, used to manage state in functional components. 
    - It allows a component to have and update internal data that can influence how the UI is rendered.
    -whenver the value of state variable changes, react re-renders the component that uses that state variable
    - Syntax:
        const [state, setState] = useState(initialValue);
        
        - Parameters:
            - initialValue: The initial value of the state variable. It can be a string, number, boolean, object, array, or even null.
            - state: The current state value.
            - setState: A function to update the state. When called, it triggers a re-render of the component.

4. Tracking ee-renders: 
    - Tracking re-renders in a React component helps developers identify unnecessary renders, optimize performance, and understand when and why a component is updating. Here’s an explanation of why re-renders occur, how to track them, and strategies to reduce unnecessary re-renders.

5. useEffect Hook: 
    - Before we understand useEffect , let’s understand what are Side effects.

    - Side effects:
    Side effects are operations that interact with the outside world or have effects beyond the component's rendering. Examples include:
        i.Fetching data from an API.
        ii. Modifying the DOM manually.
        iii. Subscribing to events (like WebSocket connections, timers, or browser events).
        iv. Starting a clock
    - These are called side effects because they don't just compute output based on the input—they affect things outside the component itself.


    - Problem in running side effects in React components:
        - If you try to introduce side effects directly in the rendering logic of a component (in the return statement or before it), React would run that code every time the component renders. This can lead to:
            i. Unnecessary or duplicated effects (like multiple API calls).
            ii. Inconsistent behavior (side effects might happen before rendering finishes).
            iii. Performance issues (side effects could block rendering or cause excessive re-rendering).
    - How useEffect Manages Side Effects:
        - The useEffect hook lets you perform side effects in functional components in a safe, predictable way:
            - The useEffect hook allows you to perform side effects in function components. Side effects include data fetching, subscriptions, and manually changing the DOM. It ensures the side effect runs at the right time in the component's lifecycle.

6. Props:
    - In React, props (short for "properties") are a way to pass data from a parent component to a child component. Props are immutable from the perspective of the receiving component, meaning the child component cannot modify them directly. They allow components to be reusable and dynamic.
    - When to Use Props?
        - When you want to pass data from a parent to a child component.
        - When you need a stateless component that renders based on input values (props).
        - For reusable components: Different props can make a component behave differently.

7. Conditional rendering: 
    - Conditional rendering in React allows you to render different components or elements based on certain conditions. 
    - This is similar to using conditional statements in JavaScript, such as if, else, and the ternary operator. Conditional rendering is a powerful feature that helps you create dynamic and responsive user interfaces.

    somthing like 
    {(time!= undefined) ? some html:some other html or null}

    so if no time is given in the props then there would be some other rendering or nothing is rendered

    another example

    import React, { useState } from 'react';

    const ToggleMessage = () => {
        const [isVisible, setIsVisible] = useState(false);

        return (
            <div>
                <button onClick={() => setIsVisible(!isVisible)}>
                    Toggle Message
                </button>
                {isVisible && <p>This message is conditionally rendered!</p>}
            </div>
        );
    };


