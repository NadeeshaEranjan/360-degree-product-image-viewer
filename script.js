$(document).ready(function() {
    var imageUrlPrefix = $('.image-item').attr("data-url");
    var imageType = $('.image-item').attr("data-image-type");

    $(document).on('input', '#imageController', function() {
        var imageValue = $(this).val()

        var imagePath = imageUrlPrefix + imageValue + imageType

        $('.image-item').attr('src', imagePath);
    });

    function Rotator2(){
        $('.auto-image-item2').each(function () {
            var $this = $(this);
            $({ Counter: $("#imageController").val() }).animate({ Counter: 50 }, {
                // duration: 2500,
                duration: ((50 - $("#imageController").val()) *50),
                easing: 'linear',
                step: function () {
                    var newImageValue = Math.ceil(this.Counter)

                    var imagePath = imageUrlPrefix + newImageValue + imageType

                    $('.auto-image-item2').attr('src', imagePath);
                    $(".image-controller-auto").val(newImageValue);
                }
            });
        });
    }

    $("#btnPlayPause").on('click', function() {
        if ($(".image-item").hasClass("auto-image-item2")) {
            $(".image-item").removeClass('auto-image-item2');
            $("#imageController").removeClass('image-controller-auto');
            $("#imageController").removeAttr('disabled');
            $("#btnPlayPause .fa-pause").hide('fast');
            $("#btnPlayPause .fa-play").show('fast');
        } else {
            $(".image-item").addClass('auto-image-item2');
            $("#imageController").addClass('image-controller-auto');
            $("#imageController").attr('disabled', 'true');
            $("#btnPlayPause .fa-play").hide('fast');
            $("#btnPlayPause .fa-pause").show('fast');
            Rotator2();

            if ( 1 < $("#imageController").val() < 50) {
                var interval = ((51 - $("#imageController").val()) *50);

                setTimeout(function(){
                    interval = 2500; 
                    Rotator2();
                }, interval);

                setInterval(function(){ 
                    if ($("#imageController").val() == 50) {
                        $("#imageController").val(1)
                    }
                    Rotator2();
                }, interval);
                
            } else {
                setInterval(function(){ 
                    if ($("#imageController").val() == 50) {
                        $("#imageController").val(1)
                    }
                    Rotator2();
                }, 2500);
            }
        }
    });
});



// Auto Rotator

function AutoRotator(){
    $('.auto-image-item').each(function () {
        var $this = $(this);
        $({ Counter: 1 }).animate({ Counter: 48 }, {
            duration: 2500,
            easing: 'linear',
            step: function () {
                var autoImageValue = Math.ceil(this.Counter)

                var autoImageUrlPrefix = $('.auto-image-item').attr("data-url");
                var autoImageType = $('.auto-image-item').attr("data-image-type");

                var autoImagePath = autoImageUrlPrefix + autoImageValue + autoImageType

                $('.auto-image-item').attr('src', autoImagePath);
            }
        });
    });
}

$(document).ready(function(){
    AutoRotator();
    
    setInterval(function(){ 
        AutoRotator();
    }, 2500);
})