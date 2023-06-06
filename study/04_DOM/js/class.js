var selectedItem = document.getElementsByClassName("odd"); // 클래스가 "odd"인 모든 요소를 선택함.

for (var i = 0; i < selectedItem.length; i++) {
    selectedItem.item(i).style.color = "red"; // 선택된 모든 요소의 텍스트 색상을 변경함.
    console.log(selectedItem);
}