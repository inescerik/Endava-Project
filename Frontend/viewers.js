
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

});
function showProductAdmin(id) { 
  let placeholder = document.querySelector("#productsAdmin-output");
  let out1Restaurant = "";
  out1Restaurant += `  
  `;
placeholder.innerHTML = out1Restaurant;
  fetch('http://localhost:9191/listProducts/'+id)
  .then(function(response){
  return response.json();
  })
.then(function(products){
  var pres=0;
  for( let product of products){
    let edit = product.id+"edit";
    let del = product.id+"del"; 
    // console.log("xd"+sessionStorage.getItem('varRoleId'));
    
    if(product.productId === id)
    {
      pres=1;
      let roleIdvar=sessionStorage.getItem('varRoleId');
      if(roleIdvar == 1){ 
        if(sessionStorage.getItem('loginStatus')=='true'){
          let out1Restaurant = "";
          out1Restaurant = `
              <tr>
                  <td>${product.productName}</td>
                  <td>${product.productDetails}</td>
                  <td>${product.category}</td>
                  <td>${product.availability}</td>
                  <td>${product.quantity}</td>
                  <td>  
                      <button class="butonnRest" id="${edit} type="button" ><ion-icon name="create-outline"></ion-icon></button>
                      <button class="butonnRest"  id="${del} type="button" ><ion-icon name="trash-outline"></ion-icon></button>
                      
                  </td>
              </tr>
            `;
        placeholder.innerHTML += out1Restaurant;
        document.getElementById('AddItem').style.visibility='visible';
        document.getElementById('delItem').style.visibility='visible';
        }
      }
      
      if(roleIdvar == 2){ 
        if(sessionStorage.getItem('loginStatus')=='true'){
          let out1Restaurant = "";
          out1Restaurant = `
              <tr>
                  <td>${product.productName}</td>
                  <td>${product.productDetails}</td>
                  <td>${product.category}</td>
                  <td>${product.availability}</td>
                  <td>${product.quantity}</td>
                  <td>  
                    <button href="#" id="rese12" onclick="buttonViewers()" >Reservation</button>
                  </td>
              </tr>
            `;
            
        placeholder.innerHTML += out1Restaurant;
        // document.getElementById('AddItem').style.visibility='hidden';
        }
      }
        if(sessionStorage.getItem('loginStatus')=='false'){
          let out1Restaurant = "";
          out1Restaurant = `
              <tr>
                  <td>${product.productName}</td>
                  <td>${product.productDetails}</td>
                  <td>${product.category}</td>
                  <td>${product.availability}</td>
                  <td>${product.quantity}</td>
                  <td><p>Please, login</p></td>
              </tr>
            `;
        placeholder.innerHTML += out1Restaurant;
        // document.getElementById('addButton').disabled=true;
        // document.getElementById('AddItem').style.visibility='hidden';
        }
        
       
    }  
  }
  if(pres == 0){
    
    let out1Restaurant = "";   
    placeholder.innerHTML = out1Restaurant;
  }
  

});
fetch('http://localhost:9191/users')
.then(function(response){
	return response.json();
})
.then(function(restaurants){
  let placeholder1 = document.querySelector("#rightSiderestaurantProductsHeader");
  let out2Restaurant = "";
  out2Restaurant += `  
  `;
  let pres1=0;
  for( let restaurant of restaurants){

    let restaurantId1 = restaurant.productId;

    if(restaurantId1 === id)
    {
      pres1=1;
      let out2Restaurant = "";
      out2Restaurant = `
        <p>Restaurant name: ${restaurant.name}</p>
        `;
    placeholder1.innerHTML = out2Restaurant;
    }  
  }
  if(pres1===0){
    let out2Restaurant = "    ";   
    placeholder1.innerHTML = out2Restaurant;
  }
});
};


fetch('http://localhost:9191/users')
.then(function(response){
	return response.json();
})
.then(function(restaurants){
	let placeholder = document.querySelector("#restaurantsAdmin-output");
  let outRestaurant = "";
  outRestaurant += `  
  `;
  console.log(restaurants);

  
	for(let restaurant of restaurants){
    if(restaurant.id == sessionStorage.getItem('varId')){
      sessionStorage.setItem('varRoleId',restaurant.roleId);
      sessionStorage.setItem('varProdId',restaurant.productId);
    }
    if(sessionStorage.getItem('varRoleId') == 1){ 
      document.getElementById('AddItem').style.visibility='visible';
      document.getElementById('delItem').style.visibility='visible';
    }
		outRestaurant += `
			<tr>
      <td class="idRestaurant" onclick="showProductAdmin(${restaurant.productId})"><a id="${restaurant.id}" class="nav-link">${restaurant.name}</a></td>
			</tr>
		`;
  

	}
	placeholder.innerHTML = outRestaurant;

});

if(sessionStorage.getItem('varId')>=0){
  fetch('http://localhost:9191/users')
  .then(function(response){
    return response.json();
  })
  .then(function(restaurants){
    let placeholder3 = document.querySelector("#restaurantsAdmin-output");
    let outRestaurant4 = "";
    outRestaurant4 += `  
    `;

    // roleIdvar
    // console.log("Roleid:"+sessionStorage.getItem('varRoleId'));
    if(sessionStorage.getItem('varRoleId')==1){
      for(let restaurant of restaurants){
        if(restaurant.id == sessionStorage.getItem('varId')){
          
          
          outRestaurant4 += `
          <tr>
          <td class="idRestaurant" onclick="showProductAdmin(${restaurant.productId})"><a id="${restaurant.id}" class="nav-link">${restaurant.name}</a></td>
          </tr>
        `;
      
        }
      }
      
    
    placeholder3.innerHTML = outRestaurant4;
  }

  });
  
}

function show() {
  document.getElementById('sidebar').classList.toggle('active');
  let placeholder = document.querySelector("#productsAdmin-output");
  let out1Restaurant = "";
  out1Restaurant += `
  `;
  placeholder.innerHTML = out1Restaurant;
  let placeholder1 = document.querySelector("#rightSiderestaurantProductsHeader");
  let out2Restaurant = "";
  out2Restaurant += `  
  `;
  placeholder1.innerHTML = out2Restaurant;
};

function buttonViewers(){
  alert("Please, login.");
}
function showPopup(){
  document.getElementById('popupId').style.visibility='visible';
}
function closePopup(){
  document.getElementById('popupId').style.visibility='hidden';
}
function addItems(){
  
}
// Adaugare produs
if(sessionStorage.getItem('varProdId')>=0){
  let addButtonPop = document.getElementById('AddPopup');
  addButtonPop.addEventListener('click', () => {
          // console.log("M-ai apasat");
        let productName = document.getElementById('productNamePopup').value;
        let productDetails = document.getElementById('productDetailsPopup').value;
        let quantity = document.getElementById('quantityPopup').value;
        let category = document.getElementById('categoryPopup').value;
        let availability = document.getElementById('availabilityPopup').value;
        const newItem = {productName,productDetails,quantity,category,availability};
        

      fetch('http://localhost:9191/listProducts/'+sessionStorage.getItem('varId'))
      .then(function(response){
        return response.json();
      })
      .then(function(products){
        var presupunere=0;
        for( let product of products){
            if(product.productName ==productName ){
                presupunere=1;
            }      
      }
      if(presupunere ==0){

          fetch('http://localhost:9191/addProduct/'+sessionStorage.getItem('varProdId'),{
            method: 'POST',
            headers:{
                    "Content-Type":"application/json"
                  },
              body: JSON.stringify(newItem)
            }).then(res =>{
                  return res.json()
              })
            .then(
                  alert("Item added with succesfuly.")
                  )
            .catch(error => console.log('Eroare'))
        }
        else{
          alert("Itemul este deja.");
        }

      });

  });

}


// Sterge User

if(sessionStorage.getItem('varId')>=0){
  let deteleButonAcc = document.getElementById('delItem');
  deteleButonAcc.addEventListener('click', () => {
    // console.log("M-ai apasat");

	let productIdvar = sessionStorage.getItem('varProdId');
	const deleteItem = {productIdvar};
	// console.log(newItem);
	fetch('http://localhost:9191/deleteUser/'+sessionStorage.getItem('varProdId'),{
		method: 'POST',
		headers:{
            "Content-Type":"application/json"
        },
		body: JSON.stringify(deleteItem)
	}).then(res =>{
        return res.json()
    })
	.then(
        alert("Item deleted with succesfuly.")
        )
    .catch(error => console.log('Eroare'))
});
// location.reload();
}


let changeToLogout = document.getElementById('loginNavBarLink');
// let x = sessionStorage.getItem('loginStatus')=='true';
// console.log("is:"+x);
if(sessionStorage.getItem('loginStatus')=='true'){
  changeToLogout.textContent ="Logout"
}
if(sessionStorage.getItem('loginStatus')=='false'){
  changeToLogout.textContent ="Login";
  sessionStorage.setItem('loginStatus','false');
  sessionStorage.setItem('varRoleId',-1);
  sessionStorage.setItem('varId',-1);
  sessionStorage.setItem('varProdId',-1);
}
function checkLogin(){
  if(changeToLogout.textContent == "Logout")
  {
      sessionStorage.setItem('loginStatus','false');
      sessionStorage.setItem('loginStatus','false');
      sessionStorage.setItem('varRoleId',-1);
      sessionStorage.setItem('varId',-1);
      sessionStorage.setItem('varProdId',-1);
      // sessionStorage.setItem('varProdNameSes',null);
      changeToLogout.textContent ="Logout"
      window.location.href  = 'login.html';
  }
}