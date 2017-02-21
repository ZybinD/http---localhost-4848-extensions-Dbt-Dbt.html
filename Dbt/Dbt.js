/*global require, alert*/
/*
 * 
 * @owner Enter you name here (xxx)
 */
/*
 *    Fill in host and port for Qlik engine
 */
var config = {
	host: window.location.hostname,
	prefix: "/",
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
require.config( {
	baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port: "") + config.prefix + "resources"
} );

require( ["js/qlik"], function ( qlik ) {
	qlik.setOnError( function ( error ) {
		alert( error.message );
	} );

	var tabs = false;
	if (tabs) {
		$(document).ready(function () {
			$(".view").hide();
	        $(window).on("hashchange", function() {
		        var hash = window.location.hash;
		        if (hash === "") {
		            window.location.hash = $("ul.nav li:first-child").children().attr("href");
		        }
		        $("ul.nav li").removeClass("active");
		        $("ul.nav li").find('a[href="' + hash + '"]').parent().addClass("active");
		        $(".view").hide();
		        $(hash).show();
		        qlik.resize();
	        });
	        $(window).trigger('hashchange');
	    });
    }

	//callbacks -- inserted here --
	//open apps -- inserted here --
	var app = qlik.openApp('Дебит.qvf', config);

	
	//get objects -- inserted here --
	app.getObject('CurrentSelections','CurrentSelections');
	app.getObject('QV1-2','YBVHjp');
	app.getObject('QV1-1','UjjGPR');
	//create cubes and lists -- inserted here --

} );