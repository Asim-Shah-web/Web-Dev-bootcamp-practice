import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer.prompt([{
    message : "Type your Url Here: ",
    name : "URL",
},
]).then((answers)=>{
    const url = answers.URL;
    const qr_img = qr.image(url);
    qr_img.pipe(fs.createWriteStream("qr-img2.png"));

    fs.writeFile("URL2.txt",url,(err) => {
        if (err) throw err;
        console.log("The file has been saved!");
    });
})
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
          } else {
            // Something else went wrong
          }
    });


/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
