// function sum(x, y){
// return x + y
// }
//   try {
//       sum(1, t)
//     throw "use numbers"
//     } catch(err){
//     console.log("use numbers")
//   }


var user = {username: "aj", password: "nawt1223"};
  
function login(username, password){
  if(username !== "aj"){
  throw "incorrect user"}
  if(password !== "nawt1223"){
    throw "incorrect user"}
}

try {
  login("sat", "nawt1223")
  console.log("ggs")
} catch(err){
  console.log("oof")
}