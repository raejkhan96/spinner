//process.stdout.write('hello from spinner1.js... \rheyyy\n');

const draw = function (j) {
  let arr = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|']
  process.stdout.write(`\r${arr[j]}`);
}

let j = 0;
for (let i = 100; i < 1900; i+= 200) {
  setTimeout(function(){ draw(j), j += 1 }, i);
}

setTimeout(() => {
  process.stdout.write('\n');
}, 1900);

