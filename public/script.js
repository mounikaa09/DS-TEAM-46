document.getElementById('registerForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    const result = await response.text();
    alert(result);
});

document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('token', token);
        document.getElementById('auth').style.display = 'none';
        document.getElementById('submission-form').style.display = 'block';
    } else {
        alert('Login failed');
    }
});

document.getElementById('answerForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const response = document.getElementById('response').value;

    const token = localStorage.getItem('token');
    const result = await fetch('/api/evaluate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ response }),
    });

    const evaluation = await result.json();
    document.getElementById('evaluationResults').innerText = JSON.stringify(evaluation, null, 2);
    document.getElementById('results').style.display = 'block';
});
