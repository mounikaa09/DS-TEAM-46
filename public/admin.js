async function fetchResponses() {
    const response = await fetch('/api/responses');
    const responses = await response.json();
    
    const tableBody = document.querySelector('#responseTable tbody');
    responses.forEach(res => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${res.username}</td>
            <td>${res.response}</td>
            <td>${JSON.stringify(res.evaluation)}</td>
        `;
        tableBody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', fetchResponses);
