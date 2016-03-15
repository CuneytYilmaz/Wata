function clickSingleA(a) {
    items = document.querySelectorAll('.single.active');

    if (items.length) {
        items[0].className = 'single';
    }

    a.className = 'single active';
}

$('#myTabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
})

$('#myTabs a[href="#profile"]').tab('show') // Select tab by name
$('#myTabs a:first').tab('show') // Select first tab
$('#myTabs a:last').tab('show') // Select last tab
$('#myTabs li:eq(2) a').tab('show') // Select third tab (0-indexed)


$('input[name="rb-fiyat"]').on('change', function () {
    if ($(this).is(':checked') && $(this).val() == '$') {
        //change to "show update"
        $("#fiyat1").text("$19");
        $("#fiyat2").text("$49");
        $("#fiyat3").text("$99");
    } else  if($(this).is(':checked') && $(this).val() == '€'){
        $("#fiyat1").text("€17");
        $("#fiyat2").text("€43");
        $("#fiyat3").text("€87");
    }
});

$('#uyelik a').click(function (e) {

    if ($('#uyelik #email').val() != null) {
        Materialize.toast('Please enter a value', 4000);
    }
})