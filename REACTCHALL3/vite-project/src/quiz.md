1. You have 2 option for what you can pass in to a
state setter function (e.g. `setCount`). What are they?
Ans. 
1. Pass the new version of state that we want to replace with the new version of state.
2. Pass a callback function. Must return what we want the new value of state to be. Will receive the old version of state as a parameter so we can use it to help determine what we want the new value of state to be.


2. When would you want to pass the first option {from answer above} to the state setter function?
Ans. Whenever we dont really care about (or need) the old value, we simple want to set a new value.


3. When would you want to pass the second option (from answer above) to the state setter function?
Ans. Whenever we do care about the previous value in state and we need it to help us determine what the new value should be.
