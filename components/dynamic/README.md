# Dynamic components

**Dynamic / lazy components imported with `next/dynamic` need to have a default export.**

Since named exports are more ergonomic (to only name one benefit of named exports) this folder acts as re-export for the components that need to be imported dynamically i.E. `react-konva`.

**Read more:**

- https://reactjs.org/docs/code-splitting.html#named-exports
- https://github.com/konvajs/konva/issues/1458#issuecomment-1336116164
