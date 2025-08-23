export function getAuthToken() {
    const token = localStorage.getItem('token');
    const expiration = localStorage.getItem('expiration');
    
    const remainingTime = new Date(expiration).getTime() - new Date().getTime();
    
    if (remainingTime <= 60000) {
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
        localStorage.removeItem('userId');
        return null;
    }
    
    return token;
    }