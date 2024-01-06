var k = true;
var check = document.querySelector(".form");
function check_submit() {
    var input_check = document.querySelectorAll('.check_null')
    input_check.forEach(el => {
        if(el.value == ""){
            i= el.getAttribute("name");
            check.querySelector(".err_"+i).getElementsByTagName("p")[0].style.visibility = "unset";
			check.querySelector(".err_"+i).getElementsByTagName("span")[0].style.color = "red";
            k = false;
        }
    })
    return k;
}

function check_phone() {
    
}
