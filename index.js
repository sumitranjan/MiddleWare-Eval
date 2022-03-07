const express = required("express");

const app =  express();

app.use(logger)

app.get("/books",logger, (req,res) => {
    return res.send({ route: "/books"});
})

app.get("/libraries",logger, (req,res) => {
    return res.send({ route: "/libraries", permission: true});
})

app.get("/authors",logger, (req,res) => {
    return res.send({route: "/authors", permission: true});
})


function logger(req, res, next){
    if(req.path === "/books"){
        req.role = "books";
    }
    else if(req.path === "/libraries"){
        req.role = "libraries";
    }
    else{
        req.role = "authors";
    }
    console.log("logger called");
    next();
}






app.listner(5000, () => {
    console.log("Listening on the port");
});