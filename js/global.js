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
        url         : 'data/' + drinkType + '.xml',
        dataType    : 'xml',
        success     : function(data, textStatus, jqXHR) {
            var drinks = $(data.firstElementChild);
            var t = document.querySelector('#drinktemplate');
            drinks.children('drink').each(function(){
                var drink = $(this);
                console.log(drink.children('name').html());
                t.content.querySelector('img.image').src = 'images/'+drink.children('image').html();
                t.content.querySelector('div.title').innerHTML = drink.children('name').html();
                t.content.querySelector('div.description').innerHTML = drink.children('description').html();
                t.content.querySelector('span.pricesmall').innerHTML = drink.children('pricesmall').html();
                t.content.querySelector('span.pricelarge').innerHTML = drink.children('pricelarge').html();
                
                
                
                /*
                console.log(title);
                console.log(description);
                console.log(priceL);
                console.log(priceS);
                console.log(imageurl);*/
                $('#drinks_holder').append(t.content.cloneNode(true));
            });
            window.mySwipe = Swipe(document.getElementById('slider'));
        }
        
    });
}