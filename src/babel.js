async function start() {
  return await Promise.resolve('async is working');
};
start().then(console.log);

import('lodash').then(_ => {
  console.log('Lodash', _.random(0,42, true));
})