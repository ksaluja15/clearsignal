//mathjax provider, use then when you need to show math components. Uses mathjax v2 because it was used on the original site
'use client';

import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

declare global {
  interface Window {
    MathJax?: {
      Hub: {
        Queue: (tasks: any[]) => void;
      };
    };
  }
}

export function MathJaxProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const configScript = document.createElement('script');
    configScript.type = 'text/x-mathjax-config';
    configScript.id = 'mathjax-v2-config';
    configScript.innerHTML = `
      MathJax.Hub.Config({
        tex2jax: {
          inlineMath: [['$','$'], ['\\\\(','\\\\)']],
          displayMath: [['$$','$$'], ['\\\\[','\\\\]']],
          processEscapes: true
        },
        TeX: {
          equationNumbers: {
            autoNumber: "AMS" // This is the key for numbering.
          }
        }
      });
    `;
    document.head.appendChild(configScript);

    const libraryScript = document.createElement('script');
    libraryScript.type = 'text/javascript';
    libraryScript.src = 'https://cdn.jsdelivr.net/npm/mathjax@2/MathJax.js?config=TeX-AMS_CHTML'; //gets lib from here
    libraryScript.async = true;
    libraryScript.id = 'mathjax-v2-script';
    document.head.appendChild(libraryScript);

    return () => {
      document.getElementById('mathjax-v2-config')?.remove();
      document.getElementById('mathjax-v2-script')?.remove();
    };
  }, []);

  useEffect(() => {
    const typeset = () => {
      if (window.MathJax?.Hub) {
        window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub]);
      }
    };

    const timer = setTimeout(typeset, 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
}