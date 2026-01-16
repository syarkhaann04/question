
    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");
    const questionBox = document.getElementById("questionBox");
    const resultBox = document.getElementById("resultBox");

    noBtn.addEventListener("mouseover", () => {
        const x = Math.random() * 200 - 100;
        const y = Math.random() * 100 - 50;
        noBtn.style.transform = `translate(${x}px, ${y}px)`;
    });

    yesBtn.addEventListener("click", () => {
        questionBox.style.display = "none";
        resultBox.style.display = "flex";
    });
