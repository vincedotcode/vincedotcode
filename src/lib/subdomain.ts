// src/utils/subdomain.ts
export const getValidSubdomain = (host?: string | null): string | null => {
    let subdomain: string | null = null;
  
    if (!host && typeof window !== 'undefined') {
      // On the client side, use the window object to get the host
      host = window.location.host;
    }
  
    if (host && host.includes('.')) {
      const candidate = host.split('.')[0];
      if (candidate && candidate !== 'localhost') {
        // If the candidate is valid, set it as the subdomain
        subdomain = candidate;
      }
    }
  
    return subdomain;
  };
  