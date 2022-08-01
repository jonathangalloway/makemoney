function makeMoney(){
    let number = document.querySelector("#coinNum").value;
    let typeOfCoin = document.querySelector("#coins").value;
    let coinHolder =document.querySelector("#coinHolder");
    //console.log(number, typeOfCoin);
    for (let i = 0; i < number; i++){ 
        //console.log(typeOfCoin);
        let coin = document.createElement("span")
        if(typeOfCoin === "Penny"){
            coin.classList.add("Penny")
        }else if
        (typeOfCoin === "Nickel"){
            coin.classList.add("Nickle")
        }else if
        (typeOfCoin === "Dime"){
            coin.classList.add("Dime")
        }else if
        (typeOfCoin === "Quarter"){
            coin.classList.add("Quarter")
        }
            coinHolder.append(coin);
    
        

        //<span class="dot"></span>
    }
}






//const data = new FormData(form);
// let penny = data.get(`penny`);
// let nickle = data.get(`nickle`);
// let dime = data.get(`dime`);
// let quarter = data.get(`quarter`);
