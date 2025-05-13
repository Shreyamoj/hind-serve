
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create a root and render the app with a subtle initial animation
const rootElement = document.getElementById("root");
if (rootElement) {
  rootElement.classList.add("animate-fade-in");
  createRoot(rootElement).render(<App />);
}
