import axios from 'axios';

// Check if we're in a browser environment
if (typeof window !== 'undefined') {
    window.axios = axios;
    window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    
    // Add error handling
    window.axios.interceptors.response.use(
        response => response,
        error => {
            console.error('Axios error:', error);
            return Promise.reject(error);
        }
    );
}
