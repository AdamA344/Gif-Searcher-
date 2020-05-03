
function getData(){

	$('.inner').empty()

	var input = $("#searchtext").val()

	var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+input+"+&api_key=vfinfiHUmmTpwPaDjZeOP5pbxoBHQxcV&limit=30");

	xhr.done(function(dataResponse) { 

		console.log("success got data", dataResponse); 

		var gifs = dataResponse.data

			for (i in gifs)
			{
			$('.inner').append("<img src='"+gifs[i].images.original.url+"' style='height:300px; width:300px;'/>")
			}
				});

}