import React from 'react';
import Counter from './Counter';

type Route = {
  path: string;
  element: React.ReactNode;
};

const Routes: Route[] = [
  {
    path: '',
    element: (<>Home</>)
  },
  {
    path: 'counter',
    element: (<Counter />)
  },
  {
    path: 'createlist',
    element: (<>Create List</>),
  },
  {
    path: 'signup',
    element: (<>Sign UP</>),
  },
];

export default Routes;