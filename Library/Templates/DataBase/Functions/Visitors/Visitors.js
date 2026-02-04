export const  VISITORS=()=>{

    const HEADERS=["DeviceName","DeviceTime","VisitedTimes","Platform","Language","Screen","FullData","Approved"];

    CREATETABLE(ERANDIXSITEMANAGERLINK,localStorage.getItem("Config"),()=>{

        GETDATA(ERANDIXSITEMANAGERLINK,localStorage.getItem("Config"),(Data)=>{
    
            FINDER(Data,"ID",localStorage.getItem("VisitorID"),(User)=>{
    
                CONDITION(User === false,()=>{
    
                    DEVICE((Datata)=>{
    
                        const INFO=[Datata.userAgent,`[${new Date()}]`,1,Datata.platform,Datata.language,Datata.screen,Datata,"Approved"];
                        
                        INSERTDATA(ERANDIXSITEMANAGERLINK,localStorage.getItem("Config"),HEADERS,INFO,(DataBack)=>{
    
                            DATASTORE(" ","VisitorID",DataBack.uniqueId);
    
                        });
    
                    });
    
                },()=>{
    
                    DEVICE((Datata)=>{
    
                        JSONADDER(User.DeviceTime,[new Date()],(Info)=>{
    
                            const INFO=[Datata.userAgent,Info,User.VisitedTimes+1,Datata.platform,Datata.language,Datata.screen,Datata,"Approved"];
                            
                            UPDATEDATA(ERANDIXSITEMANAGERLINK,localStorage.getItem("Config"),localStorage.getItem("VisitorID"),INFO,(DataBack)=>{
        
                                DATASTORE(" ","VisitorID",localStorage.getItem("VisitorID"));
        
                            });
    
                        });
    
                    });
    
                });
    
            });
    
        });

    });

};