const autoSelfSign = require("auto.self.sign");
const path = require("path");
const https = require("https");
const { exec } = require('child_process');

(async () => {
  //Get the config object from the package
  let config = autoSelfSign.config;

  //Setting the directory where the certificates should be saved in. Directory should exist
  config.certificateFolder = path.join(__dirname, "../dist/certs");

  //Generate certificate
  let generationResult = await autoSelfSign.autoSelfSign(config);
})();