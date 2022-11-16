const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());
app.post("/", (req, res) => {
  console.time("time");
  //ends with ni hedeer tugsuhiig ni haruulna
  const endsWith = "45";

  fs.readFile("./4say300.log", "utf8", (err, file) => {
    const theFile = JSON.parse(file);
    const theNewArray = [];
    for (let i = 0; i < theFile.length; i++) {
      const tempString = `${theFile[i]}`;
      if (
        tempString.substring(
          tempString.length,
          tempString.length - endsWith.length
        ) === endsWith
      ) {
        theNewArray.push(theFile[i]);
      }
    }
    console.log(theNewArray.length);
    console.timeEnd("time");
    res.status(200).json({
      success: true,
      data: theNewArray,
    });
  });
});

app.listen(4545, () => {
  console.log("app started");
});
