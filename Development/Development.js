const ERANDES=()=>{

    SWITCHER("800px",()=>{DESKTOPVIEW()},()=>{MOBILEVIEW();})

};

const MOBILEVIEW=()=>{

    BUTTON("","Select File",TEAL,"",(ELEMENT)=>{

        FILEPICKER(ELEMENT,(Data)=>{
            console.log(Data.name)
        })

    });

};