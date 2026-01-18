export const USSD=(code)=>{

    CHECKER(localStorage.getItem("Env") === "Android",()=>{
        
        window.AndroidInterface.runUSSD(code);
        
    });

};