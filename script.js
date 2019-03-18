var response1;
var response2;
$("button").click(function(){
    response1 = parseInt($(".question1").val());
    response2 =$(".question2").val();
    $(".result1").hide();
    $(".result2").hide();
    $(".result3").hide();
    $(".result4").hide();
if ( response1 <= 5 && response2 ==="fire") {
        $(".result1").show();
}        
else if(response1 >=5 && response2 ==="fire") {
        $(".result2").show();
    }
else if(response1 <=5 && response2 ==="water") {
        $(".result3").show();
    }
else if(response1 >=5 && response2 ==="water") {
        $(".result4").show();
    }
else {
alert("Invaild element");
}





});