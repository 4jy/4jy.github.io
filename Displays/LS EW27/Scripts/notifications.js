window.addEventListener("load", function() { 
    document.body.style.width='100%';
    document.body.style.height='100%';
}, false);

function notif(){
    if (groovyAPI.isShowingNotifications()){
        $('#Clock').animate({'margin-top': ShiftUp_Notif + "%",}, 500);
        $('#Blur').animate({opacity: '0'}, 500);
        $('#C').animate({opacity: '0'}, 500);
    } else {
        $('#Clock').animate({'margin-top': OriginalPos + "%",}, 500);
        $('#Blur').animate({opacity: '1'}, 500);
        $('#C').animate({opacity: '0.7'}, 500);
    }

    setTimeout(notif, 1000);      
};

notif();