// HINTS:
// 1. Import express and axios
import express from "express";
import axios from "axios";

// 2. Create an express app and set the port number.
const app = express();
const port = 3000;

// 3. Use the public folder for static files.
app.use(express.static("public"));
// 4. When the user goes to the home page it should render the index.ejs file.

app.get("/", async (req, res) => {
    try {
        const id = Math.floor(Math.random() * 50);
        console.log(id);
        const API_URL = `https://secrets-api.appbrewery.com/secrets/${id}`;
        const bearerToken = "077eff62-2622-480c-9443-a159ba27c1ff";
        const config = {
          headers: { Authorization: `Bearer ${bearerToken}` },
        };
        const result = await axios.get(API_URL,config);
        const content= result.data;
        res.render("index.ejs",{
          secret:content.secret,
          user: content.username,
      });
    } catch (error) {
        console.log(error.respone.data);
        res.status(500);
    }

});
// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
