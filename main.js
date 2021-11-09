class Kedvenc{
    constructor(szoveg,meret,betuszin,hatterszin){
        this.szoveg=szoveg;
        this.meret=meret;
        this.betuszin=betuszin;
        this.hatterszin=hatterszin;
        this.id=0;
    }

    setId(id){
        this.id=id;
    }
}
let kedvencek=[];
function letrehoz() {
    document.getElementById("kedvencek").innerHTML="";
    var k=new Kedvenc(document.getElementById("szoveg").value,document.getElementById("meret").value,document.getElementById("betuszin").value,document.getElementById("hatterszin").value)
    k.setId(kedvencek.length)
    hozzaad(k)
    kedvencek.forEach(elem => {
        document.getElementById("kedvencek").innerHTML+="<button onclick='visszatolt()' value="+elem.id+">"+elem.id+"</button>"
    });

}
function hozzaad(kedvenc) {
    kedvencek.push(kedvenc);
}
function visszatolt(e) {
    
}
function ellenorzes(){
    if(document.getElementById("szoveg").value===""){
        szoveghiba();
    }if(document.getElementById("meret").value<=0||document.getElementById("meret").value===""){
        merethiba();
    }else{
        return true;
    }
}
function szoveghiba(){
    document.getElementById("szoveghiba").innerHTML="A mintaszöveg nem lehet üres!";
    document.getElementById("szoveghiba").style.color="red";
}
function merethiba(){
    document.getElementById("merethiba").innerHTML="A méret nem lehet 0, vagy annál kisebb!";
    document.getElementById("merethiba").style.color="red";
}
function szoveg(){
    document.getElementById("szoveghiba").innerHTML="";
    ellenorzes();
    document.getElementById("mintaszoveg").innerHTML=document.getElementById("szoveg").value;
}
function meret(){
    document.getElementById("merethiba").innerHTML="";
    ellenorzes();
    document.getElementById("mintaszoveg").style.fontSize=document.getElementById("meret").value+"pt";
}
function hatterszin(){
    document.getElementById("minta").style.backgroundColor=document.getElementById("hatterszin").value;
}
function betuszin(){
    document.getElementById("mintaszoveg").style.color=document.getElementById("betuszin").value;
}
function alaphelyzet(){
    document.getElementById("szoveg").value="Árvíztűrő tükörfúrógép"
    document.getElementById("meret").value=12;
    document.getElementById("betuszin").value="#000000";
    document.getElementById("hatterszin").value="#FFFFFF";
    szoveg();
    meret();
    betuszin();
    hatterszin();
}
function init() {
    alaphelyzet();
    document.getElementById("szoveg").addEventListener("keyup", szoveg);
    document.getElementById("meret").addEventListener("keyup", meret);
    document.getElementById("betuszin").addEventListener("input", betuszin);
    document.getElementById("hatterszin").addEventListener("input", hatterszin);
    document.getElementById("alaphelyzet").addEventListener("click",alaphelyzet)
    document.getElementById("kedvenc").addEventListener("click",letrehoz)
}
document.addEventListener("DOMContentLoaded", init);