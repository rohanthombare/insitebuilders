document.addEventListener("DOMContentLoaded", () => {
    const sendCardBtn = document.getElementById("sendCardBtn");
    const whatsappInput = document.getElementById("whatsappNumber");

    sendCardBtn.addEventListener("click", () => {
        let number = whatsappInput.value.replace(/\D/g, ''); // Remove non-numeric characters
        
        if (number.length < 10) {
            alert("Please enter a valid WhatsApp number.");
            return;
        }

        // Generate dynamic URL based on current domain and path structure (supports GitHub Pages subpaths)
        const pathSegments = window.location.pathname.split('/');
        pathSegments.pop(); // remove current file name (e.g. index.html or empty)
        let basePath = window.location.origin + pathSegments.join('/');
        if (!basePath.endsWith('/')) basePath += '/';
        const cardUrl = basePath + "card.html?person=rohan";
        
        const message = `Hello 👋\n\nSharing the digital business card of Rohan Thombare from Insite Builders.\n\n🏗️ Construction\n📐 Design\n🏠 Interior\n🤝 Consultancy\n\nView my digital business card:\n${cardUrl}\n\nThank you,\nInsite Builders`;

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