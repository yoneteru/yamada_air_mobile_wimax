// ==UserScript==
// @name        YAMADA Air Mobile WiMAX 通信量表記変換くん
// @namespace   https://portal.yairmobile.jp/
// @description 通信量表記をバイト数に変換して表示します
// @match       https://portal.yairmobile.jp/online/WiPTPortalMenuPacketReference.do
// @version     1.0.0
// @author      Teruhito YONEYAMA <teruhito.yoneyama+github@gmail.com>
// ==/UserScript==

// パケットをバイトに変換する
function packetsToBytes(packets) {
    return (packets / 8192); // MBytes
}

// number クラスの要素を全部取得
var element = document.getElementsByClassName('number');
for (var i = 0; i < element.length; i++) {
    var text = element[i].innerText.replace(/[\n\r]/g,""); // 変な改行を取り除く
    if (!text.match(/[^0-9]+/)) {
        element[i].innerText = Number(packetsToBytes(text).toFixed(2)).toLocaleString() + " MB";
    }
}
