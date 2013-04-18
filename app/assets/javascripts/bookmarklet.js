if (document.location.hostname === "imgur.com"){
	var imgary = []
	$('.album-image img').each(function(index, value){
		imgary.push(value.src);
	});

	if (imgary.length === 0){
		imgary.push($('#image img').attr("src"));
	}
	alert(imgary);
}
/* Need to work on the reddit side, null is an issue
if (document.location.hostname === "www.reddit.com"){
	var $image = $('.last-clicked .thumbnail').attr('href')
	if ($image.match(/\.(jpg|png|gif)/).length) { 
		alert("Valid Image: " + $image);
	}
	else {
		alert("Not an image: " + $image);
	}
}
*/
else {
	alert("Site not supported!");
}

