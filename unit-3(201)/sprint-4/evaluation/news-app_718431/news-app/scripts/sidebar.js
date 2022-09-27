let getData = () => {
    let data = JSON.parse(localStorage.getItem("user"));
    let sidebar = document.getElementById("sidebar");
  
    let img = document.createElement("img");
    let h2 = document.createElement("h2");
    let h4 = document.createElement("h4");
    let h3 = document.createElement("h3");
    let div = document.createElement("div");
    
          img.src = data.img;
              h2.innerText = data.name;
    h4.innerText =data.email;
      if (data.country == "nz") {
      h3.innerText="NewZealand"
  }
    else  if (data.country == "ch") {
      h3.innerText="China"
  }
     else if (data.country == "in") {
      h3.innerText="India"
  }
    else  if (data.country == "us") {
      h3.innerText="USA"
  }
     else if (data.country == "uk") {
          h3.innerText = "UK"
  };
      div.append(img,h2,h4,h3)
  sidebar.append(div)
  };
  
  getData()