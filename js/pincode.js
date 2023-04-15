// COWIN API Automation -  Node JS
const btn2 = document.getElementById('btn2');
const btn1 = document.getElementById('btn1');
let vaccineInfo = document.getElementById('vaccineInfo');
const pincode = document.getElementById('pincode');
const availability = document.getElementById('availability');
const age = document.getElementById('age');
const doses = document.getElementById('doses');
const vaccine = document.getElementById('vaccine');
const center = document.getElementById('center');
const from = document.getElementById('from');
const to = document.getElementById('to');


async function changeColor() {
  // console.log(pincode.value);
  const pincodeValue = pincode.value;
  //  try{
    const response = await fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincodeValue}&date=31-03-2021`);
     let json_data = await response.json(response.data);
      
        let detail = json_data.sessions;
        let juagd = 1;
       
        let check=true;
        detail.map((item)=>{
            if(item.available_capacity>0){
                if(check)
                {
                    console.log(`Total centeres availability: ${detail.length}`);
                    availability.textContent = `Total centeres availability: ${juagd}`;
                    check=false;
                }
    
                console.log("Centre: ",item.name);
                center.textContent = `Centre: ${item.name}`;

                console.log("Total Doses: ",item.available_capacity);
                doses.textContent = `Total Doses: ${item.available_capacity}`;

                console.log("Vaccine: ",item.vaccine);
                vaccine.textContent = `Vaccine: ${item.vaccine}`;

                console.log("Age Limit: ",item.min_age_limit);
                age.textContent = `Age Limit: ${item.min_age_limit}`;

                console.log("from: ",item.from);
                from.textContent = `from: ${item.from}`;

                console.log("to: ",item.to);
                to.textContent = `to: ${item.to}`;

                vaccineInfo.style.display = "block";
                vaccineInfo.style.backgroundColor = "green";
                vaccineInfo.style.color = "white";
                vaccineInfo.style.padding = "10px";
                vaccineInfo.style.margin = "10px";
                vaccineInfo.style.borderRadius = "10px";
                vaccineInfo.style.textAlign = "center";
                vaccineInfo.style.fontSize = "20px";
                vaccineInfo.style.fontWeight = "bold";
                
                vaccineInfo.style.display = "block";
                pincode.style.display = "none";
                btn1.style.display = "none";
                btn2.style.display = "block";
                btn2.display.textAlign = "center";
                
}
        })
  //  }
    // catch(error){
    //   pincode.style.display = "none";
    //             btn1.style.display = "none";
    //             alert("Sorry, No Doses Available",error);
    //       window.location.reload();

    // }
}

btn2.addEventListener('click', () => {
  window.location.reload();
});

const express = require('express');
const axios = require('axios');
const path = require('path');
const { domainToUnicode } = require('url');

const app = express();


// set view engine
app.set('view engine', 'hbs');

const PORT=3001;


  // app.get('/', (req, res) => {
  //   app.use(express.static(__dirname + '/public'));
  // });
  
  app.get('/covid/', async (req, res, next) => {
    try {
      const pin = req.query.pincode;
      console.log("start");
      const response = await axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=31-03-2021`);
      //  console.log("hi");
     
     
        //   console.log("hello");
        // const listData = document.getElementsByTagName('li');
        // console.log(listData);
          
      // if(response)
      // {
        // let json_data = res.json(response.data);
        
        // let detail = response.data.sessions;
        // console.log(detail);
        
      //   let check=true;
      //   detail.map((item)=>{
      //       if(item.available_capacity>0){
      //           if(check)
      //           {
      //               console.log(`Total centeres availability: ${detail.length}`);
      //               check=false;
      //           }
    
      //           console.log("Centre: ",item.name);
      //           console.log("Total Doses: ",item.available_capacity);
      //           console.log("Vaccine: ",item.vaccine);
      //           console.log("Age Limit: ",item.min_age_limit);
      //           console.log("from: ",item.from);
      //           console.log("to: ",item.to);

                res.render('index',{
                  user: 'Shiwang'
                    }); 
            }
            // else
            // {
            //   console.log("No Doses Available");
            //     return res.render('https://www.google.com/');
                
            // }
           
        // })

       
    
     catch (error) {
      console.error(error);
      // res.render('error', { error });
       res.render('https://www.google.com/');
      // res.status(500).json({ error: 'An error occurred' });
    }
    
  });
  
  app.listen(PORT, () => {
    console.log('Server is running on port 3001');
  });