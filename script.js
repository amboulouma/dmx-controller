$(document).ready(function(){

    /* Sliders controller */

    for(var i=0; i<18; i++) {
        $('#slider-' + i).slider();
        $("#hex-value-" + i).text(sliderToHex(($('#slider-' + i).slider('getValue'))));
    }

    /* Slider 0 */

    $('#slider-0').on("slide", function(slideEvt) {
        $("#hex-value-" + 0).text(sliderToHex(slideEvt.value));
    }).on("change", function(changeEvt) {
        $("#hex-value-" + 0).text(sliderToHex(changeEvt.value.newValue));
    });

    /* Slider 1 */

    $('#slider-1').on("slide", function(slideEvt) {
        $("#hex-value-" + 1).text(sliderToHex(slideEvt.value));
    }).on("change", function(changeEvt) {
        $("#hex-value-" + 1).text(sliderToHex(changeEvt.value.newValue));
    });

    /* Slider 2 */

    $('#slider-2').on("slide", function(slideEvt) {
        $("#hex-value-" + 2).text(sliderToHex(slideEvt.value));
    }).on("change", function(changeEvt) {
        $("#hex-value-" + 2).text(sliderToHex(changeEvt.value.newValue));
    });

    /* Slider 3 */

    $('#slider-3').on("slide", function(slideEvt) {
        $("#hex-value-" + 3).text(sliderToHex(slideEvt.value));
    }).on("change", function(changeEvt) {
        $("#hex-value-" + 3).text(sliderToHex(changeEvt.value.newValue));
    });

    /* Slider 4 */

    $('#slider-4').on("slide", function(slideEvt) {
        $("#hex-value-" + 4).text(sliderToHex(slideEvt.value));
    }).on("change", function(changeEvt) {
        $("#hex-value-" + 4).text(sliderToHex(changeEvt.value.newValue));
    });

    /* Slider 5 */

    $('#slider-5').on("slide", function(slideEvt) {
        $("#hex-value-" + 5).text(sliderToHex(slideEvt.value));
    }).on("change", function(changeEvt) {
        $("#hex-value-" + 5).text(sliderToHex(changeEvt.value.newValue));
    });

    /* Slider 6 */

    $('#slider-6').on("slide", function(slideEvt) {
        $("#hex-value-" + 6).text(sliderToHex(slideEvt.value));
    }).on("change", function(changeEvt) {
        $("#hex-value-" + 6).text(sliderToHex(changeEvt.value.newValue));
    });

    /* Slider 7 */

    $('#slider-7').on("slide", function(slideEvt) {
        $("#hex-value-" + 7).text(sliderToHex(slideEvt.value));
    }).on("change", function(changeEvt) {
        $("#hex-value-" + 7).text(sliderToHex(changeEvt.value.newValue));
    });

    /* Slider 8 */

    $('#slider-8').on("slide", function(slideEvt) {
        $("#hex-value-" + 8).text(sliderToHex(slideEvt.value));
    }).on("change", function(changeEvt) {
        $("#hex-value-" + 8).text(sliderToHex(changeEvt.value.newValue));
    });

    /* Slider 9 */

    $('#slider-9').on("slide", function(slideEvt) {
        $("#hex-value-" + 9).text(sliderToHex(slideEvt.value));
    }).on("change", function(changeEvt) {
        $("#hex-value-" + 9).text(sliderToHex(changeEvt.value.newValue));
    });

    /* Slider 10 */

    $('#slider-10').on("slide", function(slideEvt) {
        $("#hex-value-" + 10).text(sliderToHex(slideEvt.value));
    }).on("change", function(changeEvt) {
        $("#hex-value-" + 10).text(sliderToHex(changeEvt.value.newValue));
    });

    /* Slider 11 */

    $('#slider-11').on("slide", function(slideEvt) {
        $("#hex-value-" + 11).text(sliderToHex(slideEvt.value));
    }).on("change", function(changeEvt) {
        $("#hex-value-" + 11).text(sliderToHex(changeEvt.value.newValue));
    });

    /* Slider 12 */

    $('#slider-12').on("slide", function(slideEvt) {
        $("#hex-value-" + 12).text(sliderToHex(slideEvt.value));
    }).on("change", function(changeEvt) {
        $("#hex-value-" + 12).text(sliderToHex(changeEvt.value.newValue));
    });

    /* Slider 13 */

    $('#slider-13').on("slide", function(slideEvt) {
        $("#hex-value-" + 13).text(sliderToHex(slideEvt.value));
    }).on("change", function(changeEvt) {
        $("#hex-value-" + 13).text(sliderToHex(changeEvt.value.newValue));
    });

    /* Slider 14 */

    $('#slider-14').on("slide", function(slideEvt) {
        $("#hex-value-" + 14).text(sliderToHex(slideEvt.value));
    }).on("change", function(changeEvt) {
        $("#hex-value-" + 14).text(sliderToHex(changeEvt.value.newValue));
    });

    /* Slider 15 */

    $('#slider-15').on("slide", function(slideEvt) {
        $("#hex-value-" + 15).text(sliderToHex(slideEvt.value));
    }).on("change", function(changeEvt) {
        $("#hex-value-" + 15).text(sliderToHex(changeEvt.value.newValue));
    });

    /* Slider 16 */

    $('#slider-16').on("slide", function(slideEvt) {
        $("#hex-value-" + 16).text(sliderToHex(slideEvt.value));
    }).on("change", function(changeEvt) {
        $("#hex-value-" + 16).text(sliderToHex(changeEvt.value.newValue));
    });

    /* Slider 17 */

    $('#slider-17').on("slide", function(slideEvt) {
        $("#hex-value-" + 17).text(sliderToHex(slideEvt.value));
    }).on("change", function(changeEvt) {
        $("#hex-value-" + 17).text(sliderToHex(changeEvt.value.newValue));
    });

    
    function sliderToPercent($param) {
        return $param*0.05;
    }

    function percentToDecimal($param) {
        return Math.floor($param*255);
    }

    function decimalToBin($param) {
        return parseInt($param, 10).toString(2);
    }

    function bitsToHex($param) {
        return parseInt($param, 2).toString(16).toUpperCase();
    }

    function sliderToHex($param) {
        return bitsToHex(decimalToBin(percentToDecimal(sliderToPercent($param))));
    }

    /* Color picker function */

    $(function () {
        $('#color-picker').colorpicker({
            customClass: 'custom-size',
            sliders: {
                saturation: {
                    maxLeft: 250,
                    maxTop: 250
                },
                hue: {
                    maxTop: 250
                },
                alpha: {
                    maxTop: 250
                }
            }
        });
    });

});