$(document).ready(function() {
    $("#accordion").accordion ({
        "header": "h3", 
        active: 0     
    })
})

function scrollElement() {
    let element = document.getElementById('scroll');
    element.scrollIntoView();
}