$(document).ready(function(){
    goBack();
    goSurvey();
    goSeatingLocation();
    goStatusCheck();
    goNewSurvey();
    getStatusTable();
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
        if (currentPage.indexOf("helpit-review-complete.html")> -1)
            location.href= "tickets-status.html";
        if (currentPage.indexOf("helpit-adminside-new-ticket.html")> -1)
            location.href= "tickets-status.html";
        if (currentPage.indexOf("helpit-adminside-seating-location.html")> -1)
            location.href= "tickets-status.html";
    });
}
function goSeatingLocation(){
    $("#seating-location-btn").click(function(){
        location.href = "helpit-adminside-seating-location.html";
    })}

function goStatusCheck(){
    $("#check-status-btn").click(function(){
        location.href = "tickets-status.html";
    });
}

function goNewSurvey(){
    $(".helpit-new-ticket").click(function() {
        location.href = "helpit-new-ticket.html";
    });
}

function goSurvey(){
    $("#ticket-status-table").click(function(){
        var currentPage = location.href;
        if(currentPage.indexOf("helpit-adminside-status.html")> -1)
            location.href= "helpit-adminside-new-ticket.html";
    });
}

function getStatusTable(){
    $.ajax({url:"../../data/ticket",method:"get"
})
        .done(function(res) {
            var tableHTML ='';
            for(var i=0 ; i<res.length ;i++){
                tableHTML +=
                    '<tr>'+
                    '<td>'+ res[i].date +'</td>'+
                    '<td>'+ res[i].status +'</td>'+
                    '<td><span class="glyphicon glyphicon-'+res[i].icon+'" aria-hidden="true"></span></td>'+
                    '</tr>'
            }
            $("#ticket-status-tbody").html(tableHTML);
        });
}