const { publicEncrypt, privateDecrypt } = require("crypto");
const { readFileSync } = require("fs");

/**get public and private keys from file*/
const encryptedPublicKey = readFileSync("./keys/public.pem", "utf-8");
const encryptedPrivateKey = readFileSync("./keys/private.pem", "utf-8");

const public_key = encryptedPublicKey;
const private_key = encryptedPrivateKey;
console.log(public_key);
console.log(private_key);

/** Encrypt the message using the public key of the receiver*/
const message = `Watch your back, they are coming`;
const encryptedData = publicEncrypt(public_key, Buffer.from(message));
console.log(encryptedData.toString("base64"));

/** Decrypt the message using the private key*/
const decryptedData = privateDecrypt(private_key, encryptedData);
console.log(decryptedData.toString("utf-8"));
