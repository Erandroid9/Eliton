import { DISPLAYLOADER } from "../../../Pages/DataBase/DisplayLoader/DisplayLoader.js";

export const DESKTOPENVIRONMENT = () => {

    DISPLAYLOADER("75%");

    const MAIN = "https://docs.google.com/spreadsheets/d/1V_m4KRo--FQkD0fNKfRZ1EWDRCSqTvwGkM7lEFGWldA/edit?usp=sharing";
    const CLOUD = "https://erandroid9.github.io/Eliton/";

    fetch("https://script.google.com/macros/s/AKfycbxgaFqwexOOBXA5tn1n2Mp0k9-KlwZ8ZP4QUvWM_CigDocfx-nVR0xz2RyuwDBYgwMp/exec", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
            sheetName: "Production",
            spreadsheetUrl: MAIN
        })
    })
    .then(res => res.json())
    .then(data => {

        DISPLAYLOADER("85%");

        const user = data.find(item => item.ID === localStorage.getItem("Config"));
        if (!user) return;

        DISPLAYLOADER("95%");

        fetch(CLOUD + user.Desktop)
        .then(res => res.text())
        .then(projectData => {

            DISPLAYLOADER("100%");

            const storedProject = localStorage.getItem("PROJECT");

            // Always store the project
            localStorage.setItem("PROJECT", projectData);

            // First install OR update detected
            if (!storedProject || storedProject !== projectData) {
                localStorage.setItem("Packaged", new Date().toISOString());
                location.reload();
            }

        })
        .catch(console.error);

    })
    .catch(console.error);
};
