
const drumSounds = ["kick", "snare", "hihat", "clap"];

const drumPattern = {};

drumSounds.forEach(sound => {
    drumPattern[sound] = Array(16).fill(false);
});

let currentStep = 0;
let isPlaying = false;
let timer = null;

function createSequencer() {
    document.querySelectorAll(".steps").forEach(row => {
        const sound = row.dataset.sound;

        for (let i = 0; i < 16; i++) {
            const step = document.createElement("button");

            step.className = "step";
            step.dataset.index = i;

            step.addEventListener("click", () => {
                drumPattern[sound][i] = !drumPattern[sound][i];

                step.classList.toggle("active", drumPattern[sound][i]);
            });

            row.appendChild(step);
        }
    });
}

function playStep() {
    document.querySelectorAll(".step").forEach(step => {
        step.classList.remove("playing");
    });

    drumSounds.forEach(sound => {
        if (drumPattern[sound][currentStep]) {
            createSound(sound);
        }
    });

    document.querySelectorAll(".steps").forEach(row => {
        const step = row.children[currentStep];

        if (step) {
            step.classList.add("playing");
        }
    });

    currentStep = (currentStep + 1) % 16;
}

function startDrums() {
    if (isPlaying) return;

    initAudio();

    isPlaying = true;

    const bpm = Number(document.getElementById("bpm").value) || 120;
    const interval = 60000 / bpm / 4;

    playStep();

    timer = setInterval(playStep, interval);
}

function stopDrums() {
    isPlaying = false;

    clearInterval(timer);
    timer = null;
    currentStep = 0;

    document.querySelectorAll(".step").forEach(step => {
        step.classList.remove("playing");
    });
}
