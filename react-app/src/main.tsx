import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  return (
    <div>
      <div>react-app</div>
      <main className="card">
        <a href="/nestjs-api">nestjs-api</a>
        <a href="/nextjs-app">nextjs-app</a>
        <a href="/rust-axum-api">rust-axum-api</a>
        <a href="/rust-axum-service">rust-axum-service</a>
      </main>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
