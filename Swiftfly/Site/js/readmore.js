//var h = $('.asiaandmid')[0].scrollHeight;


$('#more1').click(function(e) {
    e.stopPropagation();
    $('.asiaandmid').animate({
        'height': '1150px'
    })
});

$(document).click(function() {
    $('.asiaandmid').animate({
        'height': '10px'
    })
})

//var h = $('.europe')[0].scrollHeight;


$('#more2').click(function(e) {
    e.stopPropagation();
    $('.europe').animate({
        'height': '950px'
    })
});

$(document).click(function() {
    $('.europe').animate({
        'height': '10px'
    })
})

//var h = $('.aferica')[0].scrollHeight;


$('#more3').click(function(e) {
    e.stopPropagation();
    $('.aferica').animate({
        'height': '950px'
    })
});

$(document).click(function() {
    $('.aferica').animate({
        'height': '10px'
    })
})

//var h = $('.america')[0].scrollHeight;


$('#more4').click(function(e) {
    e.stopPropagation();
    $('.america').animate({
        'height': '200px'
    })
});

$(document).click(function() {
    $('.america').animate({
        'height': '10px'
    })
})

$('#tableview').click(function(e) {
    e.stopPropagation();
    $('.tableid').animate({
        'height': '100%',
        'weight': '100%'
    })
});
