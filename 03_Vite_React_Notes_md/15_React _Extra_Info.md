# Life Cycle Method 
## Link: https://blog.logrocket.com/react-lifecycle-methods-tutorial-examples/
- Mounting: 
    - useEffect(() => {}, []): 
    - This Hook is similar to componentDidMount in class components. The function inside useEffect runs after the component is first rendered
- Updating:
    -  useEffect(() => {}): 
    - If you omit the dependency array ([]), useEffect will run after every render (similar to componentDidUpdate)
- Unmounting:
    - useEffect(() => { return () => {} }): 
    - The function returned inside useEffect (the cleanup function) is equivalent to componentWillUnmount in class components and is used to clean up resources when the component unmounts or before it re-renders
    