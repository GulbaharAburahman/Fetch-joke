import express from "express";
import axios from "axios" ;
import bodyParser from "body-parser";


const app =express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

const port=3000;

app.get("/", (req,res)=>
    {
   res.render("index.ejs",{joke:null, error:null})
    });


    app.post("/get-joke",async(req,res)=>{
    const {category,language,blacklistFlags,amount}=req.body;
    try{
        const url= `https://v2.jokeapi.dev/joke/${category}`;
        // join blacklistFlags into a comma-separated string
        const flags=Array.isArray(blacklistFlags) ? blacklistFlags.join(',') : undefined;
        const params={
            lang:language || 'en' ,
            blacklistFlags: flags,
            format:'json',
            amount:amount || 1,
        }

        const response=await axios.get(url,{params});
        
       const jokes = response.data.jokes || [response.data];
       const jokeText = jokes.map(joke =>
      joke.type === 'single' ? joke.joke : `${joke.setup} - ${joke.delivery}`
    ).join('<br><br>');

        //pass the joketo template
            res.render("index.ejs",{joke:jokeText, error:null});

    }catch(error){
    console.error(error);
    //pass error to template
    res.render("index.ejs", {joke:null, error: "Failed to fetch a joke , please try later"})
    }

    });


    app.listen(port,()=>{
        console.log(`Server is running on http://localhost:${port}`);
    })



