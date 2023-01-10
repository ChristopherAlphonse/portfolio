import fs from "fs";
import http from "http";
import path from "path";

const server = http.createServer((req, res) => {
  if (req.url === "/resume.pdf") {
    const filePath = path.join(process.cwd(), "server/file/resume.pdf");

    const readStream = fs.createReadStream(filePath);

    res.setHeader("Content-Type", "application/pdf");
    readStream.pipe(res);
  } else {
    res.statusCode = 404;
    res.end();
  }
});

const port = 5173;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
