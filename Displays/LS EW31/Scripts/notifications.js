window.addEventListener("load", function() { 
    document.body.style.width='100%';
    document.body.style.height='100%';
}, false);

function notif(){
    if (groovyAPI.isShowingNotifications()){
        $('#R1').animate({'margin-top': ShiftUp_Notif + "%",}, 500);
        $('#R2').animate({'margin-top': ShiftUp_Notif + "%",}, 500);
        $('#hour').animate({'margin-top': ShiftUp_Notif + "%",}, 500);
        $('#Minutes').animate({'margin-top': ShiftUp_Notif + "%",}, 500);
        $('#Cal').animate({'margin-top': ShiftUp_Notif + "%",}, 500);
        $('#weekday').animate({'margin-top': ShiftUp_Notif + "%",}, 500);
    } else {
        $('#R1').animate({'margin-top': OriginalPos + "%",}, 500);
        $('#R2').animate({'margin-top': OriginalPos + "%",}, 500);
        $('#hour').animate({'margin-top': OriginalPos + "%",}, 500);
        $('#Minutes').animate({'margin-top': OriginalPos + "%",}, 500);
        $('#Cal').animate({'margin-top': OriginalPos + "%",}, 500);
        $('#weekday').animate({'margin-top': OriginalPos + "%",}, 500);
    }

    setTimeout(notif, 1000);      
};

notif();