// doc ready
$(document).ready( () => {
    // submit button
    $("#submit-btn").click(function (event) {
        event.preventDefault();

        let emailName = $("#name").val().trim();
        let emailSub = $("#subject").val().trim();
        let emailBody = $("#message").val();
        emailName.replace(" ", "%20")
        emailSub.replace(" ", "%20")
        emailBody.replace(" ", "%20")

        location.href = "mailto:matttaliancich09@gmail.com?subject=" + emailName + ": " + emailSub + "&body=" + emailBody;
    });

    // materialize listeners
    $(".sidenav").sidenav();
    $(".dropdown-trigger").dropdown();
    $(".parallax").parallax();
    $("input#name, textarea#message").characterCounter();
});