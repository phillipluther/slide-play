export const SOCKET_SERVER = 'ws://localhost:8001';

export const APP_HOST = 'http://localhost:3000/';
export const API_HOST = new URL('api/', APP_HOST);

export const PREVIOUS_SLIDE_URL = new URL(`previous`, API_HOST);
export const NEXT_SLIDE_URL = new URL('next', API_HOST);
