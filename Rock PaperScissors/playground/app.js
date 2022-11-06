// const arr = ['ROCK','PAPER','SCISSOR'];
// let input;
// input = prompt('in');
// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min) ) + min;
//   }
// let a = getRndInteger(0,3);
// let x;
// let y = arr[a];
// let result;
// if (input==1){
//   x = arr[0];
// }else if (input==2){
//   x = arr[1];
// }else if (input==3){
//     x = arr[2];
// }
// //['r','p','s']
// if (x==y){
//     result = 'DRAW';
// }else if (x==arr[0] && y==arr[1]){
//     result='LOST';
// }else if (x==arr[0] && y==arr[2]){
//     result='WON';
// }else if (x==arr[1] && y==arr[0]){
//     result='WON';
// }else if (x==arr[1] && y==arr[2]){
//     result='LOST';
// }else if (x==arr[2] && y==arr[0]){
//     result='LOST';
// }else if (x==arr[2] && y==arr[1]){
//     result='WON';
// }
// console.log(x,y,result);

const imgArr = ['paper.png','rock.png','scissor.png'];
const element = document.getElementsByTagName('button');
element.addEventListner("click",changeToRock);


function getRandImg(){
    random_index = Math.floor(Math.random()* imgArr.length());
    selectImg = imgArr[random_index];
    document.getElementById('computerChoice').src = './imgs/${selectImg}';
}
function changeToRock(){
    document.getElementById('playerChoice').src = './imgs/rock.png';
    document.getElementById('playerChoice').alt = "ROCK";
}
function changeToPaper(){
    document.getElementById('playerChoice').src = './imgs/paper.png';
    document.getElementById('playerChoice').alt = "PAPER";
}
function changeToScissor(){
    document.getElementById('playerChoice').src = './imgs/scissor.png';
    document.getElementById('playerChoice').alt = "SCISSOR";
}
