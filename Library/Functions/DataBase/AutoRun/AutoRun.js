export const AUTORUN=()=>{
    
    CONDITION(localStorage.getItem("Env") ==="Dev",()=>{

        import("./Connection/Connection.js").then(o=>typeof o.CONNECTIONS=="function"&&o.CONNECTIONS()).catch(console.error);

    },()=>{

        import("./Connection/Connection.js").then(o=>typeof o.CONNECTIONS=="function"&&o.CONNECTIONS()).catch(console.error);

    });

};