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
        
    };
   
};