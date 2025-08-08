import { createRoot } from 'react-dom/client'
import './index.css'
import { StrictMode } from 'react';
import { Root } from './configs/root.config';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root/>
  </StrictMode>
);
