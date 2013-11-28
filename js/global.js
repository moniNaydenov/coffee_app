function nav(where) {
    window.location = where + '.html';
}

function nav2(where, type) {
    window.location = where + '.html?type=' + type;
}

function assignSwipe() {
    window.mySwipe = Swipe(document.getElementById('slider'));
}

$.urlParam = function(name){
    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
}

function loadDrinks() {
    var drinkType = $.urlParam('type');
    $.ajax({
        url         : 'data/' + drinkType + '.html',
        dataType    : 'text',
        success     : function(data, textStatus, jqXHR) {
            /*
            var drinks = $(data.firstElementChild);
            drinks.children('drink').each(function(){ 
                var drink = $(this);
                var t = $('#drinktemplate').clone();
                t.find('div.title').html(drink.children('title').text());
                t.find('div.description').html(drink.children('description').text());
                t.find('span.pricesmall').html(drink.children('pricesmall').text());
                t.find('span.pricelarge').html(drink.children('pricelarge').text());
                t.find('img.image').attr('src', 'images/'+drink.children('image').text());
                $('#drinks_holder').append(t.children('.drink').clone());
                //$('.page_holder').append(t.children('.drink'));
            });*/
            $('#drinks_holder').append(data);
            window.mySwipe = Swipe(document.getElementById('slider'), {disableScroll: true, continuous: false});
        }
        
    });
}

function getRefNumber() {
    $('.refnumber').text((Math.ceil(Math.random()*10000)));
}