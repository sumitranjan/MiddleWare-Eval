const express = require("express");

const app =  express();

app.use(logger)

app.get("/books",logger, (req,res) => {
    return res.send({ route: "/books"});
})

app.get("/libraries",checkPermission("libraries") , (req,res) => {
    return res.send({ route: "/libraries", permission: req.permission});
})

app.get("/authors",checkPermission("authors"), (req,res) => {
    return res.send({route: "/authors", permission: req.permission});
})

function checkPermission(role){
    return function logger(req, res ,next){
        if(role==="libraries" || role==="authors"){
            return next();
        }
        return res.send("Not allowed");
    }
}

function logger(req, res, next){
    if(req.path === "/libraries"){
        req.permission= true ;
    }
    else if(req.path === "/authors"){
        req.permission= true ;
    }
    console.log("logger called");
    next();

}






app.listen(5000, () => {
    console.log("Listening on the port");
});