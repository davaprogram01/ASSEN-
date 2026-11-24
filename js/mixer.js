
const masterVolume = document.getElementById("masterVolume");
const volumeValue = document.getElementById("volumeValue");

masterVolume.addEventListener("input", function() {
    setMasterVolume(this.value);

    volumeValue.textContent = this.value + "%";
});

document.getElementById("bassVolume").addEventListener("input", function() {
    window.bassLevel = this.value / 100;
});

document.getElementById("synthVolume").addEventListener("input", function() {
    window.synthLevel = this.value / 100;
});
