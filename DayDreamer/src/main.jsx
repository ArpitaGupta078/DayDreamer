
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import First from './components/router/First.jsx';
import ImageGenerator from './components/ImageGenerator.jsx';
import Pricing from './components/Pricing.jsx';
import CuteFAQ from './components/CuteFAQ.jsx';
import FeatureHighlights from './components/FeatureHighlights.jsx';
import LearnMore from './components/LearnMore.jsx';

// Optional layout wrapper, or replace <First /> with a proper component
// Create First.jsx if not already present, or change to a layout component like <AppLayout />

const router = createBrowserRouter([
  {
    path: '/',
    element: <First/>,
    children: [
      { path: '/', element: <App /> },
      { path: '/img-gen', element: <ImageGenerator /> },
      { path: '/features', element: <FeatureHighlights /> },
      { path: '/pricing', element: <Pricing /> },
      { path: 'faq', element: <CuteFAQ /> },
      { path: '/learn-more', element: <LearnMore /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
