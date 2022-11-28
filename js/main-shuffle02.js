// 중복을 제거해야한다.
// 두번째 방법, 전체를 섞은 다음 앞에서 여섯장을 차례로 선택한다.

const result = document.querySelector("#result");
const radios = document.querySelectorAll(".radio");
const colors = ["yellow", "blue", "red", "gray", "green"];
const nums = Array(45)
  .fill(10)
  .map(function (current, idx) {
    return idx + 1;
  });
function makeLotto() {
  const ul = document.createElement("ul");
  result.classList.remove("on");
  result.appendChild(ul);
  setTimeout(function () {
    result.classList.add("on");
  }, 50);

  const copyNums = [...nums];
  copyNums.shuffle();

  const selectedNums = copyNums.splice(0, 6);
  selectedNums.sort(compare);
  selectedNums.forEach(function (item, idx) {
    const li = document.createElement("li");
    li.textContent = item;
    li.classList.add(colors[Math.ceil(item / 10) - 1]);
    ul.appendChild(li);
  });
}
radios.forEach(function (item, idx) {
  item.addEventListener("change", function () {
    // console.log(idx);
    result.innerHTML = "";
    for (let i = 0; i < idx + 1; i++) {
      makeLotto();
    }
  });
});

Array.prototype.shuffle = function () {
  for (let i = 0; i < this.length; i++) {
    let selected = Math.floor(Math.random() * this.length);
    let temp = this[i];
    this[i] = this[selected];
    this[selected] = temp;
  }
  return this;
};

function compare(a, b) {
  return a - b;
}
