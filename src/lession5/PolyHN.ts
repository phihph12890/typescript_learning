class PoLyHN {
    private static coSoHN : PoLyHN;

    private constructor(private readonly _address:string){
        this._address = _address;
    }

    public static getCoSo(): PoLyHN {
        if(PoLyHN.coSoHN == null){
            PoLyHN.coSoHN = new PoLyHN("TVB");
        }
        return PoLyHN.coSoHN;
    }
    public get address(){
        return this._address;
    }
}
let p1: PoLyHN = PoLyHN.getCoSo();
console.log(p1.address);