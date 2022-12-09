import { writeFileSync, readFile as _readFile } from "fs";

function editFile(path, data) {
  writeFileSync(path, data);
}

function readFile(path) {
  const data = _readFile(path);
  console.log(data);
}

export default {
  readFile,
};
