const getJoket = require("./joke");
const core = require("@actions/core");

async function run() {
  const asd = await getJoket();
  console.log(asd);
  core.setOutput("asd-output", asd);
}

run();
