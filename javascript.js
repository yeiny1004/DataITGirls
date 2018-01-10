$('.flip').hover(function(){
    $(this).find('.card').toggleClass('flipped');
});

var x = 900;
var slider = document.getElementById("slider");
var slideArray = slider.getElementsByTagName("li");
var slideMax = slideArray.length - 1;
var curSlideNo = 0;
for (i = 0; i <= slideMax; i++) {
    if (i == curSlideNo) slideArray[i].style.left = 0;
    else slideArray[i].style.left = -x + "px";
}

function showStudentDetail(student_index) {
    var student_detail = document.getElementById("student_detail_" + student_index);
    if (student_detail) {
        student_detail.classList.add("student_over_fill");
        student_detail.classList.remove("student_over_fill_out");
    }
}

function hideStudentDetail(student_index) {
    var student_detail = document.getElementById("student_detail_" + student_index);
    if (student_detail) {
        student_detail.classList.remove("student_over_fill");
        student_detail.classList.add("student_over_fill_out");
    }
}
