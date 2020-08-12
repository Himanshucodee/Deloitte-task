$(function () {

    $.getJSON( "assets/js/products.json", function( data ) {
        // Get data about our products from products.json.
        // Call a function that will turn that data into HTML.
        generateProductsHTML(data);
        // Manually trigger a hashchange to start the app.
        $(window).trigger('hashchange');
    });

});

function generateProductsHTML(data){
    var list = $('.Products');
    var theTemplateScript = $("#products-template").html();
    //Compile the template​
    var theTemplate = Handlebars.compile (theTemplateScript);
    list.append (theTemplate(data));
  }
