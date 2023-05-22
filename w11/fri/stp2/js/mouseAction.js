// let box = document.querySelector("#box2");
// box.onclick = () => {
//   box.classList.toggle("boxSelected");
// };

// let box = document.querySelector(".box");
// .box 로하면 발견된 제일 처음거에 적용
// box.onclick = () => {
//   box.classList.toggle("boxSelected");
// };

let boxes = document.querySelectorAll(".box");
// // querySelector는 하나만.box에 해당하는 하나만
// // querySelectorAll은 .box에 해당하는 모든 것 다 불러오기 (하나의 데이터가 아님)
console.log(boxes);
console.log(boxes[0]);
console.log(boxes[1]);
console.log(boxes[2]);
// boxes.forEach(function (grass) {
//   // .forEach 는 값 하나하나하나에 다 적용
//   grass.onclick = () => {
//     grass.classList.toggle("boxSelected");
//   };
// });

boxes.forEach((each) => {
  each.onclick = () => {
    each.classList.toggle("boxSelected");
  };
});
