export const ERANDIXNEWPROJECT=()=>{

    TOASTVIEW("Please Wait");

    const HEADERS=["Name","Android","Desktop","Web","Date"];

    const INFO=[sessionStorage.getItem("Name"),sessionStorage.getItem("Android"),sessionStorage.getItem("Desktop"),sessionStorage.getItem("Web"),new Date()];
                    
    INSERTDATA(ERANDIXMANAGERLINK,"Production",HEADERS,INFO,(DataS)=>{
                    
        TOASTVIEW("Data Posted To Server");
                    
    });

};