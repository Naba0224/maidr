const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());
app.post("/", (req, res) => {
  console.time("time");
  //ends with ni hedeer tugsuhiig ni haruulna
  const endsWith = 9;
  const theDigit = `${endsWith}`.length;
  console.log(theDigit);
  fs.readFile("./4say300.log", "utf8", (err, file) => {
    const theFile = JSON.parse(file);
    const theNewArray = [];
    const theDivider = 10 ** theDigit;
    for (let i = 0; i < theFile.length; i++) {
      if (theFile[i] % theDivider === endsWith) {
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
