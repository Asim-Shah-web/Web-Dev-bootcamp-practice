import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "MyOwnDataBase",
  password: "DivinedB",
  port: 5432,
});


db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

 async function checkVisisted(){
  const country=await db.query("SELECT country_code FROM visited_countries");
  let countries=[];
  country.rows.forEach((countr) =>{
    
   countries.push(countr.country_code);
  });
  return countries;
}

app.get("/", async (req, res) => {
  //Write your code here.
  const countries= await checkVisisted();
 
 //console.log(country.rows);

 res.render("index.ejs",{
  countries:countries,
  total:countries.length,
 });

});

app.post("/add",async(req,res)=>{
  const newName= req.body.country;
//  const countries=await checkVisisted();
try {
  const selectedName =await db.query("SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%'",[newName.toLowerCase()]);
  const data=selectedName.rows[0]
  const countryCode= data.country_code;
  try {
    await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)",[countryCode]);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    const countries=await checkVisisted();
    res.render("index.ejs",{
      countries:countries,
      total:countries.length,
      error:"country name already exists",
    })
  }
} catch (err) {
  console.error(err);
  const countries=await checkVisisted();
  res.render("index.ejs",{
    countries:countries,
    total:countries.length,
    error:"wrong country name entered",
  });
}

 
/*   res.render("index.ejs",{
    countries:countries,
    total:countries.length,
  });
  */

  


});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
