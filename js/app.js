
createSequencer();

document.getElementById("playBtn").addEventListener("click", startDrums);

document.getElementById("stopBtn").addEventListener("click", stopDrums);


// Звуковые кнопки
document.querySelectorAll(".sound-pad").forEach(button => {

    button.addEventListener("click", function() {

        const sound = this.dataset.pad;

        createSound(sound);

    });

});


// Экспорт аудио — пока сообщаем о следующем этапе
document.getElementById("exportBtn").addEventListener("click", function() {
    alert("Функция экспорта будет добавлена на следующем этапе.");
});
