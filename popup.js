// // popup.js

document.getElementById('submit').addEventListener('click', function (event) {
  event.preventDefault();
  var url = document.getElementById('url').value;
  document.getElementById('result').innerHTML = '';
  document.getElementById('spinner').style.display = 'block';
  console.log(url);
  fetch('http://localhost:5000/scrape', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url }),
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('spinner').style.display = 'none';
    document.getElementById('infoTable').style.display = 'table';
    var title = document.getElementById('title');
    var price = document.getElementById('price');
    var mrp = document.getElementById('mrp');
    var lp = document.getElementById('lp');
    var dis = document.getElementById('dis');
    var adisc = document.getElementById('adisc');
    var rate = document.getElementById('rate');
    var res = document.getElementById('result');

    launch=[{
      "_id": {
        "$oid": "656d6e1a404c285a74bfe020"
      },
      "product": "        Crocs Unisex Adult Navy/Pepper LiteRide 360 Clog 206708-4CC-M9W11       ",
      "price": "6,000"
    },
    {
      "_id": {
        "$oid": "656d6ea7404c285a74bfe021"
      },
      "product": "        Samsung Galaxy A54 5G (Awesome Violet, 8GB, 256GB Storage) | 50 MP No Shake Cam (OIS) | IP67 | Gorilla Glass 5 | Voice Focus | Without Charger       ",
      "price": "37,499"
    },
    {
      "_id": {
        "$oid": "656d6ea7404c285a74bfe022"
      },
      "product": "        Fire-Boltt Ninja Call Pro Plus 1.83\" Smart Watch with Bluetooth Calling, AI Voice Assistance, 100 Sports Modes IP67 Rating, 240 * 280 Pixel High Resolution       ",
      "price": "1,999"
    },
    {
      "_id": {
        "$oid": "656d6ea7404c285a74bfe023"
      },
      "product": "        AppIe Aírpoḍs Pro (2nd Generation) ​​​​​​​Apple Aírpoḍs Pro (2nd Generation) ​​​​​​​ Lightning Connector       ",
      "price": "24,900"
    },
    {
      "_id": {
        "$oid": "656d6ea7404c285a74bfe024"
      },
      "product": "        Samsung Galaxy A54 5G (Awesome Violet, 8GB, 128GB Storage) | 50 MP No Shake Cam (OIS) | IP67 | Gorilla Glass 5 | Voice Focus | Without Charger       ",
      "price": "35,499"
    },
    {
      "Position": "1",
      "product": "Galaxy Z Fold5 (Special Edition)",
      "price": "₹ 164999.00",
      "Varient": "Colour :\nClick to Collapse\nGray"
    },
    {
      "Position": "2",
      "product": "Galaxy Z Fold5",
      "price": "₹ 154999.00",
      "Varient": "Colour :\nClick to Collapse\nIcyblue"
    },
    {
      "Position": "3",
      "product": "Galaxy S24 Ultra",
      "price": "₹ 139999.00",
      "Varient": "Colour :\nClick to Collapse\nTitanium Gray"
    },
    {
      "Position": "4",
      "product": "Galaxy S24 Ultra (Special Edition)",
      "price": "₹ 139999.00",
      "Varient": "Colour :\nClick to Collapse\nTitanium Blue"
    },
    {
      "Position": "5",
      "product": "Galaxy S23 Ultra",
      "price": "₹ 124999.00",
      "Varient": "Colour :\nClick to Collapse\nGreen"
    },
    {
      "Position": "6",
      "product": "Galaxy S23 Ultra (Special Edition)",
      "price": "₹ 124999.00",
      "Varient": "Colour :\nClick to Collapse\nLime"
    },
    {
      "Position": "7",
      "product": "Galaxy S24+",
      "price": "₹ 109999.00",
      "Varient": "Colour :\nClick to Collapse\nCobalt Violet"
    },
    {
      "Position": "8",
      "product": "Galaxy S24+ (Special Edition)",
      "price": "₹ 109999.00",
      "Varient": "Colour :\nClick to Collapse\nSapphire Blue"
    },
    {
      "Position": "9",
      "product": "Galaxy Z Flip5",
      "price": "₹ 99999.00",
      "Varient": "Colour :\nClick to Collapse\nMint"
    },
    {
      "Position": "10",
      "product": "Galaxy Z Flip5 (Special Edition)",
      "price": "₹ 99999.00",
      "Varient": "Colour :\nClick to Collapse\nGray"
    },
    {
      "Position": "11",
      "product": "Galaxy S24",
      "price": "₹ 89999.00",
      "Varient": "Colour :\nClick to Collapse\nAmber Yellow"
    },
    {
      "Position": "12",
      "product": "Galaxy S24 (Special Edition)",
      "price": "₹ 79999.00",
      "Varient": "Colour :\nClick to Collapse\nSapphire Blue"
    },
    {
      "Position": "13",
      "product": "Galaxy S23",
      "price": "₹ 74999.00",
      "Varient": "Colour :\nClick to Collapse\nPhantomblack"
    },
    {
      "Position": "14",
      "product": "Galaxy S22",
      "price": "₹ 62999.00",
      "Varient": "Colour :\nClick to Collapse\nPhantom Black"
    },
    {
      "Position": "15",
      "product": "Galaxy S23 FE (Special Edition)",
      "price": "₹ 59999.00",
      "Varient": "Colour :\nClick to Collapse\nBlue"
    },
    {
      "Position": "16",
      "product": "Galaxy S23 FE",
      "price": "₹ 59999.00",
      "Varient": "Colour :\nClick to Collapse\nMint"
    },
    {
      "Position": "17",
      "product": "Galaxy S21 FE 5G",
      "price": "₹ 39999.00",
      "Varient": "Colour :\nClick to Collapse\nOlive"
    },
    {
      "Position": "18",
      "product": "Galaxy A54 5G (8GB Memory)",
      "price": "₹ 37499.00",
      "Varient": "Colour :\nClick to Collapse\nAwesome White"
    },
    {
      "Position": "19",
      "product": "Galaxy A34 5G (8GB Memory)",
      "price": "₹ 27499.00",
      "Varient": "Colour :\nClick to Collapse\nLight Green"
    },
    {
      "Position": "20",
      "product": "Galaxy A25 5G (8GB Memory)",
      "price": "₹ 26999.00",
      "Varient": "Colour :\nClick to Collapse\nBlue"
    },
    {
      "Position": "21",
      "product": "Galaxy A34 5G (6GB Memory)",
      "price": "₹ 25499.00",
      "Varient": "Colour :\nClick to Collapse\nAwesome Violet"
    },
    {
      "Position": "22",
      "product": "Galaxy F54 5G (8GB Memory)",
      "price": "₹ 24999.00",
      "Varient": "Colour :\nClick to Collapse\nStardust Silver"
    },
    {
      "Position": "23",
      "product": "Galaxy A15 5G (8GB Memory)",
      "price": "₹ 19499.00",
      "Varient": "Colour :\nClick to Collapse\nLight Blue"
    },
    {
      "Position": "24",
      "product": "Galaxy A14 5G (8GB Memory)",
      "price": "₹ 18999.00",
      "Varient": "Colour :\nClick to Collapse\nDark Red"
    },
    {
      "Position": "25",
      "product": "Galaxy F34 5G (8GB Memory)",
      "price": "₹ 17999.00",
      "Varient": "Colour :\nClick to Collapse\nElectric Black"
    },
    {
      "Position": "26",
      "product": "Galaxy M34 5G (8GB Memory)",
      "price": "₹ 17999.00",
      "Varient": "Colour :\nClick to Collapse\nWaterfall Blue"
    },
    {
      "Position": "27",
      "product": "Galaxy A14 5G (6GB Memory)",
      "price": "₹ 16999.00",
      "Varient": "Colour :\nClick to Collapse\nDark Red"
    },
    {
      "Position": "28",
      "product": "Galaxy F34 5G (6GB Memory)",
      "price": "₹ 15999.00",
      "Varient": "Colour :\nClick to Collapse\nElectric Black"
    },
    {
      "Position": "29",
      "product": "Galaxy M34 5G (6GB Memory)",
      "price": "₹ 15999.00",
      "Varient": "Colour :\nClick to Collapse\nWaterfall Blue"
    },
    {
      "Position": "30",
      "product": "Galaxy A14 5G (4GB Memory)",
      "price": "₹ 14499.00",
      "Varient": "Colour :\nClick to Collapse\nDark Red"
    },
    {
      "Position": "31",
      "product": "Galaxy A05s (6GB Memory)",
      "price": "₹ 12999.00",
      "Varient": "Colour :\nClick to Collapse\nBlack"
    },
    {
      "Position": "32",
      "product": "Galaxy A14 (4GB Memory)",
      "price": "₹ 12999.00",
      "Varient": "Colour :\nClick to Collapse\nBlack"
    },
    {
      "Position": "33",
      "product": "Galaxy A04 (4GB Memory)",
      "price": "₹ 12999.00",
      "Varient": "Colour :\nClick to Collapse\nGreen"
    },
    {
      "Position": "34",
      "product": "Galaxy A05 (6GB Memory)",
      "price": "₹ 12499.00",
      "Varient": "Colour :\nClick to Collapse\nBlack"
    },
    {
      "Position": "35",
      "product": "Galaxy A04s (4GB Memory)",
      "price": "₹ 11999.00",
      "Varient": "Colour :\nClick to Collapse\nGreen"
    },
    {
      "Position": "36",
      "product": "Galaxy M14 5G (6GB Memory)",
      "price": "₹ 11990.00",
      "Varient": "Colour :\nClick to Collapse\nIcy Silver"
    },
    {
      "Position": "37",
      "product": "Galaxy A05s (4GB Memory)",
      "price": "₹ 11499.00",
      "Varient": "Colour :\nClick to Collapse\nBlack"
    },
    {
      "Position": "38",
      "product": "Galaxy F14 5G (6GB Memory)",
      "price": "₹ 11490.00",
      "Varient": "Colour :\nClick to Collapse\nO.M.G. Black"
    },
    {
      "Position": "39",
      "product": "Galaxy M14 5G (4GB Memory)",
      "price": "₹ 10990.00",
      "Varient": "Colour :\nClick to Collapse\nBerry Blue"
    },
    {
      "Position": "40",
      "product": "Galaxy F14 5G (4GB Memory)",
      "price": "₹ 10490.00",
      "Varient": "Colour :\nClick to Collapse\nO.M.G. Black"
    },
    {
      "Position": "41",
      "product": "Galaxy A05 (4GB Memory)",
      "price": "₹ 9999.00",
      "Varient": "Colour :\nClick to Collapse\nBlack"
    },
    {
      "Position": "42",
      "product": "Galaxy A04e (3GB Memory)",
      "price": "₹ 9999.00",
      "Varient": "Colour :\nClick to Collapse\nCopper"
    },
    {
      "Position": "43",
      "product": "Galaxy F13 (4GB Memory)",
      "price": "₹ 7499.00",
      "Varient": "Colour :\nClick to Collapse\nNightsky Green"
    },
    {
      "Position": "44",
      "product": "Galaxy F04 (4GB Memory)",
      "price": "₹ 5999.00",
      "Varient": "Colour :\nClick to Collapse\nOpal Green"
    },
    {
      "Position": "45",
      "product": "Galaxy M04 (4GB Memory)",
      "price": "₹ 5999.00",
      "Varient": "Colour :\nClick to Collapse\nSea Glass Green"
    }
  ]
    n = 5
    
    for (var i = 0; i < n; i++) {
      if(launch[i]['product']==data['title']){
        var launchPrice = parseInt(launch[i]['price'].replace(/,/g, ''), 10); 
          var dataPrice = parseInt(data['price'].replace(/,/g, ''), 10);
          var disc = parseInt(data['disc'].replace(/%/g, ''), 10);
          disc = disc*(-1);

          var acd = launchPrice - dataPrice;
          var acdp = (acd * 100) / launchPrice;
        
        if(launch[i]['price']>data['price'] &  disc-acdp<1){
          title.innerHTML =data['title'];
          price.innerHTML = data['price'];
          mrp.innerHTML = data['lprice'];
          lp.innerHTML = launch[i]['price'];
          dis.innerHTML = disc + '%';
          adisc.innerHTML = acdp.toFixed(2) + '%';
          rate.innerHTML = data['rev'];
          res.innerHTML = 'No Dark Pattern Detected';
          adisc.style.backgroundColor = 'green';
          res.style.color = 'green';
        }
        else{
          title.innerHTML =data['title'];
          price.innerHTML = data['price'];
          mrp.innerHTML = data['lprice'];
          lp.innerHTML = launch[i]['price'];
          dis.innerHTML = disc + '%';
          adisc.innerHTML = acdp.toFixed(2) + '%';
          rate.innerHTML = data['rev'];
          res.innerHTML = 'Dark Pattern Detected';
          adisc.style.backgroundColor = 'red';
          res.style.color = 'red';
        }
        
      }
    }
    // res.innerHTML = 'Price: ' + data['price'] + '<br><br>' + 'MRP: ' + data['lprice'] + '<br><br>' + 'Ratings: '+ data['rev'] + '<br><br>' + 'Title: ' + data['title']; 
  })
  .catch(error => {
    document.getElementById('spinner').style.display = 'none';
    document.getElementById('infoTable').style.display = 'none';
    document.getElementById('result').innerHTML = "An Error Occured while fetching the data. Please try again.";
    console.error('Error:', error);
  });
});
// var d = '19,999';
// var l = '24,900';
// var launchPrice = parseInt(l.replace(/,/g, ''), 10); 
// var dataPrice = parseInt(d.replace(/,/g, ''), 10);


//           var acd = launchPrice - dataPrice;
//           var acdp = (acd * 100) / launchPrice;
//           console.log(acdp.toFixed(2));

// disc = '-26%';
// disc = parseInt(disc.replace(/%/g, ''), 10);
// disc = disc*(-1);
// console.log(disc-acdp<1);


