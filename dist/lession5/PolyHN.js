"use strict";
var PoLyHN = /** @class */ (function () {
    function PoLyHN(_address) {
        this._address = _address;
        this._address = _address;
    }
    PoLyHN.getCoSo = function () {
        if (PoLyHN.coSoHN == null) {
            PoLyHN.coSoHN = new PoLyHN("TVB");
        }
        return PoLyHN.coSoHN;
    };
    Object.defineProperty(PoLyHN.prototype, "address", {
        get: function () {
            return this._address;
        },
        enumerable: false,
        configurable: true
    });
    return PoLyHN;
}());
var p1 = PoLyHN.getCoSo();
console.log(p1.address);
