$(document).ready(function(){

    var beginningAdress = 0;

    /* Spot scène PAR56 LED RGB * 4 */

    for (var i = 0; i<4; i++) {
        createDMXComponent("#component-list", "Spot scène PAR56 LED RGB " + i, "par-56-led-rgb-" + i, 7, beginningAdress);
        if (i<4) beginningAdress += 7;
    }

    /* Stroboscope */

    createDMXComponent("#component-list", "Stroboscope ", "strobo-0", 4, beginningAdress);
    beginningAdress += 4;

    /* iMove 5S */

    createDMXComponent("#component-list", "iMove 5S ", "imove-0", 5, beginningAdress);
    beginningAdress += 5;

    /* iColor 4*/
        
    createDMXComponent("#component-list", "iColor 4", "icolor-0", 4, beginningAdress);
    beginningAdress += 4;

    /* Starway */

    createDMXComponent("#component-list", "Starway", "starway-0", 4, beginningAdress);
    beginningAdress += 4;

    /* Laser ILDA */

    createDMXComponent("#component-list", "Laser de spectacle ILDA", "ilda-0", 24, beginningAdress);
    beginningAdress += 24;

    /* Constitution de la trame globale */

    var hexValues = [];
    $(".dmx-hex-value").toArray().forEach(element => {
        hexValues.push(element.innerHTML);
    });

    $trameGlobale = $("<div>", {id: "trame-globale", class: "trame-globale"})
    $spanTramGlobale = $("<span>", {id: "trame-globale-text"}).append("[" + hexValues.join(", ") + "]");
    $trameGlobale.append($("<h4>").append("Trame globale"));
    $trameGlobale.append($spanTramGlobale);

    $("#container").prepend($trameGlobale);
    

   

    /* Function to create a DMX Component */

    function createDMXComponent(parent, name, componentId, channels, beginninAdress) {
        var $div = $("<div>", {id: componentId, class: "mb-1 dmx-component"}).css("margin", "5px"); 
        var $name = $("<h4>").append(name);
        $div.append($name);
        for (var i = 0; i<channels; i++) {
            createDMXChannel($div, componentId, i, beginninAdress);
            beginninAdress += 1;
        }
        $(parent).append($div);
    }

    /* Function to create a DMX channel */

    function createDMXChannel(parent, componentId, channelId, adress) {
        var $div = $("<div>", {id: componentId + "-" + channelId +"-channel", class: "mb-1 dmx-channel"}).css("margin", "5px");

        /* Tram adress */ 

        var $spanAdress = $("<span>", {
                                        id: componentId + "-" + channelId + "-adress", 
                                        class:"dmx-adress"
                                    }).css("margin", "5px");  

        $spanAdress.append(adress);

        /* The On / Off switch*/

        var $onOff = $('<label>', {class:"switch"}).css("margin", "5px");
        var $input = $('<input>', {id: componentId + "-" + channelId + "-switch", class: "dmx-switch", type:"checkbox"});
        var $span = $('<span>', {class:"switch-slider round"});
        
        $onOff.append($input);
        $onOff.append($span);

        /* The Slider */

        var $slider = $('<input>' , {
                                        id:componentId + "-" + channelId + "-slider", 
                                        class:"dmx-slider", 
                                        type:"range", 
                                        min:"1", 
                                        max:"20", 
                                        step: "1", 
                                        value:"7", 
                                        class:"slider"
                                    }).css("margin", "5px");

        /* The Hex Value */

        var $spanHexValue = $('<span>', {id: componentId + "-" + channelId + "-hex-value", class:"dmx-hex-value"}).css("margin", "5px");
        
        $spanHexValue.text(sliderToHex(($slider.attr("value"))));

        $slider.on("change", function(changeEvt) {
            $spanHexValue.text(sliderToHex(changeEvt.target.value));
            var hexValues = [];
            $(".dmx-hex-value").toArray().forEach(element => {
                hexValues.push(element.innerHTML);
            });
            $("#trame-globale-text").text("[" + hexValues.join(", ") + "]");
        });
        
        $div.append($spanAdress);
        $div.append($onOff);
        $div.append($slider);
        $div.append("0x");
        $div.append($spanHexValue);
        
        $(parent).append($div);
    }

    
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
        $("#color-picker").colorpicker({
            customClass: "custom-size",
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