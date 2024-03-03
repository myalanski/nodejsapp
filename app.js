const express = require("express");
const helper = require('./helper.js');

const app = express();
const PORT = process.env.PORT || 3030;

app.get('/employees', async (req, res) => {
    const data = await helper.getDataFromDatabase();
    res.send(data);
    });

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
