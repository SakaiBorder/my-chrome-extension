
(function() {

    let setting = {
        "shiftKey": false,
        "altKey": false,
        "ctrlKey": false,
        "keyCode": 13,
    };

    window.onload = ()  => {
        chrome.storage.sync.get(['key'], (result) => {
            if (result !== null) {
                setting = result.key;
            }
        }); 
    };

    window.addEventListener('keypress', onKeyPress)

    function onKeyPress(e) {
        const google = "https://www.google.co.jp"
        if (e.keyCode === setting.keyCode) {
            if (e.shiftKey !== setting.shiftKey) {
                return;
            };
            if (e.altKey !== setting.altKey) {
                return;
            }
            if (e.ctrlKey !== setting.ctrlKey) {
                return;
            }

            let selected = window.getSelection();
            // console.log(selected);
            // triggerEvent(selected.anchorNode, 'contextmenu');
            if (selected.toString() !== "") {
                window.open(`${google}/search?q=${selected.toString()}`)
            }

        }
    }

//     function triggerEvent(element, event) {
//    if (document.createEvent) {
//        console.log(element);
//        // IE以外
//        var evt = document.createEvent("HTMLEvents");
//        evt.initEvent(event, true, true ); // event type, bubbling, cancelable
//        return element.dispatchEvent(evt);
//    } else {
//        // IE
//        var evt = document.createEventObject();
//        retur element.fireEvent("on"+event, evt)
//    }
//}
})()
