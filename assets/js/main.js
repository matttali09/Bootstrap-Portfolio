// doc ready
$(function () {
    // submit button
    $("#submit-btn").click(function (event) {
        event.preventDefault();

        let emailName = $("#name").val().trim();
        let emailSub = $("#subject").val();
        let emailBody = $("#message").val();

        location.href = "mailto:matttaliancich09@gmail.com?subject=" + emailName + ": " + emailSub + "&body=" + emailBody;
    });

    // materialize listeners
    $(".dropdown-trigger").dropdown();
    $('.parallax').parallax();
});