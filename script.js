document.addEventListener("DOMContentLoaded", () => {
    const sendCardBtn = document.getElementById("sendCardBtn");
    const whatsappInput = document.getElementById("whatsappNumber");

    sendCardBtn.addEventListener("click", () => {
        let number = whatsappInput.value.replace(/\D/g, ''); // Remove non-numeric characters
        
        if (number.length < 10) {
            alert("Please enter a valid WhatsApp number.");
            return;
        }

        // Generate dynamic URL based on current domain
        const cardUrl = window.location.origin + window.location.pathname.replace('index.html', '') + "card.html?person=rohan";
        
        const message = `Hello 👋

Sharing the digital business card of Rohan Thombare from Insite Builders.

🏗️ Construction
📐 Design
🏠 Interior
🤝 Consultancy

View my digital business card:
${cardUrl}

Thank you,
Insite Builders`;

        const encodedMessage = encodeURIComponent(message);
        
        // Ensure standard formatting (91 + Number)
        if (!number.startsWith('91') && number.length === 10) {
            number = '91' + number;
        }

        const waUrl = `https://wa.me/${number}?text=${encodedMessage}`;
        
        // Open WhatsApp
        window.open(waUrl, "_blank");
        
        // Clear input after successful generation
        whatsappInput.value = '';
    });

    // Allow Enter key to trigger send
    whatsappInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendCardBtn.click();
        }
    });
});