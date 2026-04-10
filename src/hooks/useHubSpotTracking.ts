import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to track page views in HubSpot for Single Page Applications (SPA).
 */
const useHubSpotTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Access the HubSpot tracking queue
    const _hsq = (window as any)._hsq = (window as any)._hsq || [];
    
    // We use a small timeout to ensure the DOM title and other metadata 
    // are updated before HubSpot tracks the page view.
    const timer = setTimeout(() => {
      // 1. Set the path for the current "virtual" page view
      _hsq.push(['setPath', location.pathname + location.search]);
      
      // 2. Trigger the page view event
      _hsq.push(['trackPageView']);
      
      console.log(`[HubSpot] Tracked page view for: ${location.pathname}`);
    }, 100);

    return () => clearTimeout(timer);
  }, [location]);
};

export default useHubSpotTracking;
