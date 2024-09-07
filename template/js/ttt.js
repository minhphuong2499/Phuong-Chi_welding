if (ttt === undefined) {
    var ttt = {
        mode: 'live'
    }
}
var audioPlayer = document.createElement("AUDIO");
audioPlayer.style.display = "none";

setTimeout(function(){
    if (audioPlayer.canPlayType("audio/mpeg")) {
        audioPlayer.setAttribute("src", document.getElementById('ttt-music').value);
        document.getElementsByClassName("bii-player")[0].style.display = "block";
    }
    audioPlayer.volume = 0.6;
    audioPlayer.setAttribute("controls", "controls");
    document.body.appendChild(audioPlayer);
}, 1000);

var myInterval = setInterval(function(){
    if(document.querySelector(".bii-player")){
        setTimeout(function(){
            document.getElementsByClassName("bii-player")[0].classList.add("show-sec");
        },2000);
        setTimeout(function(){
            document.getElementsByClassName("bii-player")[0].classList.remove("show-sec");
        },7000);
        clearInterval(myInterval);
    }
}, 200);
function playPause() {
    document.getElementsByClassName("bii-player")[0].classList.remove("show-sec");
    if (audioPlayer.paused) {
        audioPlayer.play();
        document.getElementById("playerVolumeOff").style.display = "none";
        document.getElementById("playerVolumeOn").style.display = "block";
    } else {
        audioPlayer.pause();
        document.getElementById("playerVolumeOff").style.display = "block";
        document.getElementById("playerVolumeOn").style.display = "none";
    }
}
//var sendajax = function(form) {
//    var inputs = form.getElementsByTagName('input');
//    var textareas = form.getElementsByTagName('textarea');
//    var dataJson = [];
//    for (let i=0; i<inputs.length; i++) {
//        if (inputs[i].getAttribute('name') !== null) {
//            dataJson[inputs[i].getAttribute('name')] = inputs[i].value;
//        }
//    }
//    for (let i=0; i<textareas.length; i++) {
//        if (textareas[i].getAttribute('name') !== null) {
//            dataJson[textareas[i].getAttribute('name')] = textareas[i].value;
//        }
//    }
//    jQuery.ajax({
//        url: 'https://script.google.com/macros/s/AKfycbwAeaVKmmlSR23lGo8diZJXDKgdWk51nkq8T4sN4dAvpQidEK0IapVU9M7n9gfs7o4_/exec',
//        beforeSend: function(request) {
//            request.setRequestHeader("X-CSRF-TOKEN", document.querySelector('meta[name="csrf-token"]').content);
//        },
//        type: 'POST',
//        dataType: 'json',
//        data: {...dataJson}
//    }).done(function(response) {
//        console.log(response)
//        if (response.success) {
//            document.getElementsByClassName('form-submit-alert')[0].setAttribute("style", "display: block");
//            document.getElementsByClassName('form-submit-success')[0].setAttribute("style", "display: block");
//            document.getElementsByClassName('form-submit-error')[0].setAttribute("style", "display: none");
//        }
//    }).error(function (xhr, status, error) {
//        var err = eval("(" + xhr.responseText + ")");
//        document.getElementsByClassName('form-submit-alert')[0].setAttribute("style", "display: block");
//        document.getElementsByClassName('form-submit-error')[0].setAttribute("style", "display: block");
//        document.getElementsByClassName('form-submit-success')[0].setAttribute("style", "none: block");
//    })
//}
//
//window.onload = function() {
//    var wishForm = document.getElementsByClassName('wish-form');
//    for (var i = 0; i < wishForm.length; i++) {
//        wishForm[i].addEventListener('submit', (event) => {
//            event.preventDefault();
//            sendajax(event.currentTarget);
//        });
//    }
//}
//

//document.addEventListener('DOMContentLoaded', function() {
//    var form = document.querySelector('.wish-form');
//
//    form.addEventListener('submit', function (event) {
//        event.preventDefault();
//
//        var formData = new FormData(form);
//        var name = formData.get('name');
//        var wish = formData.get('wish');
//
//        if (!name || !wish) {
//            alert('Vui lòng điền đầy đủ thông tin.');
//            return;
//        }
//
//        var url = 'https://script.google.com/macros/s/AKfycbzhmuRn7OXsl-tvKn9zXvR5fByyasvK3Y73n65dxLngszDENyDP9X2g6tKrWmV60jiM7A/exec';
//        var xhr = new XMLHttpRequest();
//        xhr.open('POST', url, true);
//        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//        xhr.onreadystatechange = function () {
//            if (xhr.readyState === 4 && xhr.status === 200) {
//                // Xử lý phản hồi từ Google Apps Script
//                var response = xhr.responseText;
//                if (response === 'success') {
//                    document.querySelector('.form-submit-success').style.display = 'block';
//                    document.querySelector('.form-submit-error').style.display = 'none';
//                    alert('Gửi lời chúc tới cô dâu chú rể thành công');
//                    form.reset();
//                } else {
//                    document.querySelector('.form-submit-success').style.display = 'none';
//                    document.querySelector('.form-submit-error').style.display = 'block';
//                }
//            }
//        };
//        var data = 'name=' + encodeURIComponent(name) + '&wish=' + encodeURIComponent(wish);
//        xhr.send(data);
//    });
//});




document.addEventListener('DOMContentLoaded', function() {
    var submitBtn = document.querySelector('.submit');
    var form = document.querySelector('.wish-form');

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();

        var formData = new FormData(form);
        var name = formData.get('name');
        var wish = formData.get('wish');

        if (!name || !wish) {
            document.querySelector('.form-submit-success').style.display = 'none';
            document.querySelector('.form-submit-error').style.display = 'block';
            return;
        }

        var url = 'https://script.google.com/macros/s/AKfycbzhmuRn7OXsl-tvKn9zXvR5fByyasvK3Y73n65dxLngszDENyDP9X2g6tKrWmV60jiM7A/exec';
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Xử lý phản hồi từ Google Apps Script
                var response = xhr.responseText;
                if (response === 'success') {
                    document.querySelector('.form-submit-success').style.display = 'block';
                    document.querySelector('.form-submit-error').style.display = 'none';
                    alert('Gửi lời chúc tới cô dâu chú rể thành công');
                    form.reset();
                } else {
                    document.querySelector('.form-submit-success').style.display = 'none';
                    document.querySelector('.form-submit-error').style.display = 'block';
                }
            }
        };
        var data = 'name=' + encodeURIComponent(name) + '&wish=' + encodeURIComponent(wish);
        xhr.send(data);
    });
});

