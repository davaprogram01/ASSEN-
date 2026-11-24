
let audioContext;
let masterGain;

function initAudio() {
    if (!audioContext) {
        audioContext = new AudioContext();

        masterGain = audioContext.createGain();
        masterGain.gain.value = 0.7;

        masterGain.connect(audioContext.destination);
    }

    if (audioContext.state === "suspended") {
        audioContext.resume();
    }
}

function createSound(type, volume = 0.7) {
    initAudio();

    const ctx = audioContext;
    const gain = ctx.createGain();

    gain.gain.value = volume;
    gain.connect(masterGain);

    const osc = ctx.createOscillator();

    if (type === "kick") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(150, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.18);

        gain.gain.setValueAtTime(volume, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.22);

        osc.connect(gain);
        osc.start();
        osc.stop(ctx.currentTime + 0.23);
    }

    else if (type === "snare" || type === "clap" || type === "hihat" || type === "noise") {
        const buffer = ctx.createBuffer(
            1,
            ctx.sampleRate * 0.3,
            ctx.sampleRate
        );

        const data = buffer.getChannelData(0);

        for (let i = 0; i < data.length; i++) {
            data[i] = Math.random() * 2 - 1;
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;

        const filter = ctx.createBiquadFilter();
        filter.type = "highpass";
        filter.frequency.value = type === "hihat" ? 7000 : 1000;

        noise.connect(filter);
        filter.connect(gain);

        gain.gain.setValueAtTime(volume, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(
            0.001,
            ctx.currentTime + (type === "hihat" ? 0.06 : 0.2)
        );

        noise.start();
        noise.stop(ctx.currentTime + 0.25);
    }

    else if (type === "bass") {
        osc.type = "sawtooth";
        osc.frequency.value = 55;

        gain.gain.setValueAtTime(volume, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

        osc.connect(gain);
        osc.start();
        osc.stop(ctx.currentTime + 0.36);
    }

    else if (type === "synth") {
        osc.type = "triangle";
        osc.frequency.value = 440;

        gain.gain.setValueAtTime(volume, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);

        osc.connect(gain);
        osc.start();
        osc.stop(ctx.currentTime + 0.51);
    }

    else if (type === "laser") {
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(1200, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.35);

        gain.gain.setValueAtTime(volume, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

        osc.connect(gain);
        osc.start();
        osc.stop(ctx.currentTime + 0.36);
    }
}

function setMasterVolume(value) {
    initAudio();
    masterGain.gain.value = value / 100;
}
