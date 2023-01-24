import express from "express";
import path from "path";
import { readFile } from "fs";

const __dirname = path.resolve();

const app = express();
const PORT = 3000;

app.get("/resume.pdf", function (req, res) {
  const filePath = "/server/file/resume.pdf";

  readFile(__dirname + filePath, function (err, data) {
    if (err) {
      console.log(`Error:${err}`);
    }
    res.contentType("application/pdf");
    res.send(data);
  });
});

app.listen(PORT, function () {
  console.log(`Listening to ${PORT}`);
});
