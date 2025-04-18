function generateCode() {
    // Generate a random 6-character alphanumeric code (uppercase)
    let code = Math.random().toString(36).substring(2, 8).toUpperCase();

    // Display the invite code
    document.getElementById("inviteCode").innerText = "Your Invite Code: " + code;
    document.getElementById("inviteCode").style.display = "block";
    document.getElementById("copyButton").style.display = "inline-block";

    // Generate QR Code
    generateQRCode(code);

    // Update social media share links
    updateSocialLinks(code);

    // Show social sharing options
    document.getElementById("socialShare").style.display = "block";
}

function copyCode() {
    let text = document.getElementById("inviteCode").innerText.replace("Your Invite Code: ", "");
    
    // Copy to clipboard
    navigator.clipboard.writeText(text).then(() => {
        alert("Invite code copied: " + text);
    }).catch(err => {
        console.error("Could not copy text: ", err);
    });
}

function generateQRCode(code) {
    let qrUrl = `https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=${encodeURIComponent(code)}&choe=UTF-8`;
    
    // Set QR code image source
    document.getElementById("qrCode").src = qrUrl;
    document.getElementById("qrContainer").style.display = "block";
}

function updateSocialLinks(code) {
    let shareText = encodeURIComponent("Join using this invite code: " + code);
    
    document.getElementById("whatsappShare").href = `https://api.whatsapp.com/send?text=${shareText}`;
    document.getElementById("twitterShare").href = `https://twitter.com/intent/tweet?text=${shareText}`;
    document.getElementById("facebookShare").href = `https://www.facebook.com/sharer/sharer.php?u=${shareText}`;
    document.getElementById("emailShare").href = `mailto:?subject=Join Us&body=${shareText}`;
}
