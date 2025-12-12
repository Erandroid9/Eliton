export const CLOUDCONNECTION=()=>{

    const ELITONCONFIG=(t,e)=>{fetch(t).then((t=>t.text())).then((t=>{localStorage.setItem(e,t)})).catch((t=>console.log(t)))};

    if (localStorage.getItem("Env") === "Dev" ) {

        ELITONCONFIG("../Projects/Projects.css","ERANDCPRO");
        ELITONCONFIG("../Projects/Projects.js","ERANDPRO");

        if (!localStorage.getItem("Packaged")) {

            localStorage.setItem("Packaged","Verified");

            setTimeout((()=>{location.reload()}),500);

            return;
            
        };

    } else {

        const BUILDPATH="https://erandroid9.github.io/Eliton/Build/";

        fetch("https://erandroid9.github.io/Eliton/Library/DataBase/Config.json")
        .then(res =>res.json())
        .then(data =>{
            data.forEach(element => {
                if (element.ID === localStorage.getItem("Config") ) {

                ELITONCONFIG(BUILDPATH+element.WebSiteCSS,"ERANDCPRO");
                ELITONCONFIG(BUILDPATH+element.WebSiteJS,"ERANDPRO");

                if (!localStorage.getItem("Packaged")) {

                    localStorage.setItem("Packaged","Verified");

                    setTimeout((()=>{location.reload()}),500);

                    return;
                    
                };

                     console.log(element)
                    
                } else {

                    const BODY=document.querySelector("body");

                    BODY.innerHTML=`

                    <p>SERVICE DOESNOT EXIST</p>
                    
                    `;
                    
                };
               
            });
        })
        .catch(err =>{

            console.log();

        })
        
    };
   
};