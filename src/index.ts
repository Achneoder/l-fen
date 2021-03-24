import {parseConfig} from "./parser";

function exec() {
  const config = parseConfig();
  console.log(config);
}

exec();