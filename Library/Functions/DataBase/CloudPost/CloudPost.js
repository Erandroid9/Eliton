export const  CLOUDPOST=(LINK,DATA,callBack)=>{

    fetch(LINK,{
        method:"POST",
        mode:"cors",
        body:JSON.stringify(DATA)
    })

    .then(res =>res.json())

    .then(data=>{

        callBack(data);

    })

    .catch(error =>{

        console.log(error);
        
    });

};