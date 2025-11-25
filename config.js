const config = {
    API_KEY: 'sk-ClVT68dcd0ff672b87776',
    PLANT_OF_DAY_ID: (() => {
        // Get current date in YYYYMMDD format
        const today = new Date();
        const dateString = today.getFullYear().toString() + 
                          (today.getMonth() + 1).toString().padStart(2, '0') + 
                          today.getDate().toString().padStart(2, '0');
        
        // Convert date string to a number and use it as a seed
        let seed = parseInt(dateString);
        
        // Use a larger multiplier to get better distribution
        seed = seed * 1234567;
        
        // Use modulo to get a number between 0 and 3000, then add 1
        const randomNum = (seed % 2999) + 1;
        
        return randomNum;
    })(),
    
    // Google API credentials
    GOOGLE_CLIENT_ID: '',
    GOOGLE_API_KEY: '',
    GOOGLE_DISCOVERY_DOC: 'https://www.googleapis.com/discovery/v1/apis/tasks/v1/rest',
    GOOGLE_SCOPES: 'https://www.googleapis.com/auth/tasks'
};
