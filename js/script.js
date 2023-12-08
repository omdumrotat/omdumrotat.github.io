// Check email để xem thông tin cá nhân
let button = document.getElementById("sendemail");
let email = document.getElementById("email");
let warning = document.getElementById("warning");
// regex pattern để check định dạng email
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
button.addEventListener("click", verify);
function isEmailValid(email) {
    return regex.test(email);
}
        function verify() {
            if (email.value != "") {
                if (isEmailValid(email.value)) {
            document.querySelector("#personal-info").style.display = "inline-block";
            document.querySelector(".email").style.display = "none";
            }
            else {
                document.querySelector("#warning").style.display = "block";
            }
        }
            else {
                document.querySelector("#warning").style.display = "block";
            }
        }
// Nút hiên lên trong thông tin nghề nghiệp
var elements = document.querySelectorAll(".grid-border");
elements.forEach(function(element) {
    element.addEventListener("mouseover", handleMouseOver);
    element.addEventListener("mouseout", handleMouseOut);

   
    var button = element.querySelector(".rounded-border2");
    var paragraph = element.querySelector(".paragraph");

    button.addEventListener("click", function() {
        paragraph.classList.toggle("show");
        button.style.display = "none";
    });
});

function handleMouseOver() {
    var showmore = this.querySelector(".rounded-border2");
    var paragraph = this.querySelector(".paragraph");
    // Logic để test nếu nút đã bấm 
    if (!paragraph.classList.contains("show")) {
    showmore.style.display = "inline-block";
    this.style.transform = "scale(1.2)";
    }
}

function handleMouseOut() {
    var showmore = this.querySelector(".rounded-border2");
    showmore.style.display = "none";
    this.style.transform = "scale(1)";
}
