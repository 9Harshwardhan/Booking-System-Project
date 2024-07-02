// Example ApiService.js for handling HTTP requests to backend APIs
class ApiService {
    // Perform a GET request
    async get(endpoint) {
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return await response.json();
      } catch (error) {
        console.error(`Error fetching data from ${endpoint}:`, error.message);
        throw error;
      }
    }
  
    // Perform a POST request
    async post(endpoint, data) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        if (!response.ok) {
          throw new Error('Failed to perform POST request');
        }
        return await response.json();
      } catch (error) {
        console.error(`Error performing POST request to ${endpoint}:`, error.message);
        throw error;
      }
    }
  
    // Perform a PUT request
    async put(endpoint, data) {
      try {
        const response = await fetch(endpoint, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        if (!response.ok) {
          throw new Error('Failed to perform PUT request');
        }
        return await response.json();
      } catch (error) {
        console.error(`Error performing PUT request to ${endpoint}:`, error.message);
        throw error;
      }
    }
  
    // Perform a DELETE request
    async delete(endpoint) {
      try {
        const response = await fetch(endpoint, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Failed to perform DELETE request');
        }
        return await response.json();
      } catch (error) {
        console.error(`Error performing DELETE request to ${endpoint}:`, error.message);
        throw error;
      }
    }
  }
  
  export default new ApiService();
  