import app from "./app";

const PORT = 4000;

const handleListening = () => 
    console.log(`✅Listening on : http://locallhost:${PORT}`);


app.listen(PORT, handleListening);

