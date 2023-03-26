'use strict';

module.exports.main = async (event) => {
  console.log(event)
  console.log(JSON.parse(event.Records[0].body))
  console.log("PASSED ON HERE IN CONSUMER")
  return {};
}

