import React from 'react';

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
    path: 'signup',
    element: (<>Sign UP</>),
  },
  {
    path: 'createlist',
    element: (<>Create List</>),
  },
];

export default Routes;