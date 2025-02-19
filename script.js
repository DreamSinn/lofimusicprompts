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
        sounds: ["whispering voices", "distant thunder", "rustling leaves", "howling wind"]
    },
    medieval: {
        instruments: ["lute", "harpsichord", "flute", "drum", "bagpipe"],
        moods: ["bold", "mournful", "heroic", "epic", "regal"],
        atmospheres: ["medieval village", "forest clearing", "moonlit castle", "old market"],
        sounds: ["town chatter", "clinking glasses", "horse galloping", "distant trumpets"]
    },
    japanese: {
        instruments: ["koto", "shamisen", "taiko", "shakuhachi"],
        moods: ["serene", "peaceful", "calming", "elegant"],
        atmospheres: ["mountain temple", "sakura garden", "zen garden", "tea house"],
        sounds: ["wind through bamboo", "distant temple bell", "river running", "soft footsteps"]
    },
    danisogen: {
        instruments: ["modular synth", "distorted guitar", "field recordings", "granular synth", "tape loops"],
        moods: ["experimental", "dreamy", "chaotic", "hypnotic", "otherworldly"],
        atmospheres: ["abandoned factory", "alien landscape", "digital void", "surreal dreamscape"],
        sounds: ["glitchy textures", "white noise", "metallic echoes", "unintelligible whispers"]
    }
};

function generatePrompt() {
    const theme = document.getElementById("theme").value;
    const selectedTheme = themes[theme];

    if (!selectedTheme) {
        console.error("Theme not found!");
        return;
    }

    // Gerando elementos aleatórios
    const instrument = getRandomElements(selectedTheme.instruments, 1, 2).join(", ");
    const mood = getRandomElements(selectedTheme.moods, 1, 1).join(", ");
    const atmosphere = getRandomElements(selectedTheme.atmospheres, 1, 1).join(", ");
    const sound = getRandomElements(selectedTheme.sounds, 1, 2).join(", ");

    // Definindo BPMs (varia conforme o tema)
    let bpmOptions;
    if (theme === "danisogen") {
        bpmOptions = [60, 70, 80, 90, 100]; // BPMs mais variados para o estilo Danisogen
    } else {
        bpmOptions = [40, 50, 60, 70, 80]; // BPMs lentos para outros temas
    }
    const bpm = getRandomElements(bpmOptions, 1, 1)[0];

    // Criando o prompt
    let prompt;
    if (theme === "danisogen") {
        prompt = `Create a ${theme} soundscape at ${bpm} bpm. Use ${instrument} to evoke a ${mood} feeling. style of Denisogen ${atmosphere} with ${sound} in the background.`;
    } else {
        prompt = `Compose ${theme} music at ${bpm} bpm. Use ${instrument} for a ${mood} mood. Set in ${atmosphere} style of Denisogen ${sound}.`;
    }

    // Truncando o prompt se necessário
    prompt = truncateText(prompt, 200);

    // Exibindo o prompt no elemento de texto
    document.getElementById("prompt-box").innerText = prompt;
}

function copyPrompt() {
    const promptText = document.getElementById("prompt-box").innerText;
    if (promptText !== "Your prompt will appear here...") {
        // Copiar para a área de transferência
        navigator.clipboard.writeText(promptText)
            .then(() => {
                // Mostrar a notificação
                showNotification();
            })
            .catch((err) => {
                console.error("Failed to copy text: ", err);
            });
    }
}

function showNotification() {
    const notification = document.getElementById("notification");
    
    // Mostrar a notificação
    notification.style.display = "block";
    notification.style.opacity = "1";

    // Ocultar a notificação após 2 segundos
    setTimeout(() => {
        notification.style.opacity = "0";
        setTimeout(() => {
            notification.style.display = "none";
        }, 500);
    }, 2000);
}
