const express = require("express");
const pdf = require("html-pdf");
const document = require("./documents");
const app = express();

app.use(express.json());

app.post("/api/create-pdf", async (req, res) => {
  //   console.log(req.body);
  //   if (req.body.returnUrl) {
  //     return res.status(400).json({ message: "The payment was cancelled!" });
  //   }

  await pdf.create(document(req.body), {}).toFile("invoice.pdf", err => {
    if (err) {
      res.send(Promise.reject());
    }
    return res.send(Promise.resolve());
  });
});

app.get("/api/fetch-pdf", (req, res) => {
  res.sendFile(`${__dirname}/invoice.pdf`);
});

const port = process.env.PORT || 3368;
app.listen(port, () => console.log("Server is running on port " + port));
