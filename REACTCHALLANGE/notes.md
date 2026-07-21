1. What does the `.map()` array method do?
Ans.- Returns a new array. Whatever gets returned frm the callout function prvided is placed at the same index in the new array.
Usually we take the items from the original array and modify them in some array.

2. What do we usually use `.map()` for in React?
Ans.- Convert an array of raw data into an array of JSX elements that can be displayed on the page.

3. Critical thinking: why is using `.map()` better than just creatin the components manually by typing them out?
Ans.- 
1. We dont hace the data ahead of time when we're building the app, so we simply can't manually
type them out.
2. It makes our code more "self-sustaining" - not requiring additional changes to the code whenever the data changes.