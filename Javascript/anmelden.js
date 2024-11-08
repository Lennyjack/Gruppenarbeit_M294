


const email = document.getElementById('email').value;
const password = document.getElementById('password').value;


const data = {
    email,
    password
};

// Server-Aufruf mit angepasstem API-Endpunkt
fetch('http://localhost:5000/api/registration', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(response => {
    if (response.ok) {
        document.getElementById('confirmationMessage').textContent = 
            `Vielen Dank, ${customerName}! Ihr Serviceauftrag wurde erfolgreich eingereicht. Abholdatum: ${pickupDate}`;
    } else {
        document.getElementById('confirmationMessage').textContent = 
            'Fehler beim Absenden. Bitte versuchen Sie es erneut.';
    }
})



if (email == ??? && password == ????)
    