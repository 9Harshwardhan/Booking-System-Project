// Example function to fetch and display users
async function fetchUsers() {
    try {
      const response = await fetch('http://localhost:3000/api/users');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const users = await response.json();
      displayUsers(users);
    } catch (error) {
      console.error('Error fetching users:', error.message);
      // Handle fetch error, show error message to user, etc.
    }
  }
  
  // Function to display users on the frontend
  function displayUsers(users) {
    const usersContainer = document.getElementById('users-container');
    usersContainer.innerHTML = ''; // Clear previous content
  
    users.forEach(user => {
      const userElement = document.createElement('div');
      userElement.classList.add('user-item');
      userElement.innerHTML = `
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <button class="edit-btn" data-user-id="${user.id}">Edit</button>
        <button class="delete-btn" data-user-id="${user.id}">Delete</button>
      `;
  
      // Event listener for edit button
      const editButton = userElement.querySelector('.edit-btn');
      editButton.addEventListener('click', () => {
        const userId = editButton.getAttribute('data-user-id');
        // Implement logic to edit user (e.g., redirect to edit page)
        console.log(`Edit user ID ${userId}`);
      });
  
      // Event listener for delete button
      const deleteButton = userElement.querySelector('.delete-btn');
      deleteButton.addEventListener('click', async () => {
        const userId = deleteButton.getAttribute('data-user-id');
        if (confirm(`Are you sure you want to delete user ID ${userId}?`)) {
          try {
            // Send request to delete user to backend
            const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
              method: 'DELETE'
            });
  
            if (!response.ok) {
              throw new Error('Failed to delete user');
            }
  
            // Optionally handle success message or refresh users list
            alert('User deleted successfully!');
            fetchUsers(); // Refresh users list after deletion
          } catch (error) {
            console.error('Error deleting user:', error.message);
            // Handle delete user error, show error message to user, etc.
          }
        }
      });
  
      usersContainer.appendChild(userElement);
    });
  }
  
  // Example usage: Fetch and display users when the page loads
  document.addEventListener('DOMContentLoaded', () => {
    fetchUsers();
  });
  