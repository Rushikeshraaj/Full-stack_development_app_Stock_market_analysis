# Week 6: Advanced Hooks (useContext / useReducer)

## 1. Learning Objectives
- Share global state using React Context.
- Manage complex state transitions with `useReducer`.
- Avoid prop drilling in a growing application.

## 2. Tasks Performed
1. Created `MarketContext` to hold the watchlist and dispatch function.
2. Wrapped the app with `MarketProvider`.
3. Moved add/remove watchlist logic into a reducer.
4. Used context in Markets and Watchlist components without prop drilling.
5. Compared `useState` and `useReducer` for shared state management.

## 3. Tools & Technologies
- React `useContext`
- React `useReducer`
- Context API

## 4. Code Implementation
The implementation is in `src/context/MarketContext.jsx`. The reducer supports `ADD` and `REMOVE` actions. `MarketProvider` wraps the app in `src/App.jsx`. The Markets page can add stocks and the Watchlist page can remove them.

## 5. How to Test
1. Run `npm install`.
2. Run `npm run dev`.
3. Open Markets and click **Add to Watchlist**.
4. Open Watchlist to confirm the stock appears.
5. Click **Remove** to remove it.

## 6. Challenges Faced
- Deciding which state should be global and which should remain local.
- Keeping reducer functions predictable and pure.

## 7. Solutions Applied
- Shared watchlist data through Context.
- Used clear `ADD` and `REMOVE` action types.

## 8. Learning Outcomes
The application now uses Context and `useReducer` to manage shared watchlist state and avoid prop drilling.

## 9. Weekly Reflection
Using Context with `useReducer` makes watchlist updates easier to manage across multiple components as the project grows.
