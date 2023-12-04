
function updateFlagCode() {
    var flagSelector = document.getElementById('flagSelector');
    var flagCodeInput = document.getElementById('flagCode');
    var selectedFlag = flagSelector.value;

    flagCodeInput.value = selectedFlag;
}