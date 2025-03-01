function getRandomElements(arr, min, max) {
    const count = Math.floor(Math.random() * (max - min + 1)) + min;
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function truncateText(text, maxLength) {
    return text.length > maxLength ? text.substring(0, maxLength - 3) + "..." : text;
}

function clearPrompt() {
    document.getElementById("prompt-box").innerText = "Your prompt will appear here...";
}

const themes = {
    dark_fantasy: {
        instruments: ["piano", "violin", "synth", "cello", "organ", "guitar", "flute", "harp"],
        moods: ["melancholic", "mystical", "haunting", "dark", "ethereal", "ominous"],
        atmospheres: ["ancient castle", "foggy graveyard", "dark forest", "abandoned church"],
        sounds: ["whispering voices", "distant thunder", "rustling leaves", "howling wind"],
        style: "dark, atmospheric, slow"
    },
    medieval: {
        instruments: ["lute", "harpsichord", "flute", "drum", "bagpipe"],
        moods: ["bold", "mournful", "heroic", "epic", "regal"],
        atmospheres: ["medieval village", "forest clearing", "moonlit castle", "old market"],
        sounds: ["town chatter", "clinking glasses", "horse galloping", "distant trumpets"],
        style: "skyrim, slow, village"
    },
    japanese: {
        instruments: ["koto", "shamisen", "taiko", "shakuhachi"],
        moods: ["serene", "peaceful", "calming", "elegant"],
        atmospheres: ["mountain temple", "sakura garden", "zen garden", "tea house"],
        sounds: ["wind through bamboo", "distant temple bell", "river running", "soft footsteps"],
        style: "danisogen, slow, lo-fi"
    }
};

// Sincronizar campo numérico e slider
document.getElementById("bpm").addEventListener("input", function() {
    document.getElementById("bpm-slider").value = this.value;
    document.getElementById("bpm-value").innerText = this.value;
});

document.getElementById("bpm-slider").addEventListener("input", function() {
    document.getElementById("bpm").value = this.value;
    document.getElementById("bpm-value").innerText = this.value;
});

function updateThemeStyle() {
    const theme = document.getElementById("theme").value;
    const body = document.body;

    // Remover classes de tema anteriores
    body.classList.remove("dark-fantasy", "medieval", "japanese");

    // Adicionar classe de tema atual
    body.classList.add(theme.replace("_", "-"));
}

function generatePrompt() {
    const theme = document.getElementById("theme").value;
    const selectedTheme = themes[theme];

    if (!selectedTheme) {
        console.error("Theme not found!");
        return;
    }

    // Obter o BPM escolhido pelo usuário
    const bpm = parseInt(document.getElementById("bpm").value, 10);

    // Verificar se o BPM é válido
    if (isNaN(bpm) || bpm < 40 || bpm > 200) {
        alert("Please enter a valid BPM between 40 and 200.");
        return;
    }

    // Gerando elementos aleatórios
    const instrument = getRandomElements(selectedTheme.instruments, 1, 2).join(", ");
    const mood = getRandomElements(selectedTheme.moods, 1, 1).join(", ");
    const atmosphere = getRandomElements(selectedTheme.atmospheres, 1, 1).join(", ");
    const sound = getRandomElements(selectedTheme.sounds, 1, 2).join(", ");

    // Criando o prompt
    const prompt = `Compose ${theme} music at ${bpm} bpm. Use ${instrument} for a ${mood} mood. Set in ${atmosphere}. Style: ${selectedTheme.style}. Sounds: ${sound}.`;

    // Exibindo o prompt no elemento de texto
    document.getElementById("prompt-box").innerText = prompt;
}

function copyPrompt() {
    const promptText = document.getElementById("prompt-box").innerText;
    if (promptText !== "Your prompt will appear here...") {
        navigator.clipboard.writeText(promptText)
            .then(() => showNotification())
            .catch((err) => console.error("Failed to copy text: ", err));
    }
}

function showNotification() {
    const notification = document.getElementById("notification");
    notification.style.display = "block";
    notification.style.opacity = "1";
    setTimeout(() => {
        notification.style.opacity = "0";
        setTimeout(() => notification.style.display = "none", 500);
    }, 2000);
}

// Inicializar estilo do tema
updateThemeStyle();
