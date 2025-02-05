import { createRoot } from 'react-dom/client';
import { AppClass } from './AppClass';

createRoot(document.getElementById('root') as HTMLElement).render(
  <AppClass hasClock={true} />,
);
