export const DISPLAYLOADER=(AMOUNT)=>{

    const style = document.createElement('style');

    style.textContent = `

        div{
            position:fixed;
            overflow:hidden;
            display:block;
            width:100%;
            height:100%;
            color:white;
            text-align:center;
            font-size:20px;
        }

        .DataHolder{
            position:relative;
            width:90%;
            height:30px;
            background:transparent;
            left:0;
            border:none;
            margin:5%;
            border-radius:20px;
        }

        .Data{
            position:relative;
            height:100%;
            background:blue;
            width:0;
        }

        .Message{
            position:relative;
            margin-top:40%;
            margin-bottom:10%;
        }

    `;

    document.head.appendChild(style);


    if (!localStorage.getItem("Packaged")) {

        if (sessionStorage.getItem("Final")) {

            document.querySelector("body").innerHTML=`

                <div>

                    <p class="Message">Installing ${AMOUNT||"..."}</p>

                    <div class="DataHolder" >

                        <div class="Data"></div>
                    
                    </div>

                <div>
            
            `;
 
            const Data=document.querySelector(".Data");

            Data.style.background="forestgreen";

            Data.style.width=AMOUNT;
            
        } else {

            document.querySelector("body").innerHTML=`

                <div>

                    <p class="Message">Downloading ${AMOUNT||"..."}</p>

                    <div class="DataHolder" >

                        <div class="Data"></div>
                    
                    </div>

                <div>
            
            `;

            const Data=document.querySelector(".Data");

            Data.style.width=AMOUNT;
            
        };

    };

};