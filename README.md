##### *Upcoming Changes
- Redux Toolkit (Added Soon)

# react-redux-example

<!-- Home message -->

Example how to use Redux with React

Please Checkout the website : [https://run-your-command.github.io/react-redux-example/](https://run-your-command.github.io/react-redux-example/)

<!-- Contents -->

# Content

- [Overview](#overview)
- [Action](#action)
- [Reducer](#reducer)
- [Store](#store)
- [Connect React with Redux](#connect-react-with-redux)
- [Author](#author)
<!-- Contents -->

<!-- overview -->

# Overview

> Using NPM

```bash
  npm i redux react-redux
```

> Using Yarn

```bash
  yarn add redux react-redux
```

> You can easily understand [Redux](https://redux.js.org/introduction/getting-started) ↓

<img src="https://raw.githubusercontent.com/hirishu10/my-assets/main/react-redux-example/bth.gif" width="100%" height="100%" />

#### If you have to add redux with your existing project then you have to create some file please refer the [REdux](https://redux.js.org/introduction/getting-started) DOC and see the below example to understand the same

- [Action](#action) `what to do?`
- [Reducer](#reducer) `how to do?`
- [Store](#store) `centralised store`
- [Connect React with Redux](#connect-react-with-redux) `main function to connect redux with react`

<!-- overview -->

<!-- Getting Started -->

# Action

<!-- action -->

First, We have to create action for the reducer means `what to do?`

So create file call actions and store the function which take the action type **↓**

<img src="https://raw.githubusercontent.com/hirishu10/my-assets/main/react-redux-example/screenshot-redux/actions.png" width="50%" height="50%" />

> Increment ↓

<img src="https://raw.githubusercontent.com/hirishu10/my-assets/main/react-redux-example/plus.png" width="80%" height="50%" />

```jsx
export const incNumber = () => {
  return {
    type: "INCREMENT",
  };
};
```

> Decrement ↓

<img src="https://raw.githubusercontent.com/hirishu10/my-assets/main/react-redux-example/minus.png" width="80%" height="50%" />

```jsx
export const decNumber = () => {
  return {
    type: "DECREMENT",
  };
};
```

> Clear ↓

<img src="https://raw.githubusercontent.com/hirishu10/my-assets/main/react-redux-example/clear.png" width="80%" height="50%" />

```jsx
export const clearNumber = () => {
  return {
    type: "CLEAR_ALL",
  };
};
```

<!--  action -->
<!-- Reducer -->

# Reducer

We created our actions now we have to create our reducer which tell `how to do?`

So create one file for the reducer with the help of `Switch` or `If` initialise with the initial store and assign the action type **↓**

<img src="https://raw.githubusercontent.com/hirishu10/my-assets/main/react-redux-example/screenshot-redux/reducer_withStore.png" width="60%" height="60%" />

> Main Reducer

For different cases you may create many reducer

But you have to create one main file which call main reducer or anything and combined all reducer you create **↓**

<img src="https://raw.githubusercontent.com/hirishu10/my-assets/main/react-redux-example/screenshot-redux/main_reducer.png" width="60%" height="60%" />

```jsx
import actionCombined from "./Reducer";
import { combineReducers } from "redux";

const mainReducer = combineReducers({ actionCombined }); // ← add all reducer

export default mainReducer;
```

<!-- Reducer -->

<!-- store  -->

# Store

Now you have create your action and reducer it’s time to create `centralised store` and connect with your main reducer **↓**

<img src="https://raw.githubusercontent.com/hirishu10/my-assets/main/react-redux-example/screenshot-redux/store.png" width="60%" height="60%" />

```jsx
import mainReducer from "./reducer";
import { createStore } from "redux";

const store = createStore(mainReducer);
```

<!-- store  -->

<!-- licesnce  -->

# Connect React with Redux

Finally you have successfully created your `action` `reducer` and `store` now it’s time to connect your _**redux**_ with your react project.

But first you have to use two important hooks which helps to get the Store state and assign the action **↓**

- useSelector
- useDispatch

```jsx
import { useSelector, useDispatch } from "react-redux";
```

> useSelector

Using useSelector you can call current state example below **↓**

```jsx
const getState = useSelector((state) => state.actionCombined);

console.log(getState); // ← print the state and check

// Example ↓
<h1>Hi, There {getName}!</h1>;
```

> useDispatch

Using useDispatch you can dispatch your action **↓**

```jsx
const dispatch = useDispatch();

// Example ↓

<button
  className="box-add"
  onClick={() => {
    dispatch(incNumber()); // ← here we add the action INCREMENT
  }}
>
  +
</button>;
```

<img src="https://raw.githubusercontent.com/hirishu10/my-assets/main/react-redux-example/screenshot-redux/main_function.png" width="100%" height="100%" />

## Provider..

#### Wow we can say now we have successfully connect the [redux](https://redux.js.org/introduction/getting-started) with our [react](https://reactjs.org/docs/getting-started.html) project but wait a second 🤔

#### Did we assign the store to our main component 🧐

#### No. we have to provide our store to `index.js` using `<Provider>` and then we can easily access the store where we want **↓**

<img src="https://raw.githubusercontent.com/hirishu10/my-assets/main/react-redux-example/screenshot-redux/importstore_index.png" width="80%" height="80%" />

> Code Snippet

```jsx
import store from "./lib/Store";
import { Provider } from "react-redux";

// ↓ here we easily share the store with our main component using Provider.....

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

<!-- licesnce  -->
<!-- author  -->

# Author

#### Thank You All 🙏🏻

Made with 🖤 by

**Author** : [Rishu Chowdhary](https://github.com/hirishu10)

**Email** : hi.10rishu@gmail.com

<!-- author  -->
