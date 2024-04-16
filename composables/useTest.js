function testFunc(x) {
  console.log("test---", x)
}

export default function (x) {
  const y = x;
  return useState('test', () => testFunc(y))
}