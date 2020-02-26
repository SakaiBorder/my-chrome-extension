
(() => {

    let setting = {
        "shiftKey": false,
        "altKey": false,
        "ctrlKey": false,
        "keyCode": 13,
    }

    const onKeyPress = (e) => {
        const google = "https://www.google.co.jp"
        if (e.keyCode === setting.keyCode) {
            if (e.shiftKey !== setting.shiftKey) {
                return;
            };
            if (e.altKey !== setting.altKey) {
                return
            }
            if (e.ctrlKey !== setting.ctrlKey) {
                return
            }

            let selected = window.getSelection()
            if (selected.toString() !== "") {
                window.open(`${google}/search?q=${selected.toString()}`)
            }

        }
    }


    window.addEventListener('keypress', onKeyPress)

})()

