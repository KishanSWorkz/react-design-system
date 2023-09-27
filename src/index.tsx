import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app-root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <div>
      <h1>React Design System</h1>
    </div>
  </React.StrictMode>
);
