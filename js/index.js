

$("#submit").click(function (e) {
   
    $(".message-alert").html("");
    if ($("#Username").val().length != 0 || $("#Password").val().length != 0) {
        e.preventDefault();
        $(".message-alert").append("<div class='alert alert-danger'><span> الرجاء تعبة الحقول المطلوبة * </span></div>");
    }
});