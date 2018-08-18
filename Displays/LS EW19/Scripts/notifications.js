window.addEventListener("load", function() { 
    document.body.style.width='100%';
    document.body.style.height='100%';
}, false);

function notif(){
    if (groovyAPI.isShowingNotifications()){
        $('#HourWrap').animate({'margin-top': ShiftUp_Notif + "%",}, 500);
        $('#L').animate({'margin-top': ShiftUp_Notif + "%",}, 500);
    } else {
        $('#HourWrap').animate({'margin-top': OriginalPos + "%",}, 500);
        $('#L').animate({'margin-top': OriginalPos + "%",}, 500);
    }

    setTimeout(notif, 1000);      
};

notif();