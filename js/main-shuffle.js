// 배열 섞기
let num01 = 10;
let num02 = 20;
let temp = num01;
num01 = num02;

let arr04 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < 10; i++) {
  let selected = Math.floor(Math.random() * 10);
  let temp = arr04[i];
  arr04[i] = arr04[selected];
  arr04[selected] = temp;
}
