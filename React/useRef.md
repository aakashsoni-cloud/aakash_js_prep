## DEFINITION

**useRef** is a Hook that provides a **way to persist a value across renders without causing the component to re-render**.

It can be used for directly interacting with DOM elements, storing values, or accessing previous state/props.

# UseCase

1.  Accessing DOM Elements

```js
        const inputRef = useRef(null);

        const handleFocus = () => {
        inputRef.current.focus(); // Access the DOM node and call focus()
        };
```

2.  Storing Mutable Data

```js
        const count = useRef(0); // Initialize mutable value

        const increment = () => {
        count.current += 1; // Update the value
        console.log(`Count is: ${count.current}`); // Doesn't trigger re-render
        // once the component rerender it update the value of count
        };
```

3.  Keeping Previous State or Props

```js
        const [count, setCount] = useState(0);
        const prevCount = useRef();

        useEffect(() => {
        prevCount.current = count; // Update ref after render
        });
```