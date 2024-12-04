import { signUp, login, fetchBlogPosts } from './api.js';

// Handle sign-up
document.getElementById('signupForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    try {
        const user = await signUp({ username, email, password });
        alert('Sign-up successful!');
        console.log('User:', user);
    } catch (err) {
        alert('Sign-up failed!');
    }
});

// Handle login
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const user = await login({ email, password });
        alert('Login successful!');
        console.log('User:', user);

        // Display dashboard after login
        document.getElementById('dashboard').style.display = 'block';
    } catch (err) {
        alert('Login failed!');
    }
});

// Fetch and display blog posts
document.getElementById('createPostBtn').addEventListener('click', async () => {
    const blogPosts = await fetchBlogPosts();
    const blogPostsList = document.getElementById('blogPosts');
    blogPostsList.innerHTML = '';
    blogPosts.forEach(post => {
        const li = document.createElement('li');
        li.textContent = post.title;
        blogPostsList.appendChild(li);
    });
});
