;
window.onload = function() {
    //Add style to page
    var pnStyle = document.createElement("style");
    pnStyle.innerHTML = 'pn-phone-zh-cn sn:after,pn-identification-zh-cn sn:after,pn sn:after{content: " ";}pn-math sn:after,pn-rmb sn:after{content: ",";}pn-rmb:before{content: "￥ ";}pn-dollar:before{content: "$ ";}';
    document.getElementsByTagName('head')[0].appendChild(pnStyle);
    // Main

    var oSource = {};

    (function() {
        oSource.pnDefault = document.getElementsByTagName("pn");
        oSource.pnPhoneZhCn = document.getElementsByTagName("pn-phone-zh-cn"); //Get the phone numeber elements
        oSource.pnIdentificationZhCn = document.getElementsByTagName("pn-identification-zh-cn");
        oSource.pnRmb = document.getElementsByTagName("pn-rmb");
        oSource.pnDollar = document.getElementsByTagName("pn-dollar");
        oSource.pnMath = document.getElementsByTagName("pn-math");
        oSource.pnZip = document.getElementsByTagName("pn-zip");
    })();

    oSource.pnDefault && formatDefault(oSource.pnDefault);
    oSource.pnPhoneZhCn && formatPhoneNumber(oSource.pnPhoneZhCn);
    oSource.pnIdentificationZhCn && formatIdentificationZhCn(oSource.pnIdentificationZhCn);
    // oSource.pnRmb && formatRmb(oSource.pnRmb);
    // oSource.pnDollar && formatDollar(oSource.pnDollar);
    // oSource.pnZip && formatZip(oSource.pnZip);
    // oSource.pnMath && formatMath(oSource.pnMath);


    //formatRmb
    function formatRmb(argument) {
        /* body... */
    }

    //formatDefault
    function formatDefault(obj) {
        for (var i = obj.length - 1; i >= 0; i--) {
            var _index = i;
            var newNum = [];
            newNum[i] = obj[_index].innerHTML.replace(/\D*/g, '');
            var nL = newNum[_index].length / 4; // 根据字符长度计算分段数
            obj[_index].innerHTML = "";
            for (var n = 1; n <= nL + 1; n++) {
                obj[_index].innerHTML += "<sn>" + newNum[_index].substring((n - 1) * 4, (n * 4)) + "</sn>";
            };
        };
    };
    //Identification number
    function formatIdentificationZhCn(obj) {
        for (var i = obj.length - 1; i >= 0; i--) {
            var newNum = [];
            newNum[i] = obj[i].innerHTML.replace(/\D*/g, '');
            if (newNum[i].length == 17) {
                obj[i].innerHTML = "<sn>" + newNum[i].substring(0, 6) + "</sn><sn>" + newNum[i].substring(6, 10) + "</sn><sn>" + newNum[i].substring(10, 14) + "</sn><sn>" + newNum[i].substring(14, 18) + "X</sn>";
            } else if (newNum[i].length == 18) {
                obj[i].innerHTML = "<sn>" + newNum[i].substring(0, 6) + "</sn><sn>" + newNum[i].substring(6, 10) + "</sn><sn>" + newNum[i].substring(10, 14) + "</sn><sn>" + newNum[i].substring(14, 18) + "</sn>";
            };
        };
    };

    //Format the number
    function formatPhoneNumber(obj) {
        for (var i = obj.length - 1; i >= 0; i--) {
            var sourceNum = [];
            sourceNum[i] = obj[i].innerHTML.replace(/\D*/g, ''); //Make sure the numbers are clean

            var ext = [];
            var host = [];

            var regIsZhcnPhone = /^(13[0-9]|15[0-9]|17[0678]|18[0-9]|14[57])[0-9]{8}$/;
            var regIsZhcnTelMun = /^(010|02[0-9])[0-9]{8}$/;
            var regIsZhcnTel = /^(0[3-9][0-9]{2})[0-9]{7}$/;
            var regIsZhcnTelSpe = /^([48]00)[0-9]{7}$/;

            if (sourceNum[i].substring(0, 3) == 400 || sourceNum[i].substring(0, 3) == 800) {
                ext[i] = sourceNum[i].slice(10); //Get ext
                host[i] = sourceNum[i].substring(0, 10);
            } else {
                ext[i] = sourceNum[i].slice(11); //Get ext
                host[i] = sourceNum[i].substring(0, 11);
            };

            if (host[i].match(regIsZhcnPhone)) { //Is mobile phone 
                obj[i].innerHTML = "<sn>" + host[i].substring(0, 3) + "</sn><sn>" + host[i].substring(3, 7) + "</sn><sn>" + host[i].substring(7, 11) + "</sn>";
            } else if (host[i].match(regIsZhcnTelMun)) { //Is Municipality telephone
                if (ext[i]) {
                    obj[i].innerHTML = "<sn>" + host[i].substring(0, 3) + "</sn><sn>" + host[i].substring(3, 7) + "</sn><sn>" + host[i].substring(7, 11) + "</sn><sn>" + ext[i] + "</sn>"; //Add ext number
                } else {
                    obj[i].innerHTML = "<sn>" + host[i].substring(0, 3) + "</sn><sn>" + host[i].substring(3, 7) + "</sn><sn>" + host[i].substring(7, 11) + "</sn>";
                }
            } else if (host[i].match(regIsZhcnTel)) { //Is other  telephone
                if (ext[i]) {
                    obj[i].innerHTML = "<sn>" + host[i].substring(0, 4) + "</sn><sn>" + host[i].substring(4, 8) + "</sn><sn>" + host[i].substring(8, 11) + "</sn><sn>" + ext[i] + "</sn>"; //Add ext number
                } else {
                    obj[i].innerHTML = "<sn>" + host[i].substring(0, 4) + "</sn><sn>" + host[i].substring(4, 8) + "</sn><sn>" + host[i].substring(8, 11) + "</sn>";
                }
            } else if (host[i].match(regIsZhcnTelSpe)) { //Is 400 or 800 telephone
                if (ext[i]) {
                    obj[i].innerHTML = "<sn>" + host[i].substring(0, 3) + "</sn><sn>" + host[i].substring(3, 7) + "</sn><sn>" + host[i].substring(7, 10) + "</sn><sn>" + ext[i] + "</sn>"; //Add ext number
                } else {
                    obj[i].innerHTML = "<sn>" + host[i].substring(0, 3) + "</sn><sn>" + host[i].substring(3, 7) + "</sn><sn>" + host[i].substring(7, 10) + "</sn>";
                }
            } else {
                obj[i].innerHTML = "<sn>" + host[i].substring(0, 3) + "</sn><sn>" + host[i].substring(3, 7) + "</sn><sn>" + host[i].substring(7, 10) + "</sn>";
            }; // 外国人的手机号 暂时不支持	
        };
    };
};
