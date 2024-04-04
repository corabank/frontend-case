const express = require("express");
const db = require("./db/transactions.json");
const user = require("./db/user.json");
const bodyParser = require("body-parser");

const port = 3000;
const app = express();

app.use(bodyParser.json());

app.get("/health-check", (_, res) => {
  return res.sendStatus(200);
});

app.post("/auth", (req, res) => {
  const { cpf, password } = req.body;

  if (cpf === user.cpf && password === user.password)
    return res.status(200).json({
      token: user.token,
    });

  return res.sendStatus(401);
});

app.get("/list", (req, res) => {
  const token = req.headers.token;

  if (!token || token !== user.token) return res.sendStatus(401);

  return res.json(db);
});

app.listen(port, () => {
  console.log(`[api] running on port \`${port}\``);
});
