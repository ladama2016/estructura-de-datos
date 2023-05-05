fetch(`json.json`)
.then(data => data.json())
.then (data=> 
    {
        let keys = Object.keys(data.menu);

        for(let i=0; i<= 7; i++)
        {
          let key=keys[i];

                let link = document.createElement("a");
                link.setAttribute("href",data.menu[key]);
                let menu = document.createElement("h3");
                let texto = document.createTextNode("Practica "+key)
                menu.appendChild(texto);
                link.appendChild(menu);
                
                document.getElementsByClassName('menu-mini')[0].appendChild(link);

        }
        
    })


