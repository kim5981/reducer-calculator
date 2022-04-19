# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code executes for each step.
- The user presses the 1 button.
- addOne is called on click which was imported from the action.js file
- addOne adds 1 to the current state of total (not total itself)
- React detects a change of state and reflects that change to the DOM (in Total Display)
...

* TotalDisplay shows the total plus 1.
