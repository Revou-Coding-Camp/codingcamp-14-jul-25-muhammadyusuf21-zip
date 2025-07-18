// Jalankan ketika halaman sudah dimuat
window.onload = function () {
    showWelcomePopup();
};

// Fungsi untuk menampilkan popup dan menyapa user
function showWelcomePopup() {
    const userName = prompt("Please enter your name:");

    if (userName !== null && userName.trim() !== '') {
        document.getElementById('welcome-user').innerText = userName;
        console.log("User entered name:", userName);
    } else {
        document.getElementById('welcome-user').innerText = "Guest";
        console.log("User canceled or left empty.");
    }
}

// Fungsi validasi form
function validateForm() {
    const nameInput = document.getElementById('name-input');
    const messageOutput = document.getElementById('message-output');
    const name = nameInput.value.trim();

    if (name === '') {
        alert('Please enter your name.');
    } else {
        messageOutput.innerHTML = `Thank you, <strong>${name}</strong>, for your message!`;
        nameInput.value = '';
        console.log("Message submitted by:", name);
    }
}
