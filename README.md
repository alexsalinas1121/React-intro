# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Assignment

This thing that you got going is called React. It is a `JS` Library. Within this project we are also using something called TypeScript(`TS`). TS is a microsoft library to add strong typing like in c#(private `float` speed). React also has something called `JSX`. This is JS that has special React features. Finally, you will see in this code a bunch of files with `TSX`. This is just JSX files that require strong typing.

When you look at your file tree there is a bunch of stuff. At this time you should disregard most of it. Focus in on what is being rendered, which if you looked at the rendered page you will see that it referrers you to `src/App.tsx`. Notice how there is a function that has JS `and` HTML. Well that is JSX

```jsx
function App() {
  return ( //js return
    <div className="App"> <!--html stuff inside the return-->
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyButton />
      </header>
    </div>
  );
}
```

You can add a bunch of HTML, CSS, JS here and it will render. However, we don't want this file to get all cluttered. We want to build a bunch of smaller components and then call them here to be rendered.

Lets have a look at our first component.

```jsx
<a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
>
    Learn React
</a>
<MyButton /> <!--HERE IS THE CUSTOM COMPONENT-->
</header>
```

When you look at the above code the `<MyButton />` should jump out at you. Judging by the render it makes a button that says `I'm a button`, but where is the code for that? Look at the top of the document and it will give you a hint.

```jsx
import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from "./components/MyButton"
```

If you follow the location of MyButton you will see its code. You can also click my button and hit `f12`. Here is the code that makes the button

```jsx
import React from 'react'

const MyButton: React.FC = () => {
    return (
      <button>I'm a button</button>
    );
  }

export default MyButton
```

Why is the useful?

## Task 1

Get two more buttons to render. Do not rewrite the MyButton code, just call the `<MyButton />` tag 2 more times inside App.tsx.

## Task 2 

Inside the components folder create the file MyButton.CSS. Inside that file create a class called blue that colors the button blue. Connect the CSS to MyButton in the same way it is done in App.tsx
```jsx
import './App.css';
```

Put the CSS on the button in a similar way shown below
```jsx
<a
    className="App-link" <-------------------------------
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
>
```

....there is more to do but I can't make it tonight. We will try to get it tomorrow in person or you work on Unity.