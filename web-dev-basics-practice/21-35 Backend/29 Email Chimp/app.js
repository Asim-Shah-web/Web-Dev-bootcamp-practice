import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import {dirname} from "path";
import { fileURLToPath } from "url";
//import client from "@mailchimp/mailchimp_marketing";

const __dirname= dirname(fileURLToPath(import.meta.url));

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
const port=3000;
app.use(express.static("public"));

app.get("/",(req,res)=>{
 res.sendFile(__dirname+"/sign-up.html");
});
const API_URL="https://us22.api.mailchimp.com/3.0/lists/3f648440ac";
const api_key="4e38a30d2efe8b070406ec50cd739ddb-us22";
app.post("/",async(req,res)=>{
 const firstName=req.body.fName;
 const lastName=req.body.lName;
 const email=req.body.email;
// console.log(firstName,lastName,email);
const options = {
    auth: {
        password:api_key,
    }
};
const response={
   members: [{
    email_address: email,
    status: "subscribed",
    merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
    }
}]
};

const data= JSON.stringify(response);

try {
    const result = await axios.post(API_URL,data,options);
    res.sendFile(__dirname+"/success.html");

   // console.log(result);
   console.log(res.statusCode);
} catch (error) {
    res.sendFile(__dirname+"/failure.html");
    console.log(error.message);

}


/*

client.setConfig({
  apiKey: api_key,
  server: "us22",
});

const run = async () => {
  const response = await client.lists.createList({
    name: firstName+lastName,
    permission_reminder: "permission_reminder",
    email_type_option: true,
    contact: {
      company: "company",
      address1: "address1",
      city: "peshawar",
      country: "pakistan",
    },
    campaign_defaults: {
      from_name: firstName+lastName,
      from_email: email,
      subject: "subject",
      language: "English",
    },
  });
  console.log(response);
};

run();

*/
});

app.post("/failure",(req,res)=>{
    res.redirect("/");
})



app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
});


// 4e38a30d2efe8b070406ec50cd739ddb-us22