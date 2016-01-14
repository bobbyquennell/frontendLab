var OpenPopupWindow = function(){
    $(".popup-content").show();
    //$("div.popup-container").show();
};
var closePopupWindwod = function(){
    $(".popup-content").hide();
    //$("div.popup-container").show();
};
$(document).ready(function(){
    $("input#btnPopup").on('click', OpenPopupWindow);
    $("a.popup-close").on('click', closePopupWindwod);
});