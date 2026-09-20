document.addEventListener("DOMContentLoaded", () => {
    // Current dynamic URL
    const currentUrl = window.location.href;
    
    // WHATSAPP DIRECT MESSAGE BUTTON
    const waDirectBtn = document.getElementById('waDirectBtn');
    waDirectBtn.addEventListener('click', () => {
        const message = encodeURIComponent("Hello Rohan, I viewed your digital business card and would like to connect.");
        window.open(`https://wa.me/919518953593?text=${message}`, '_blank');
    });

    // SHARE API LOGIC
    const shareCardBtn = document.getElementById('shareCardBtn');
    shareCardBtn.addEventListener('click', async () => {
        const shareData = {
            title: 'Rohan Thombare - Insite Builders',
            text: 'Digital business card of Rohan Thombare, Insite Builders.',
            url: currentUrl
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.log('Error sharing:', err);
            }
        } else {
            // Fallback: Copy to clipboard
            navigator.clipboard.writeText(currentUrl).then(() => {
                alert("Card link copied to clipboard!");
            });
        }
    });

    // DYNAMIC VCF GENERATION
    const saveContactBtn = document.getElementById('saveContactBtn');
    saveContactBtn.addEventListener('click', () => {
        const vcfData = `BEGIN:VCARD
VERSION:3.0
FN:Rohan Thombare
ORG:Insite Builders
TITLE:Construction | Design | Interior | Consultant
TEL;TYPE=WORK,VOICE:+919518953593
URL:${currentUrl}
END:VCARD`;

        const blob = new Blob([vcfData], { type: 'text/vcard' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.setAttribute('hidden', '');
        a.setAttribute('href', url);
        a.setAttribute('download', 'Rohan_Thombare.vcf');
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });

    // QR CODE REVEAL & GENERATION
    const showQrBtn = document.getElementById('showQrBtn');
    const qrContainer = document.getElementById('qrContainer');
    let qrGenerated = false;

    showQrBtn.addEventListener('click', () => {
        qrContainer.classList.toggle('hidden');
        
        if (!qrContainer.classList.contains('hidden')) {
            showQrBtn.textContent = 'HIDE QR CODE';
            // Generate QR Code only once
            if (!qrGenerated && typeof QRCode !== 'undefined') {
                new QRCode(document.getElementById("qrcode"), {
                    text: currentUrl,
                    width: 150,
                    height: 150,
                    colorDark : "#121212",
                    colorLight : "#ffffff",
                    correctLevel : QRCode.CorrectLevel.H
                });
                qrGenerated = true;
            }
        } else {
            showQrBtn.textContent = 'SHOW QR CODE';
        }
    });
});