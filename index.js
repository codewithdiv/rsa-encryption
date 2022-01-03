const { generateKeyPairSync } = require("crypto");
const { writeFile } = require("fs");

const { privateKey, publicKey } = generateKeyPairSync("rsa", {
  modulusLength: 2048, // the length of your key in bits
  publicKeyEncoding: {
    type: "spki" /** recommended to be 'spki' by the Node.js docs */,
    format: "pem",
  },
  privateKeyEncoding: {
    type: "pkcs8" /** recommended to be 'pkcs8' by the Node.js docs */,
    format: "pem",
  },
});

/** Generates public and private keys*/
const create_key = (privateKey, publicKey) => {
  writeFile("./keys/public.pem", publicKey, "utf-8", (err) =>
    err ? console.log(err) : undefined
  );
  writeFile("./keys/private.pem", privateKey, "utf-8", (err) =>
    err ? console.log(err) : undefined
  );
};
create_key(privateKey, publicKey);
