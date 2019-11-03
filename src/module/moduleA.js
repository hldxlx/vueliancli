function contA() {
  console.log(1);
}
function contB() {
  console.log(2);
}
var obj = {
  contA,
  contB
}
export default obj;
