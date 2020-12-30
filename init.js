import app from "./app";

const port =process.env.PORT || 4000;

const handleListening = () => 
    console.log(`✅Listening on : http://locallhost:${port}`);


app.listen(port, handleListening);

