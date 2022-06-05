$(document).ready(function()    {
    // Current Day/Time
    $("#currentDay").text(moment().format("MMMM DD YYYY, hh:mm A"))
    // Save Button listener
    $(".saveBtn").on("click", function()    {
        var text = $(this).siblings("textarea").val()
        var time = $(this).parent().attr("id")
        // Setting Items in Local Storage
        localStorage.setItem(time, text)
    })

    function timeBlocks()   {
        var hourNine = moment({h:9})

        $("#9").append(hourNine)
        $("#9").text(moment({h:9}).format("h A"))

        if(moment().isAfter(hourNine, "hour"))    {
            $(".timeblock9").addClass("past")
            $(".timeblock9").removeClass("present")
            $(".timeblock9").removeClass("future")
        }
        else if(moment().isBefore(hourNine, "hour"))    {
            $(".timeblock9").removeClass("past")
            $(".timeblock9").removeClass("present")
            $(".timeblock9").addClass("future")
        }
        else{
            $(".timeblock9").removeClass("past")
            $(".timeblock9").addClass("present")
            $(".timeblock9").removeClass("future")
        }

        var hourTen = moment({h:10})

        $("#10").append(hourTen)
        $("#10").text(moment({h:10}).format("h A"))

        if(moment().isAfter(hourTen, "hour"))    {
            $(".timeblock10").addClass("past")
            $(".timeblock10").removeClass("present")
            $(".timeblock10").removeClass("future")
        }
        else if(moment().isBefore(hourTen, "hour"))    {
            $(".timeblock10").removeClass("past")
            $(".timeblock10").removeClass("present")
            $(".timeblock10").addClass("future")
        }
        else{
            $(".timeblock10").removeClass("past")
            $(".timeblock10").addClass("present")
            $(".timeblock10").removeClass("future")
        }

        var hourEleven = moment({h:11})

        $("#11").append(hourEleven)
        $("#11").text(moment({h:11}).format("h A"))

        if(moment().isAfter(hourEleven, "hour"))    {
            $(".timeblock11").addClass("past")
            $(".timeblock11").removeClass("present")
            $(".timeblock11").removeClass("future")
        }
        else if(moment().isBefore(hourEleven, "hour"))    {
            $(".timeblock11").removeClass("past")
            $(".timeblock11").removeClass("present")
            $(".timeblock11").addClass("future")
        }
        else{
            $(".timeblock11").removeClass("past")
            $(".timeblock11").addClass("present")
            $(".timeblock11").removeClass("future")
        }

        var hourTwelve = moment({h:12})

        $("#12").append(hourTwelve)
        $("#12").text(moment({h:12}).format("h A"))

        if(moment().isAfter(hourTwelve, "hour"))    {
            $(".timeblock12").addClass("past")
            $(".timeblock12").removeClass("present")
            $(".timeblock12").removeClass("future")
        }
        else if(moment().isBefore(hourTwelve, "hour"))    {
            $(".timeblock12").removeClass("past")
            $(".timeblock12").removeClass("present")
            $(".timeblock12").addClass("future")
        }
        else{
            $(".timeblock12").removeClass("past")
            $(".timeblock12").addClass("present")
            $(".timeblock12").removeClass("future")
        }

        var hourThirteen = moment({h:13})

        $("#13").append(hourThirteen)
        $("#13").text(moment({h:13}).format("h A"))

        if(moment().isAfter(hourThirteen, "hour"))    {
            $(".timeblock13").addClass("past")
            $(".timeblock13").removeClass("present")
            $(".timeblock13").removeClass("future")
        }
        else if(moment().isBefore(hourThirteen, "hour"))    {
            $(".timeblock13").removeClass("past")
            $(".timeblock13").removeClass("present")
            $(".timeblock13").addClass("future")
        }
        else{
            $(".timeblock13").removeClass("past")
            $(".timeblock13").addClass("present")
            $(".timeblock13").removeClass("future")
        }

        var hourFourteen = moment({h:14})

        $("#14").append(hourFourteen)
        $("#14").text(moment({h:14}).format("h A"))

        if(moment().isAfter(hourFourteen, "hour"))    {
            $(".timeblock14").addClass("past")
            $(".timeblock14").removeClass("present")
            $(".timeblock14").removeClass("future")
        }
        else if(moment().isBefore(hourFourteen, "hour"))    {
            $(".timeblock14").removeClass("past")
            $(".timeblock14").removeClass("present")
            $(".timeblock14").addClass("future")
        }
        else{
            $(".timeblock14").removeClass("past")
            $(".timeblock14").addClass("present")
            $(".timeblock14").removeClass("future")
        }

        var hourFifteen = moment({h:15})

        $("#15").append(hourFifteen)
        $("#15").text(moment({h:15}).format("h A"))

        if(moment().isAfter(hourFifteen, "hour"))    {
            $(".timeblock15").addClass("past")
            $(".timeblock15").removeClass("present")
            $(".timeblock15").removeClass("future")
        }
        else if(moment().isBefore(hourFifteen, "hour"))    {
            $(".timeblock15").removeClass("past")
            $(".timeblock15").removeClass("present")
            $(".timeblock15").addClass("future")
        }
        else{
            $(".timeblock15").removeClass("past")
            $(".timeblock15").addClass("present")
            $(".timeblock15").removeClass("future")
        }

        var hourSixteen = moment({h:16})

        $("#16").append(hourSixteen)
        $("#16").text(moment({h:16}).format("h A"))

        if(moment().isAfter(hourSixteen, "hour"))    {
            $(".timeblock16").addClass("past")
            $(".timeblock16").removeClass("present")
            $(".timeblock16").removeClass("future")
        }
        else if(moment().isBefore(hourSixteen, "hour"))    {
            $(".timeblock16").removeClass("past")
            $(".timeblock16").removeClass("present")
            $(".timeblock16").addClass("future")
        }
        else{
            $(".timeblock16").removeClass("past")
            $(".timeblock16").addClass("present")
            $(".timeblock16").removeClass("future")
        }

        var hourSeventeen = moment({h:17})

        $("#17").append(hourSeventeen)
        $("#17").text(moment({h:17}).format("h A"))

        if(moment().isAfter(hourSeventeen, "hour"))    {
            $(".timeblock17").addClass("past")
            $(".timeblock17").removeClass("present")
            $(".timeblock17").removeClass("future")
        }
        else if(moment().isBefore(hourSeventeen, "hour"))    {
            $(".timeblock17").removeClass("past")
            $(".timeblock17").removeClass("present")
            $(".timeblock17").addClass("future")
        }
        else{
            $(".timeblock17").removeClass("past")
            $(".timeblock17").addClass("present")
            $(".timeblock17").removeClass("future")
        }
    }

        // Loading saved data from Local Storage
        $("#hour9 textarea").val(localStorage.getItem("hour9"));
        $("#hour10 textarea").val(localStorage.getItem("hour10"));
        $("#hour11 textarea").val(localStorage.getItem("hour11"));
        $("#hour12 textarea").val(localStorage.getItem("hour12"));
        $("#hour13 textarea").val(localStorage.getItem("hour13"));
        $("#hour14 textarea").val(localStorage.getItem("hour14"));
        $("#hour15 textarea").val(localStorage.getItem("hour15"));
        $("#hour16 textarea").val(localStorage.getItem("hour16"));
        $("#hour17 textarea").val(localStorage.getItem("hour17"));

        timeBlocks()
})





