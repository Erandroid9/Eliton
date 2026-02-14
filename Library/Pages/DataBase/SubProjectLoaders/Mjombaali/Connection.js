import { HIDER } from "../../../../Functions/DataBase/Hider/Hider.js";
import { SERVERASSETS } from "../../../../Functions/DataBase/ServerAssets/ServerAssets.js";

export const DOCTORMJOMBALICONNECTION=()=>{

    const style = document.createElement('style');
    
    style.textContent = `
    
        .div{
                position:fixed;
                overflow:hidden;
                display:block;
                width:100%;
                height:100%;
                color:white;
                text-align:center;
                font-size:20px;
                background:transparent;
                left:0;
                top:0px;
            }
    
            .DataHolder{
                position:absolute;
                width:90%;
                height:50px;
                background:transparent;
                left:0;
                bottom:50px;
                border:none;
                margin:5%;
                border-radius:10px;
            }
    
            .Data{
                position:relative;
                height:50px;
                left:0;
                background:blue;
                width:0;
            }
    
            .Message{
                position:absolute;
                left:50%;
                margin-top:5%;
                font-weight:bold;
                color:orange;
            }
    
            .DisplayImage{
                position:absolute;
                background:transparent;
                top:0;
                bottom:0;
                left:0;
                height:100%;
                width:100%;
                border:none;
                overflow:hidden;
            }
    
            img{
                border-radius:0px;
            }
    
    `;
    
    document.head.appendChild(style);

    document.querySelector("body").innerHTML=`
    
        <div class="div">
    
                <img class="DisplayImage">
    
                <div class="DataHolder" >
    
                    <div class="Data">
        
                        <p class="Message">${""}</p>
                                
                    </div>
    
                </div>
    
        <div>
                
    `;

    const Data=document.querySelector(".Data");

    const DisplayImage=document.querySelector(".DisplayImage");

    SERVERASSETS("Images/DoctorMjombaAli//Ring.webp",(Data)=>{
    
        DisplayImage.src=Data;

    });

    HIDER(2000,()=>{

        SERVERASSETS("Images/DoctorMjombaAli/Business.webp",(Data)=>{
    
            DisplayImage.src=Data;

        });

    })

};