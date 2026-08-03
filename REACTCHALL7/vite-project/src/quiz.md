1. In what way are React components meant to be "pure functions"
Ans.- Given the same props or state, the components will always return the same components, or URl


2. What is a "side effect" in React? What are some examples?
Ans.- Any code that affects or interacts with the outside system.
eg. local storage, API, websockets, DOM manipulation


3. What is NOT a "side effect" in React? Exmples?
Ans.- Anything that React is in charge of. 
-Maintaining state, keeping the UI in sync with data, rendering DOM elements 


4. When does React run your useEffect function? When does it Not run the effcet function?
Ans.- As soon as the components renders for the first time.
-ON every re-render of the component (assumning no dependencies array)
-Will not run the effect when the values of the dependencies in the array stay the same between renders.


5. How would you explain what the "dependices array" is?
Ans.- Second parameter to the useEffect function
-A way for React to know whether or not it shyould re-run the effect function.