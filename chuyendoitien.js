function convert(){
    let amount=document.getElementById("amount").value;
    let from=document.getElementById("from").value;
    let to=document.getElementById("to").value;
    let ketqua;

    if (from=="Vietnam" && to=="Vietnam"){
        ketqua="Result:"+ amount + "vnd";
    }
    else if (from=="USD" && to=="USD"){
        ketqua="Result:"+ amount + "usd";
    }
    else if (from=="USD" && to=="Vietnam") {
        ketqua= "Result:" + (amount * 23000) + "vnd";
    }
    else {
        ketqua= "Result:" + (amount/23000) + "usd";
    }
    document.getElementById("ketqua").innerHTML=ketqua;
}
