requirejs.config({
    baseUrl: '../bower_components',
    paths: {
        assets: '../examples/assets',
        dist: '../dist',

        jquery: 'jquery/dist/jquery',
        'jquery-oauth': '../dist/jquery.oauth',
        'store': 'store-js/store'
    }
});

requirejs(['jquery-oauth'], function(jqOAuth){
    var auth = new jqOAuth({
        events: {

        }
    });

    auth.login("1234", "1234");

    $.get("assets/resource.json");

    auth.logout();

    $.get("assets/resource.json");
});