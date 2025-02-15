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
        instruments: ["piano", "violin", "synth", "cello", "organ", "guitar", "flute", "harp", "deep bass", "ethereal pad", "choir", "dulcimer", "timpani", "mandolin", "zither", "vibraphone", "horn", "clarinet", "sitar", "marimba", "oboe", "french horn", "bassoon", "bagpipes", "glockenspiel", "electric guitar", "bass guitar", "trumpet", "saxophone", "bass clarinet", "accordion", "drum kit", "conga", "tambourine", "xylophone", "gong", "steel drum", "didgeridoo", "harpsichord", "cymbals", "flugal horn", "music box", "banjo", "trombone", "dulcimer", "synthesizer", "vocoder", "electric piano", "timpani drum", "double bass", "flute choir", "sitara", "saxophone quartet", "vibraphone", "glass harmonica", "vocal hum", "drum pad", "santoor", "guitar solo", "pad synth", "shakuhachi", "taiko", "waterphone", "voice choir", "tar", "tubular bells", "snares", "harp", "sitar strings", "mandolin solo", "banjo", "keyboard", "timpani roll", "bodhran", "steel guitar", "cello solo", "wind chimes", "baritone sax", "pipa", "electric bass", "guitar riff", "harp arpeggio", "pianoforte", "glass marimba", "vocal breath"],
        moods: ["melancholic", "mystical", "haunting", "deep", "ambient", "ethereal", "dark", "dreamy", "tense", "whimsical", "ominous", "brooding", "tragic", "introspective", "noir", "hypnotic", "brooding", "lunar", "gloomy", "fantastic", "suspenseful", "foreboding", "ancient", "forgotten", "eerie", "intense", "captivating", "hypnotic", "epic", "bewitched", "mournful", "oppressive", "enchanting", "mournful", "otherworldly", "gothic", "heavy", "intense", "spine-chilling", "desolate", "wild", "sinister", "primal", "gloom", "unsettling", "sorrowful", "serpentine", "jarring", "apocalyptic", "grief-stricken", "terrifying", "suffocating", "chaotic", "paranoid", "mysterious", "forgotten", "low-key", "shadows", "brooding", "delirious", "subdued", "abysmal", "dangerous", "disturbing", "sad", "dreadful", "macabre", "weary", "cloaked", "grim", "eerie", "turbulent", "frenzied", "unbearable", "dystopian", "nightmarish", "arcane", "savage", "darkwave", "dungeon", "gloomy", "pensive"],
        atmospheres: ["ancient castle", "foggy graveyard", "dark forest", "abandoned church", "midnight ruins", "cursed village", "shadowy abyss", "haunted mansion", "worn-out temple", "dungeon corridor", "forgotten crypt", "grim dungeon", "cobweb-filled chamber", "empty cathedral", "eerie swamp", "stone labyrinth", "moonlit cave", "icy peak", "underground chamber", "bleak marsh", "deserted village", "ruined fortress", "blood-soaked battlefield", "spooky crypt", "desolate plain", "creepy asylum", "sickening valley", "blackened forest", "frozen wasteland", "echoing halls", "dark alley", "forlorn wasteland", "abandoned castle", "midnight graveyard", "chamber of secrets", "forgotten chamber", "soulless town", "decaying village", "forgotten ruins", "misty swamp", "skeleton-filled vault", "ominous sea cave", "endless abyss", "sinister dungeon", "rusting machinery", "weeping graveyard", "burned-out town", "rusted warehouse", "lonesome tower", "lost kingdom", "broken ruins", "abandoned mansion", "crumbling city", "scorched desert", "underground lair", "ruined citadel", "frozen castle", "sunken ship", "sunset ruins", "eclipsed sky", "broken bridge", "ghostly estate", "rotten land", "darkened cavern", "gruesome battlefield", "faint echoing footsteps", "dismal tundra", "wretched alley", "hollow well", "forgotten chapel", "frozen crypt", "gloomy ruins", "forsaken village", "sunken valley", "forgotten throne room"],
        sounds: ["whispering voices", "distant thunder", "rustling leaves", "soft rain", "distant bells", "howling wind", "crackling fire", "gravel underfoot", "creaking floorboards", "shuffling footsteps", "crackling wood", "scratching sound", "howl of wolves", "moaning wind", "cawing crows", "distant screams", "whistling wind", "slow breathing", "rattling chains", "heavy breathing", "rushing water", "creaking door", "echoing footsteps", "rustling fabric", "distant bells ringing", "clattering stones", "blood-curdling scream", "thudding heartbeats", "flapping wings", "snapping twigs", "haunting violin", "rattling glass", "creaking hinges", "ominous chanting", "howling animals", "ticking clock", "cracking ice", "dripping water", "thunderous roar", "sighing wind", "soft footsteps", "moaning wall", "raging storm", "footsteps in snow", "grating sound", "screeching owl", "gurgling water", "tapping window", "groaning metal", "chanting voices", "pulsing drums", "whistling arrows", "wind howling through trees", "thundering hooves", "deep growl", "smashing glass", "whispers in the dark", "drumming rain", "snarling dogs", "soft fluttering", "pounding hooves", "scraping nails", "violent wind", "thudding object", "sizzling lightning", "singing birds", "whirring sound", "rustling paper", "roaring wind", "grinding gears", "guttural growl", "ominous hum", "clanging chains", "squealing metal", "slow footsteps", "strange ticking", "low growl", "gravel scraping", "distant train", "howl of wind", "fire crackling", "rushing footsteps", "cawing raven", "rumbling thunder"],
    },
    medieval: {
        instruments: ["lute", "harpsichord", "flute", "drum", "bagpipe", "violin", "mandolin", "dulcimer", "hurdy-gurdy", "rebec", "pipe", "shawm", "fiddle", "psaltery", "zither", "dulcimer", "flute", "clarinet", "guitar", "harp", "organ", "hurdy-gurdy", "timpani", "basso continuo", "sackbut", "vielle", "synthesizer", "tambourine", "drum kit", "viol", "horn", "trombones", "contrabass", "bas d'arme", "bassoon", "oboe", "fife", "hornpipe", "viola da gamba", "cymbals", "spinet", "pipe organ", "saxhorn", "transverse flute", "glockenspiel", "crumhorn", "lire", "crumhorn", "pedal harp", "salterio", "wagner tuba", "gittern", "shofar", "bass clarinet", "gralla", "loud trumpet", "brass bell", "clapper", "sistrum", "shakuhachi", "rebec", "bansuri", "wooden pipe", "violin solo", "double-bass", "fanfar", "bagpipes", "sistrum", "djembe", "cowbell", "drumstick", "french horn", "clarinet", "saxophone", "chime", "bells", "acoustic guitar", "sitar", "accordion", "mandolin", "sitar", "banjo", "shawm", "flute"],
        moods: ["bold", "mournful", "tragic", "jovial", "heroic", "epic", "regal", "serene", "charming", "idyllic", "majestic", "wistful", "romantic", "gallant", "hopeful", "elegant", "victorious", "bitter", "cheerful", "sentimental", "wistful", "victorious", "inspiring", "drama", "reflective", "romantic", "gracious", "heartfelt", "glistening", "festive", "lively", "gallant", "sad", "glistening", "triumphant", "quiet", "euphoric", "calm", "soothing", "soothing", "majestic", "serene", "gracious", "introspective", "happy", "quaint", "romantic", "glistening", "reflective", "moving", "humorous", "sweet", "exalted", "somber", "serene", "mournful", "celebratory", "joyful", "vibrant", "whimsical", "calming", "dreamlike", "elevated", "hopeful", "playful", "nostalgic", "uplifting", "heartwarming", "upbeat", "reflective", "whimsical"],
        atmospheres: ["medieval village", "forest clearing", "moonlit castle", "old market", "tavern ambiance", "crowded marketplace", "royal palace", "ancient ruins", "mountaintop castle", "distant monastery", "stone chapel", "medieval battlefield", "sunlit orchard", "medieval hall", "moonlit court", "golden courtyard", "quiet abbey", "king's feast", "gloomy dungeon", "rustic village", "nobleman's manor", "distant church bells", "sacred grove", "forest path", "hidden chapel", "twin kingdoms", "heraldic banners", "wooden fortress", "pristine meadow", "forest grove", "medieval banquet", "stone towers", "distant mountains", "alchemist's lair", "peaceful hearth", "echoing corridors", "medieval inn", "lush vineyard", "hidden crypt", "misty mountain", "stone road", "distant bell tower", "quiet woods", "sacred temple", "golden cathedral", "wedding procession", "stone bridge", "royal court", "tournament grounds", "spring garden", "gloomy crypt", "sunny meadow", "moonlit path", "enchanted ruins", "cloistered courtyard", "healing spring", "forest hermitage", "rolling hills", "ancient library", "guildhall", "secret garden", "open plains", "holy chapel", "crumbling keep", "gilded throne", "bustling town square", "hidden stairway", "dungeon crypt", "shadowed chapel", "knight's barracks", "ancient monastery", "wild moors", "ruined battlements", "echoing cavern", "distant bell rings", "fiery forge", "village square", "sacred temple", "broken stonework", "sunlit courtyard", "mead hall"],
        sounds: ["town chatter", "clinking glasses", "rustling leaves", "horse galloping", "distant trumpets", "barrel rolling", "footsteps on stone", "wooden door creaking", "laughter", "church bells ringing", "children playing", "flute playing", "drum rolls", "chanting", "crows cawing", "fire crackling", "wind rustling", "glass shattering", "sword clashing", "footsteps on gravel", "muffled voices", "soft harp playing", "wind through trees", "soft violin", "loud horn", "sword in scabbard", "distant thunder", "hammer on anvil", "bagpipes playing", "woodwind ensemble", "quiet whispers", "drumming", "slow march", "bells tolling", "guitar strumming", "footsteps on cobblestone", "cannon firing", "fiddle playing", "horse hooves", "crackling firewood", "roaring bonfire", "war drum", "king's speech", "footsteps on wood", "horses neighing", "door opening", "footsteps on earth", "fire crackle", "drum cadence", "chanting crowd", "distant horn", "birdsong", "lute playing", "spinning wheel", "stone scraping", "tavern music", "beating drum", "flute melody", "clashing armor", "swishing blades", "crowd cheers", "fortress bell", "tavern chatter", "rooster crowing", "wind whistling", "stone grinding", "rustling hay", "horse snorting", "river flowing", "wind through grass", "cheerful jig", "low laughter", "flute solo", "distant battle cries", "rattling chain", "bell ringing", "rusty hinges"]
    },
    japanese: {
        instruments: ["koto", "shamisen", "taiko", "shakuhachi", "bamboo flute", "biwa", "sanshin", "shō", "shamisen", "kugo", "nagauta", "sho", "shakuhachi flute", "nakanokō", "kabuki drum", "zither", "taiko drum", "koto string", "shamisen strings", "nagai", "shamisen pluck", "shinobue", "bamboo flute", "hohner", "guitar", "shamisen bow", "koto tune", "plucked string", "chord progression", "vocal hum", "teoro", "shinobue wind", "fugue", "bamboo string", "jocho", "shakuhachi breath", "biwa fret", "hohner string", "koto string pluck", "cherry blossom", "sakura tune", "fuji", "kugue wind", "softer shamisen", "marimba", "harp", "strumming string", "soft voice", "chanting", "koto", "shamisen pluck", "taiko bass", "traditional wind", "dizi", "guitar solo", "kyoto", "timpani", "traditional", "solo shamisen", "hohner lead", "fugue", "shinobue", "shamisen beat"],
        moods: ["serene", "peaceful", "calming", "elegant", "reflective", "tranquil", "romantic", "subdued", "nostalgic", "dreamy", "mysterious", "ethereal", "regal", "elegiac", "whimsical", "harmonious", "ancient", "ceremonial", "sacred", "breathtaking", "soothing", "poignant", "introspective", "spiritual", "spacious", "meditative", "subtle", "tender", "delicate", "contemplative", "majestic", "peaceful", "serene", "ancient", "flourishing", "playful", "quaint", "refined", "melancholic", "wistful", "elegant", "romantic", "humble", "optimistic", "wistful", "softly poetic", "genteel", "regal", "reflective", "gentle", "delicate", "soothing", "peaceful", "melodic", "sympathetic", "romantic", "dreamlike", "floating", "wistful", "unhurried", "serenity"],
        atmospheres: ["mountain temple", "sakura garden", "zen garden", "kimonos", "sunset temple", "tea house", "night in Kyoto", "mountain peak", "bamboo forest", "temple courtyard", "river bank", "misty hillside", "quiet room", "serene lake", "ancient shrine", "meadow blossoms", "traditional street", "ancient castle", "empty pagoda", "cherry blossom grove", "sacred grove", "winter courtyard", "spring river", "night in Edo", "cloud-covered mountain", "bamboo forest", "rain on the roof", "meditative temple", "mountain stream", "quiet pond", "traditional festival", "blossom rain", "ceremonial room", "dark bamboo forest", "calming sunset", "ancient forest", "misty dawn", "peaceful night", "serene village", "guitar resting", "mountain fog", "peaceful orchard", "serene meadow", "empty temple", "quiet stone courtyard", "temple steps", "shrine bells", "pagoda bell", "shimmering pond", "cherry blossoms falling", "silent mountain", "morning mist", "snowfall in temple", "quiet temple steps", "early spring morning", "floating lanterns", "lonely lake", "bamboo hut", "mysterious river", "snowy mountain", "night on the temple steps", "walking in the rain", "calm sea", "night lanterns", "ancient ruins", "distant water flow"],
        sounds: ["wind through bamboo", "distant temple bell", "river running", "soft footsteps", "falling leaves", "gentle rain", "shamisen pluck", "flute melody", "bamboo flute", "shakuhachi sound", "taiko drum", "distant chanting", "temple bells", "distant birds", "soft bell chimes", "mountain breeze", "sakura rustling", "bamboo scraping", "shamisen strum", "wind blowing", "footsteps on stone", "wind chimes", "distant music", "light wind", "gentle rustle", "water flowing", "crunch of gravel", "sword unsheathing", "shakuhachi breath", "gentle strumming", "wind in trees", "rain falling", "bamboo swaying", "soft drum", "clapping hands", "murmuring voices", "distant gong", "chanting wind", "whispering leaves", "guitar strumming", "shamisen hum", "water drip", "guitar plucking", "distant melody", "koto plucking", "bamboo sound", "slow heartbeat", "floating sound", "tea cup clinking", "shuffling feet", "soft violin", "fireplace crackle", "distant flutes"]
    }
};

function generatePrompt() {
    const theme = document.getElementById("theme").value;
    const selectedTheme = themes[theme];

    // Gerando elementos aleatórios
    const instrument = getRandomElements(selectedTheme.instruments, 3, 5).join(", ");
    const mood = getRandomElements(selectedTheme.moods, 1, 3).join(", ");
    const atmosphere = getRandomElements(selectedTheme.atmospheres, 1, 3).join(", ");
    const sound = getRandomElements(selectedTheme.sounds, 3, 5).join(", ");

    // Gerando o ritmo aleatório entre 60, 70 e 80 bpm
    const bpm = getRandomElements([60, 70, 80], 1, 1)[0];

    // Criando o prompt
    let prompt = `You are composing music in a ${theme} setting. The rhythm of the composition is ${bpm} bpm. Instruments like ${instrument} create a ${mood} mood. The atmosphere is ${atmosphere}, and the soundscape includes ${sound}.`;

    // Truncando o prompt se necessário
    prompt = truncateText(prompt, 250);

    // Exibindo o prompt no elemento de texto
    document.getElementById("prompt-box").innerText = prompt;
}
function copyPrompt() {
    const promptText = document.getElementById("prompt-box").innerText;
    if (promptText !== "Your prompt will appear here...") {
        // Copiar para a área de transferência
        navigator.clipboard.writeText(promptText);

        // Mostrar a notificação
        showNotification();
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
