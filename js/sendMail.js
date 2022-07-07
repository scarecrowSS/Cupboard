$(document).ready(function () {
	$(function() {
      $('form').submit(function(e) {
        var $form = $(this);
        $.ajax({
        	type: $form.attr('method'),
        	url: $form.attr('action'),
        	data: $form.serialize()
        }).done(function() {
            (".overlay").removeClass("overlay_status_visible");
        	location.href = "gratitude.html";
        });
        //отмена действия по умолчанию для кнопки submit
        //(".overlay").removeClass("overlay_status_visible");
        location.href = "gratitude.html";
        e.preventDefault(); 
      });
    });
});