var express = require("express");
var cors = require("cors");
var apiServer = express();

var port = 3000;

apiServer.use(cors());

apiServer.listen(port, () => {
    console.log("server running on port ", port);
});

apiServer.get("/nome", (req, res) => {
    console.log("ho ricevuto una get su nome");
    res.send("ciao, il nome del server è: NODEPOGLIANI");
});

apiServer.get("/somma", (req, res) => {
    console.log("richiesta: ", req.query);
    if (req.query.a && req.query.b) {
        var ris = req.query.a - (- req.query.b); // -> il + concatena, quindi sottraggo l'inverso
        console.log("ris = ", ris);
        var resObj = { "risultato": ris };

        res.status(200);
        res.send(resObj);
    } else {
        res.status(500);
        res.send("parametri non corretti");
    }

});

// riceve in ingresso username e password e invia un messaggio "benvenuto [username]"
apiServer.get("/login" , (req, res) => {}); 

// riceve in ingresso username e password e invia un messaggio "benvenuto [username]"
apiServer.post("/login" , (req, res) => {}); 

/*
sviluppare una pagina html con un div e duie pulsanti.
Premendo sul pulsante "post" invierete una post con username e password e visualizzerete nella div il messaggio inviato dal server
Premendo il pulsante "get" stessa cosa ma inviando una richiesta get
*/

apiServer.get("/", function (req, res) {
    res.send("sei in home");
});