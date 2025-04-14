# useEffect

## Syntax
    ```js
    useEffect(() => {}, [])
    ```
- called just before when the component has mounted on the DOM
- Initially called on mounting of component
- Called if there is any change in dependency
- Used to unMounted the timer, any side effects


# useLayoutEffect

## Syntax
    ```js
    useLayoutEffect(() => {}, [])
    ```
- Fires before the browser repaints the screen.
- Called before the useEffect Hook