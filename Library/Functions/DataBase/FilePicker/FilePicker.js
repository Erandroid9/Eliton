export const FILEPICKER = (HOLDER, callback) => {

  CLICK(HOLDER, () => {

    const input = document.createElement("input");
    input.type = "file";
    input.style.display = "none";

    input.onchange = () => {

      const file = input.files[0];

      if (!file) return;

      const reader = new FileReader();

      reader.onload = () => {

        callback({
          name: file.name,
          type: file.type,
          size: file.size,
          data: reader.result 
        });

      };

      reader.readAsDataURL(file); 

    };

    input.click();
    
  });

};
