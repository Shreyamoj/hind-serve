
// JWT token utilities for authentication

/**
 * Token storage with optional extended expiration when "Remember Me" is checked
 */
interface TokenData {
  accessToken: string;
  refreshToken?: string;
  expiresAt: number;
}

/**
 * Save authentication tokens to storage with expiration
 * When rememberMe is true, we use localStorage (persistent)
 * Otherwise, we use sessionStorage (cleared when browser closes)
 */
export const saveTokens = (
  accessToken: string, 
  refreshToken: string | undefined = undefined, 
  rememberMe: boolean = false
): void => {
  // Calculate expiration time - for demo we'll set 1 hour for session, 30 days for remember me
  const expiresAt = Date.now() + (rememberMe ? 30 * 24 * 60 * 60 * 1000 : 60 * 60 * 1000);
  
  const tokenData: TokenData = {
    accessToken,
    refreshToken,
    expiresAt
  };

  // Store in the appropriate storage based on "remember me"
  const storage = rememberMe ? localStorage : sessionStorage;
  storage.setItem('hindserve_auth', JSON.stringify(tokenData));
  storage.setItem('rememberUser', rememberMe.toString());
}

/**
 * Get stored tokens
 */
export const getTokens = (): TokenData | null => {
  // First try localStorage (for remembered users)
  let tokenData = localStorage.getItem('hindserve_auth');
  if (!tokenData) {
    // Then try sessionStorage
    tokenData = sessionStorage.getItem('hindserve_auth');
  }
  
  if (!tokenData) {
    return null;
  }
  
  try {
    const parsedData = JSON.parse(tokenData) as TokenData;
    
    // Check if token is expired
    if (parsedData.expiresAt < Date.now()) {
      // Token expired - clear it and return null
      clearTokens();
      return null;
    }
    
    return parsedData;
  } catch (e) {
    clearTokens();
    return null;
  }
}

/**
 * Get access token if valid
 */
export const getAccessToken = (): string | null => {
  const tokens = getTokens();
  return tokens?.accessToken || null;
}

/**
 * Check if user is authenticated with a valid token
 */
export const isAuthenticated = (): boolean => {
  return getAccessToken() !== null;
}

/**
 * Clear all authentication tokens
 */
export const clearTokens = (): void => {
  localStorage.removeItem('hindserve_auth');
  localStorage.removeItem('rememberUser');
  sessionStorage.removeItem('hindserve_auth');
  sessionStorage.removeItem('rememberUser');
}

/**
 * Log user out by clearing tokens
 */
export const logout = (): void => {
  clearTokens();
  // In production app, you might want to redirect to login here
  // or have this function take a callback for post-logout actions
}
