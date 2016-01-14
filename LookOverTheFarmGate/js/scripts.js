var OpenPopupWindow = function(){
    $(".popup-content").show();
    $(".popup-overlay").show();
};
var closePopupWindwod = function(){
    $(".popup-content").hide();
    $(".popup-overlay").hide();
};
$(document).ready(function(){
    $("input#btnPopup").on('click', OpenPopupWindow);
    $("a.popup-close").on('click', closePopupWindwod);
});

