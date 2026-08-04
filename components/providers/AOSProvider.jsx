'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Config invariata rispetto a quella usata finora nei layout (default e sanita):
// stessa resa visiva, ma centralizzata in un unico posto invece di essere
// duplicata in ogni layout.
const AOSProvider = ({ children }) => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  }, []);

  return <>{children}</>;
};

export default AOSProvider;
