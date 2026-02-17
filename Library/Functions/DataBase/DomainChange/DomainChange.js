export const DOMAINNAMECHANGE=()=>{

    const currentUrl = window.location.href;
    
    const storedUrl = localStorage.getItem('storedUrl');

    if (!storedUrl) {

        localStorage.setItem('storedUrl', currentUrl);
        
    } else if (storedUrl !== currentUrl) {

        localStorage.removeItem("Updates");

        RELOAD();

        localStorage.setItem('storedUrl', currentUrl);

    };

};