
$('#btnSubmit').on('click', function (e) {
    var arr = ["likertFirst1", "likertFirst2", "likertSecond1", "likertSecond2", "likertSecond3", "likertThird1", "likertThird2", "likertThird3", "likertThird4", "likertThird5" ]
  
    $(".gorup-form").removeClass("has-error");
    $(".message").html("");
    $.each( arr, function( i, val ) {

 var cnt = $("input[name=" + val + "]:radio:checked").length;
 if (cnt == 0) {

     $("input[name=" + val + "]").parents("div.gorup-form").addClass("has-error");
     
        e.preventDefault();
        
    }
})

    if ($('#survyForm').find('div.has-error').length === 0) {
        $(".message").html("");
        $(".main-title").hide();
        $("#survyForm").hide();
        $(".message").append("<div class='alert alert-success' style='text-align:center; font-family: droid-n,sans-serif;font-weight: bold;font-size: 1.5em; margin-top:150px; margin-bottom:150px;'>شكراً لكم على تعبئة الاستبيان</div>");
       

        // do somthing submit form

    } else {
        $(".message").append("<div class='alert alert-danger' style='text-align:right;font-family: droid-n,sans-serif;font-weight: bold;font-size: 1.1em;'>الرجاء تعبة الحقول المطلوبة</div>")
        $(".has-error:first").find("input").focus();
        console.log('amal win');
    }
});