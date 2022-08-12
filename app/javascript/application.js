// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

//= require jquery
//= require semantic-ui


$(function() {     $('.ui.dropdown').dropdown(); });
 $(document).on('turbo:load', function(){
     
     $('.ui.dropdown').dropdown();  })

