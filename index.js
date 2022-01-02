const NodeRSA = require("node-rsa");
const fs = require("fs");

(() => {
  const key = new NodeRSA().generateKeyPair();

  const publicKey = key.exportKey("public");
  const privateKey = key.exportKey("private");

  fs.writeFile("./keys/public-key.pem", publicKey, "utf-8", (err) =>
    err ? console.log(err) : undefined
  );

  fs.writeFile("./keys/private-key.pem", privateKey, "utf-8", (err) =>
    err ? console.log(err) : undefined
  );
  console.log("I will run first");
})();
