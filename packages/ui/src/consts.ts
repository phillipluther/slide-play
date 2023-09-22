export const SOCKET_SERVER = 'http://localhost:3000';

export const API_URL = new URL('/api', SOCKET_SERVER);
export const PREVIOUS_SLIDE_URL = new URL(`/api/previous`, SOCKET_SERVER);
export const NEXT_SLIDE_URL = new URL('/api/next', SOCKET_SERVER);
