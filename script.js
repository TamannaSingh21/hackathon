var baseUrl = "https://api.coinranking.com/v2/coins";
var proxyUrl = "https://cors-anywhere.herokuapp.com/";
var apiKey = "coinrankingda837f003cf04f2110be4fb8d169acf4b0f2e0293bc68167";
var apiUrl = `${proxyUrl}${baseUrl}`;
console.log(apiUrl);

fetch(`${proxyUrl}${baseUrl}`, { 
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': `${apiKey}`,
      'Access-Control-Allow-Origin': "*"
    }
})
  .then((response) => {
    if (response.ok) {
      response.json().then((json) => {
        console.log(json.data);
        let coinsData = json.data.coins;

        if (coinsData.length > 0) {
          var cryptoCoin = "";
          var photoGrid ="";
          var calculateCoinPrice ="";
        }
      var i = 0;
      //For Loop Starts
        coinsData.forEach((coin) => {
          if(i<5){
            photoGrid +=`<div class="photo"><img src="${coin.iconUrl}"></div>`;
            calculateCoinPrice+=`<option value="${coin.uuid}" id="${coin.uuid}">${coin.name}</option>`;
            cryptoCoin += "<tr>";
          
            
            cryptoCoin += `<td onclick="mypop()">${coin.name}</td>`;
            cryptoCoin += `<td> ${coin.btcPrice} </td>`;
            cryptoCoin += `<td> ${coin.marketCap}</td>`;
            cryptoCoin += `<td> ${Math.round(coin.price)} Billion</td>`;
          }
          i++;
        });
        //For Loop Ends
        document.getElementById("convert").innerHTML = calculateCoinPrice;
        document.getElementById("data").innerHTML = cryptoCoin;
        document.getElementById("showImages").innerHTML = photoGrid;

      });
    }
  })
  .catch((error) => {
    console.log(error);
  });

// function mypop()
//   {
//      var popup = document.getElementById("myPopup");
//   popup.classList.toggle("show");
//   }
  function getChecked(){
    var SelectedCoin = document.getElementById("convert");
    var calculatePriceInput = document.getElementById("calculatePrice");
    ValueInput = calculatePriceInput.value;
    var selCoinValue = SelectedCoin.value;
   // var SelectedReferencecurrencies = document.getElementById("referencecurrencies");
    //var selRefCoinValue = SelectedReferencecurrencies.value;
    //var baseUrl = "https://api.coinranking.com/v2/coin/"+selCoinValue+"/exchanges?referenceCurrencyUuid="+selRefCoinValue;
    var baseUrl = "https://api.coinranking.com/v2/coin/"+selCoinValue+"/price";
    var proxyUrl = "https://cors-anywhere.herokuapp.com/";
    var apiKey = "coinrankingda837f003cf04f2110be4fb8d169acf4b0f2e0293bc68167";
    var apiUrl = `${proxyUrl}${baseUrl}`;
    fetch(`${proxyUrl}${baseUrl}`, { 
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
         'x-access-token': `${apiKey}`,
        'Access-Control-Allow-Origin': "*"
      }
  })
    .then((response) => {
      if (response.ok) {
        response.json().then((json) => {
         // console.log(json.data);
          let calPrice = json.data.price;
         let priceCalculated = Math.round(ValueInput *calPrice);
         document.getElementById("resultPrice").innerHTML = priceCalculated;
         var Time = new Date(json.data.timestamp).toLocaleTimeString("en-US")
         document.getElementById("hours").innerHTML = Time;
         
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }


  // Refrence Currencies

var Url = "https://api.coinranking.com/v2/reference-currencies";
var proxyUrl = "https://cors-anywhere.herokuapp.com/";
var apiKey = "coinrankingda837f003cf04f2110be4fb8d169acf4b0f2e0293bc68167";
var apiUrl = `${proxyUrl}${Url}`;
console.log(apiUrl);
fetch(`${proxyUrl}${Url}`, { 
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
     'x-access-token': `${apiKey}`,
      'Access-Control-Allow-Origin': "*"
    }
})
.then((response) => {
  if (response.ok) {
    response.json().then((json) => {
      console.log(json.data);
      let refCurrencies = json.data.currencies;

      if (refCurrencies.length > 0) {
        var calcurrencies = "";
      }
    var i = 0;
    //For Loop Starts
    refCurrencies.forEach((calprice) => {
      if(i<5){
       
        calcurrencies += `<option value="${calprice.uuid}" id="${calprice.uuid}">${calprice.name}</option>`;
      
      }
      i++;

      });
      //For Loop Ends
      document.getElementById("referencecurrencies").innerHTML = calcurrencies;
     

    });
  }
})
  .catch((error) => {
    console.log(error);
  });