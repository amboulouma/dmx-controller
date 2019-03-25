/* Sliders controller */

$('#slider1').slider({});
$('#slider2').slider({});
$('#slider3').slider({});
$('#slider4').slider({});
$('#slider5').slider({});
$('#slider6').slider({});
$('#slider7').slider({});
$('#slider8').slider({});
$('#slider9').slider({});
$('#slider10').slider({});
$('#slider11').slider({});
$('#slider12').slider({});
$('#slider13').slider({});
$('#slider14').slider({});
$('#slider15').slider({});
$('#slider16').slider({});
$('#slider17').slider({});
$('#slider18').slider({});
$('#slider19').slider({});
$('#slider20').slider({});

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