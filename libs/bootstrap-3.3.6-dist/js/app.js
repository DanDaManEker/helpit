$(document).ready(function(){
    goBack()

});
function goBack() {
    $(".big-back-button").click(function(){
        var currentPage = location.href;
        if (currentPage.indexOf("helpit-new-ticket.html")> -1)
        location.href= "tickets-status.html";
        if (currentPage.indexOf("helpit-done.html")> -1)
        location.href= "tickets-status.html";
        if (currentPage.indexOf("helpit-survey.html")> -1)
        location.href= "tickets-status.html";
    })

}