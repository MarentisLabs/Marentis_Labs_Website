import './index.css';
import { createRoot } from 'react-dom/client';
import { App } from './App';
// Get the base URL from the document or default to "/"
// This helps with GitHub Pages deployment where the site might be in a subdirectory
const getBaseUrl = () => {
  // Extract the base URL from meta tag if available
  const baseUrlMeta = document.querySelector('meta[name="baseUrl"]');
  return baseUrlMeta?.getAttribute('content') || '/';
};
// Pass the base URL to the App component
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App baseUrl={getBaseUrl()} />);
}