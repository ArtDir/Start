// ready

$(function(){

	$(".custom_input").each(function(index, el) {
		var label = $(this);
		var input = $("input", label);
		$("<div class='checker'></div>").appendTo(label);
		var cheker = $("div.custom_input", label);


		if(label.hasClass('active')){
			input.trigger('click');
		}
		switch(input.attr("type")){
			case "radio":
				label.addClass('radio');
				if(label.hasClass('disabled')){
					return;
				}
				input.click(function(event) {
					if(label.hasClass('active')){
						label.removeClass('active');
						input.attr('checked', false);
					}
				});
				input.change(function(event) {
					label.addClass('active').siblings().removeClass('active');
				});
				break
			case "checkbox":
				label.addClass('checkbox');
				if(label.hasClass('disabled')){
					return;
				}
				input.change(function(event) {
					if(label.hasClass('disabled')){
						input.removeAttr('checked');
					}else{
						label.toggleClass('active');
					}
				});
				break
		}
	});

});