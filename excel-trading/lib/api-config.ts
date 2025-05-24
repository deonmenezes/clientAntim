/**
 * Configuration for API endpoints
 */

// Base URL for API requests
export const API_BASE_URL = "http://localhost:5000";

// Helper function to build complete API URLs
export const getApiUrl = (endpoint: string) => {
  // If the endpoint already starts with http:// or https://, return it as is
  if (endpoint.startsWith('http://') || endpoint.startsWith('https://')) {
    return endpoint;
  }
  
  // Make sure endpoint starts with a slash
  const formattedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  
  return `${API_BASE_URL}${formattedEndpoint}`;
};