AFRAME.registerComponent('iot', {
    schema: {
        // changingValues: {
        //     type: 'array',
        //     default: [2, 1.3, 1.5, 1, 0.5]
        // },
        // offset: {
        //     type: 'int',
        //     default: 0
        // },
        // numberOfBox: {
        //     type: 'int',
        //     default: 4
        // },
        // posXOfBoxes: {
        //     type: 'array',
        //     default: [0, 0.2, 0.4, 0.6]
        // },
        // posXOfTexts: {
        //     type: 'array',
        //     default: [-0.1, 0.1, 0.3, 0.5]
        // },
        // idOfLines: {
        //     type: 'array',
        //     default: ['graph_line0', 'graph_line1', 'graph_line2', 'graph_line3', 'graph_line4', 'graph_line5', 'graph_line6']
        // },
        // idOfLines2: {
        //     type: 'array',
        //     default: ['graph_line0', 'graph_line1', 'graph_line2', 'graph_line3', 'graph_line4', 'graph_line5', 'graph_line6']
        // },
        // idOfBoxes: {
        //     type: 'array',
        //     default: ['box0', 'box1', 'box2', 'box3']
        // },
        // idOfBoxes2: {
        //     type: 'array',
        //     default: ['box0', 'box1', 'box2', 'box3']
        // },
        // idOfTexts: {
        //     type: 'array',
        //     default: ['text_activeEnergy', 'text1', 'text2', 'text3']
        // },
        // idOfTexts2: {
        //     type: 'array',
        //     default: ['text_activeEnergy', 'text1', 'text2', 'text3']
        // },
        // idOfTextHeights: {
        //     type: 'array',
        //     default: ['text_height0', 'text_height1', 'text_height2', 'text_height3', 'text_height4']
        // },
        // idOfTextHeights2: {
        //     type: 'array',
        //     default: ['text_height0', 'text_height1', 'text_height2', 'text_height3', 'text_height4']
        // }
    },

    init: function() {
        var lost = document.querySelector("#lost");
        lost.style.display = "none";

        var text_activeEnergy = document.querySelector('#text_activeEnergy');
        var text_currentR = document.querySelector('#text_currentR');
        var text_currentS = document.querySelector('#text_currentS');
        var text_currentT = document.querySelector('#text_currentT');
        var text_manufacturer = document.querySelector('#text_manufacturer');
        var text_modelNumber = document.querySelector('#text_modelNumber');
        var text_powerFactorR = document.querySelector('#text_powerFactorR');
        var text_powerFactorS = document.querySelector('#text_powerFactorS');
        var text_powerFactorT = document.querySelector('#text_powerFactorT');
        var text_serialNumber = document.querySelector('#text_serialNumber');
        var text_tensionR = document.querySelector('#text_tensionR');
        var text_tensionS = document.querySelector('#text_tensionS');
        var text_tensionT = document.querySelector('#text_tensionT');


        var url_actEnergy = "https://event.api.iot-accelerator.ericsson.net/ddm/api/v3/resources/8e2c74a4-e9b4-4ce5-80a7-509620b3bde9";
        var url_curR = "https://event.api.iot-accelerator.ericsson.net/ddm/api/v3/resources/d2ec3713-67b4-465d-b546-4bd84dd14911";
        var url_curS = "https://event.api.iot-accelerator.ericsson.net/ddm/api/v3/resources/7dbb151f-9dd9-4af2-b159-c34d7a3d1b73";
        var url_curT = "https://event.api.iot-accelerator.ericsson.net/ddm/api/v3/resources/9a8664ad-c204-4a54-a37a-6303492802bb";
        var url_mnfct = "https://event.api.iot-accelerator.ericsson.net/ddm/api/v3/resources/54395652-9899-4d38-b7df-5fede2004c49";
        var url_modNum = "https://event.api.iot-accelerator.ericsson.net/ddm/api/v3/resources/ffd4aa62-7eb1-4159-8c77-4c80ff04cab9";
        var url_powFacR = "https://event.api.iot-accelerator.ericsson.net/ddm/api/v3/resources/48891864-94fe-451f-886a-2f078b5333c9";
        var url_powFacS = "https://event.api.iot-accelerator.ericsson.net/ddm/api/v3/resources/fe3a0443-7266-4a31-8af2-274d73f84efb";
        var url_powFacT = "https://event.api.iot-accelerator.ericsson.net/ddm/api/v3/resources/3c1979bd-25e2-416f-881f-963bbb29af0d";
        var url_serNum = "https://event.api.iot-accelerator.ericsson.net/ddm/api/v3/resources/acc49213-5f21-4259-913e-13e0b38c6d3a";
        var url_tensR = "https://event.api.iot-accelerator.ericsson.net/ddm/api/v3/resources/a1a3f982-3e29-42f2-9141-bdc663729e8a";
        var url_tensS = "https://event.api.iot-accelerator.ericsson.net/ddm/api/v3/resources/2227e670-7904-40e5-afdd-98e9b2c0f90d";
        var url_tensT = "https://event.api.iot-accelerator.ericsson.net/ddm/api/v3/resources/817939e8-2b6f-4494-ab75-633630d4293b";



        this.httpGetAsync(url_actEnergy, text_activeEnergy);
        this.httpGetAsync(url_curR, text_currentR);
        this.httpGetAsync(url_curS, text_currentS);
        this.httpGetAsync(url_curT, text_currentT);
        this.httpGetAsync(url_mnfct, text_manufacturer);
        this.httpGetAsync(url_modNum, text_modelNumber);
        this.httpGetAsync(url_powFacR, text_powerFactorR);
        this.httpGetAsync(url_powFacS, text_powerFactorS);
        this.httpGetAsync(url_powFacT, text_powerFactorT);
        this.httpGetAsync(url_serNum, text_serialNumber);
        this.httpGetAsync(url_tensR, text_tensionR);
        this.httpGetAsync(url_tensS, text_tensionS);
        this.httpGetAsync(url_tensT, text_tensionT);

        var camera = document.getElementById("a-marker-camera");

        // Service Worker
        if ('serviceWorker' in navigator) {

            navigator.serviceWorker.register('service-worker.js').then(function() {


                console.log("SW registered--------------");
            });

        }

        var marker_vuforia = document.getElementById("vuforia");

        var m = document.querySelector("a-marker-camera");



        m.addEventListener("markerFound", (e) => {
            var switchlabel = document.querySelector("#switch");
            var text = document.querySelector("#text");
            var banner = document.querySelector("#banner");
            var logo = document.querySelector("#logo");
            var inputcheck = document.querySelector("input");
            var flag = false;
            logo.style.display = "block";
            switchlabel.style.display = "block";
            text.style.display = "block"
            banner.style.display = "block";
            var x = marker_vuforia.getAttribute("position");


            inputcheck.addEventListener("change", (e) => {
                if (inputcheck.checked) {
                    flag = true;

                    this.graphDesign(flag);
                } else {
                    flag = false;

                    this.graphDesign(flag);
                }
            });
            console.log("found")
        });

        m.addEventListener("markerLost", (e) => {

            var switchlabel = document.querySelector("#switch");
            var text = document.querySelector("#text");
            var banner = document.querySelector("#banner");
            var logo = document.querySelector("#logo");
            logo.style.display = "none";
            switchlabel.style.display = "none";
            text.style.display = "none"
            banner.style.display = "none";


            console.log("lost")
        });

    },
    tick: function() {

    },
    httpGetAsync(theUrl, txtVar) {
        var xmlHttp = new XMLHttpRequest();

        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                var json_data = JSON.parse(xmlHttp.responseText);


            if (json_data.LatestMeasurement.v == null) {
                txtVar.setAttribute('value', json_data.LatestMeasurement.sv);
            } else {
                txtVar.setAttribute('value', json_data.LatestMeasurement.v);
            }


            console.log("json_data", json_data);
            console.log("txtVar", txtVar);
            console.log("Latest", json_data.LatestMeasurement.v);
        }
        xmlHttp.open("GET", theUrl, true); // true for asynchronous
        xmlHttp.setRequestHeader("Authorization", "Basic YzZkNGYwNjQtYzQyYi00NmU3LTlmODItZjc4MzhmMWRlYjZlQDAyM2Q5YTgxLTMzMDAtNGI0Yy1iM2ZiLTU4NTc5ZWY5NzJlYzpOUFFhVjM3Q1B5RTVta3hK");
        xmlHttp.setRequestHeader("X-DeviceNetwork", "d5bceeb3-5df6-463f-a3f0-e0e3c7b4a598");

        xmlHttp.send(null);
    },

    graphDesign(flag) {
        var background = document.querySelector("#background");

        if (flag === true) {
            background.setAttribute('opacity', '0.4');
        } else {
            background.setAttribute('opacity', '0');
        }


        // for (var t = 0; t < this.data.idOfLines.length; t++) {
        //     this.data.idOfLines2[t] = document.getElementById(this.data.idOfLines[t]);
        //     if (flag === true) {
        //         this.data.idOfLines2[t].setAttribute("line", "opacity:0.2");
        //     } else {
        //         this.data.idOfLines2[t].setAttribute("line", "opacity:0");
        //     }



        // }


        // for (var k = 0; k < this.data.changingValues.length; k++) {
        //     this.data.idOfTextHeights2[k] = document.getElementById(this.data.idOfTextHeights[k]);
        //     this.initTextHeightAttributes(this.data.idOfTextHeights2[k], this.data.changingValues[k])
        //     if (flag === true) {
        //         this.data.idOfTextHeights2[k].setAttribute('opacity', '1')
        //     } else {
        //         this.data.idOfTextHeights2[k].setAttribute('opacity', '0')
        //     }

        // }

        // var x = 0;
        // for (var i = 0; i < this.data.numberOfBox; i++) {
        //     this.data.idOfBoxes2[i] = document.getElementById(this.data.idOfBoxes[i]);

        //     this.data.idOfTexts2[i] = document.getElementById(this.data.idOfTexts[i]);

        //     this.initTextAttributes(this.data.idOfTexts2[i], this.data.posXOfTexts[i])

        //     if (flag === true) {
        //         this.data.idOfBoxes2[i].setAttribute('opacity', '1');
        //         this.data.idOfTexts2[i].setAttribute('opacity', '1');
        //     } else {
        //         this.data.idOfBoxes2[i].setAttribute('opacity', '0');
        //         this.data.idOfTexts2[i].setAttribute('opacity', '0');
        //     }
        // }



        // for (var j = 0; j < this.data.numberOfBox; j++) {

        //     x = Math.floor(Math.random() * this.data.changingValues.length);
        //     this.changeValues(x, box0, this.data.posXOfBoxes[0]);
        //     x = Math.floor(Math.random() * this.data.changingValues.length);
        //     this.changeValues(x, box1, this.data.posXOfBoxes[1]);
        //     x = Math.floor(Math.random() * this.data.changingValues.length);
        //     this.changeValues(x, box2, this.data.posXOfBoxes[2]);
        //     x = Math.floor(Math.random() * this.data.changingValues.length);
        //     this.changeValues(x, box3, this.data.posXOfBoxes[3]);

        // }





    },
    // changeValues: function(index2, boxx, poss) {
    //     var a = this.data.changingValues;
    //     var index = index2;
    //     var box = boxx;
    //     var pos = poss;
    //     setInterval(function() {

    //         box.setAttribute('height', a[index]);
    //         box.setAttribute('position', {
    //             x: pos,
    //             y: 1.5,
    //             z: (-a[index] / 2) + 0.9
    //         });

    //     }, 500 + this.data.offset)
    //     this.data.offset += 500;
    // },
    // initTextAttributes: function(text, textXPos) {
    //     text.setAttribute('position', {
    //         x: textXPos,
    //         y: 1.5,
    //         z: 1
    //     });
    // },
    // initTextHeightAttributes: function(textHeight, textHeightYPos) {
    //     textHeight.setAttribute('position', {
    //         x: -0.8,
    //         y: 1.5,
    //         z: -(textHeightYPos) + 0.9
    //     });
    //     textHeight.setAttribute('color', 'red');
    //     textHeight.setAttribute('rotation', '-90 0 0');
    //     textHeight.setAttribute('value', textHeightYPos);

    // }

});