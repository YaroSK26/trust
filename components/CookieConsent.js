"use client"
import { useEffect } from 'react';

const CookieConsent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = "cookieyes";
    script.type = "text/javascript";
    script.src = "https://cdn-cookieyes.com/client_data/0a62e24c3ffdcc1e3e7c1446/script.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById('cookieyes');
      if (existingScript) document.body.removeChild(existingScript);
    };
  }, []);

  return null;
};

export default CookieConsent;
