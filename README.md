# Vite bug reproduction @babel/standalone

This is a reproduction of a bug in Vite when using @babel/standalone. Vite does not seem to be able to resolve the `@babel/standalone` package in development mode but it works in production mode.

## Steps to reproduce

1. Clone this repository
2. Run `npm install`
3. Run `npm run dev`
4. Open the browser console and you will see the following error:

```
Uncaught TypeError: babel is undefined
    setCounter counter.js:6
    setupCounter counter.js:11
```

## Expected behavior

The counter should be displayed in the browser and the compiled code should be displayed in the console.

## Build

Run `npm run build` and afterwards `npm run preview` to see the production build. There should be no errors in the console and the counter should be displayed in the browser.
