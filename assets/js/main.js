(function () {

    const input = document.getElementById('keyInput');
    let inputObj = {};

    input.addEventListener('keypress', (e) => {

        e.preventDefault();

        let combination = "";

        inputObj = {
            "shiftKey": false,
            "altKey": false,
            "ctrlKey": false
        }
        if (e.shiftKey) {
            combination = combination + "shift + ";
            inputObj.shift = true;
        };
        if (e.altKey) {
            if (navigator.appVersion.indexOf('Mac') !== -1) {
                combination = combination + "option + ";
            } else {
                combination = combination + "alt + ";
            }
            inputObj.alt = true;
        }
        if (e.ctrlKey) {
            combination = combination + "ctrl + ";
            inputObj.ctrl = true;
        }
        combination = combination + e.key;
        inputObj.keyCode = e.keyCode;
        input.value = "";
        input.value = combination;
    });

    const setBtn = document.getElementById('setBtn');

    setBtn.addEventListener('click', () => {
        chrome.storage.sync.set({'key': inputObj}, () => {
            let done = document.querySelector('.done');
            done.classList.add('show');
        });
    });
})();
