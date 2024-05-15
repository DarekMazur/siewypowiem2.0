'use client';

import type { ComponentProps } from 'react';
import { createContext, useState, useEffect } from 'react';

const MSWContext = createContext('');

type Props = Omit<ComponentProps<typeof MSWContext.Provider>, 'value'>;

export default function MSWConfig({ children }: Props) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
      import('@/mocks/').then(() => setTimeout(() => setLoaded(true), 500));
    } else {
      setLoaded(true);
    }
  }, []);

  return (
    <MSWContext.Provider value=''>
      {loaded ? children : null}
    </MSWContext.Provider>
  );
}
