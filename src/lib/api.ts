
import { getAccessToken, clearTokens } from './auth';

// Base API URL - should be environment variable in production
const API_BASE_URL = 'https://api.hindserve.com/api/v1'; // Replace with your actual API URL

/**
 * Options for API requests
 */
interface RequestOptions extends RequestInit {
  authorized?: boolean;
  requiresAuth?: boolean;
}

/**
 * Make an API request with authentication if needed
 */
export async function apiRequest<T = any>(
  endpoint: string, 
  options: RequestOptions = {}
): Promise<T> {
  const { authorized = true, ...fetchOptions } = options;
  
  // Set up headers
  const headers = new Headers(fetchOptions.headers || {});
  headers.set('Content-Type', 'application/json');
  
  // Add authorization header if needed and we have a token
  if (authorized) {
    const token = getAccessToken();
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    } else if (options.requiresAuth) {
      // If the endpoint requires authentication but we have no token,
      // throw an error or redirect to login
      throw new Error('Authentication required');
    }
  }
  
  const url = `${API_BASE_URL}${endpoint}`;
  
  try {
    const response = await fetch(url, {
      ...fetchOptions,
      headers
    });
    
    // Check for unauthorized response - could trigger a token refresh here
    if (response.status === 401) {
      clearTokens();
      // In a real app, you might want to trigger a refresh token flow here
      // or redirect to login
      throw new Error('Session expired');
    }
    
    // Parse JSON response
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'API request failed');
    }
    
    return data as T;
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
}

/**
 * Login API call
 */
interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  }
}

interface LoginRequest {
  email: string;
  password: string;
}

export const loginUser = async (credentials: LoginRequest): Promise<LoginResponse> => {
  // In a real app, this would make a request to your backend login endpoint
  // For now, we'll simulate a successful response
  
  // Simulate network latency
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // This is just a simulation - in production, this would be a real API call
  // return apiRequest<LoginResponse>('/auth/login', {
  //   method: 'POST',
  //   body: JSON.stringify(credentials),
  //   authorized: false
  // });
  
  // Simulated successful response
  if (credentials.email && credentials.password) {
    return {
      accessToken: 'mock-jwt-token-' + Math.random().toString(36).substring(2, 15),
      refreshToken: 'mock-refresh-token-' + Math.random().toString(36).substring(2, 15),
      user: {
        id: '123',
        name: 'Demo User',
        email: credentials.email,
        role: 'customer'
      }
    };
  }
  
  throw new Error('Invalid credentials');
}
