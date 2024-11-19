const express = require('express');
const app  = express();

const port = 4040;
app.set("view engine", "ejs");

app.get("/ig/:username", (req, res) => {
    let {username} = req.params;
    const instaData = require('./data.json')
    let data = instaData[username];
    console.log(data);
    res.render("instagram.ejs", { data })

})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});