# learnRedux
Simple Vite project to practice redux

How Redux works

1. The App component is wrapped in a Provider component which is fed the redux store which contains your state and a link to your reducer.  
    - App component is contained in main.jsx
    - The store is contained in store.js    
2. Slices are created which contain your reducers and your selector elements.
    - Slices are capitalSlice.js, and debtSlice.js
3. useDispatch and useSelector functions are used to select, and modify state.  
