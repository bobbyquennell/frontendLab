var OpenPopupWindow = function(){
    $("div.popup-container").show();
};
var closePopupWindwod = function(){
    $("div.popup-container").hide();
};
$(document).ready(function(){
    $("input").on('click', OpenPopupWindow);
    $("a.popup-close").on('click', closePopupWindwod);
});