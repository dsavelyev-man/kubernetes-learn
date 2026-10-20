import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
  return (
    <main className="card">
      <span className="eyebrow">Your React app is ready</span>
      <h1>Build something great.</h1>
      <p>Edit <code>src/main.tsx</code> to get started.</p>
      <a href="https://react.dev" target="_blank" rel="noreferrer">Explore React <span aria-hidden="true">↗</span></a>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);