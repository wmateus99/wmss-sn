function validateForm() {
    var correctAnswers = {
        q1: "1",
        q2: "2",
        q3: "3",
        q4: "4",
        q5: "5",
        q6: "6",
        q7: "7",
        q8: "8",
        q9: "9",
        q10: "10"
    };

    var form = document.getElementById('quizForm');
    var isValid = true;
    var successMessage = document.getElementById('successMessage');

    for (var i = 1; i <= 10; i++) {
        var answer = form['q' + i].value.trim();
        var errorElement = document.getElementById('errorQ' + i);
        
        if (answer.toLowerCase() !== correctAnswers['q' + i].toLowerCase()) {
            errorElement.style.display = 'inline';
            isValid = false;
        } else {
            errorElement.style.display = 'none';
        }
    }

    if (isValid) {
        successMessage.style.display = 'block';
        setTimeout(function() {
            window.location.href = 'kwhegdwy3uer523e8o123ec2y13ofeb47qwrec854y9vi4uetvg6o48tc336o2rcg23ogcr72w3r5svfdcnagogicygr352re52yg36554rc2bo6fdwtuifeduv4ys3aif3rrf2c2wi3qrfwco4frc73fr2co83rdtfksevcfkajsegvfqwcketufrw3ofoucr327rgcvsf23xr34tc3w5hb45wby45by45wkgjshhredcwegr1ex1xe.html'; // Redirecionar para a página de sucesso
        }, 2000);
    }

    return false; // Impede o envio do formulário para manter a página no lugar
}