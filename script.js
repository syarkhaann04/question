const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionBox = document.getElementById("questionBox");
const resultBox = document.getElementById("resultBox");

// Logika agar tombol 'No' lari saat didekati mouse
noBtn.addEventListener("click", () => {
    const x = Math.random() * 200 - 100; // Gerak acak sumbu X
    const y = Math.random() * 200 - 100; // Gerak acak sumbu Y
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Logika saat tombol 'Yes' diklik
yesBtn.addEventListener("click", () => {
    questionBox.style.display = "none"; // Sembunyikan pertanyaan
    resultBox.style.display = "flex";   // Tampilkan hasil
});
