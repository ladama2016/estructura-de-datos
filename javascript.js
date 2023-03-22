fetch(`json.json`)
.then(data => data.json())
.then (data=> 
    {
        let keys = Object.keys(data.sub_menu);
        let ks=Object.keys(data.menu);

        for(let i=3; i>=0; i--)
        {
            let k=ks[i];

            let menu = document.createElement('li')
                let ref= document.createElement('a')
                let texto = document.createTextNode(''+data.menu[k])
                menu.appendChild(ref);
                menu.appendChild(texto);

            if(i==3 ||i==2||i==0)
            {
                let sub = document.createElement('ul')
                sub.classList.add("sub-mini"+i);
                menu.appendChild(sub);
                
            }

            else 
            {

            }

            document.getElementsByClassName('menu-mini')[0].appendChild(menu);

        }

        for(let i=18; i>= 0; i--)
        {
          let key=keys[i];

                let menu = document.createElement('li')
                let ref= document.createElement('a')
                let texto = document.createTextNode(''+data.sub_menu[key])
                menu.appendChild(ref);
                menu.appendChild(texto);

                if(i>=12)
                {
                    document.getElementsByClassName('sub-mini3')[0].appendChild(menu);
                }

                if(i<=11)
                {
                    document.getElementsByClassName('sub-mini2')[0].appendChild(menu);
                }

                if(i<7)
                {
                    document.getElementsByClassName('sub-mini0')[0].appendChild(menu);
                }

        }
        
    })


