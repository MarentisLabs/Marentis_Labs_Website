import React from 'react';
import './index.css';
import { render } from 'react-dom';
import { App } from './App';
// Get the base URL from the document or default to "/"
// This helps with GitHub Pages deployment where the site might be in a subdirectory
const getBaseUrl = () => {
  // Extract the base URL from meta tag if available
  const baseUrlMeta = document.querySelector('meta[name="baseUrl"]');
  return baseUrlMeta ? baseUrlMeta.getAttribute('content') : '/';
};
// Pass the base URL to the App component
render(<App baseUrl={getBaseUrl()} />, document.getElementById('root'));