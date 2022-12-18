$(function(){
    $('#dowebok').fullpage({
        'navigation': true,
        'navigationPosition':"left",
        'navigationColor':['#fff'],
    });
});
$('#mybutton').click(function (event) {
	alert("咦？你的浏览器好像不支持这个呢");
});
$('#lastbutton').click(function (event) {
	window.location.href="last.html"; 
});
//loadAudioFile('../music/1.mp3');
