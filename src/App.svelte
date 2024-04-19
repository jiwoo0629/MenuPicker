<script>
import { onMount } from "svelte";
import { menuStore, defaultMenu } from "./scripts/store";
import { get } from "svelte/store";
import { w2grid, w2popup, w2alert, w2ui } from '../scripts/w2ui-2.0.es6';
import { select, selectAll } from '../scripts/d3';

let selectedMenus = [];

onMount(() => {
	setup();
});

function setup() {
	const menuList = getMenu(); //점심 메뉴 리스트 받아오기
	setMenu(menuList); //점심 메뉴 리스트 설정
}
function getMenu() {
	let lunch_menu = localStorage.getItem('lunch_menu');
	lunch_menu = JSON.parse(lunch_menu);
	if(!lunch_menu) lunch_menu = defaultMenu;
	return lunch_menu;
}
function setMenu(menuList) {
	if(!menuList) return false;
	menuList.forEach(menu => updateDup(menu));
	menuStore.set(menuList);
	localStorage.setItem("lunch_menu", JSON.stringify(menuList, 3, null));
	selectedMenus = menuList;
	return true;
}
function setDup(menu) { //가게 선택을 확정지으면 dup = true, 방문날짜 설정
	menu.dup = true;
	menu.visitDate = new Date().getFullYear() + "/" + new Date().getMonth() + "/" + new Date().getDate();
}
function updateDup(menu) { //방문한지 일주일 지나면, dup = false, 
	if(menu.dup && new Date().getTime() - new Date(menu.visitDate).getTime() >= 7) {
		menu.dup = false;
	}
}
function searchMenu() { //메뉴 검색 결과 보여주기
	var menus = get(menuStore);
	var option = select("#search_option").property("value");
	selectedMenus = menus.filter((menu) => menu.name.includes(option) || menu.category.includes(option) || menu.description.includes(option));
	
}
function removeMenu(menu) { //메뉴 리스트에서 메뉴 제거
	var confirm = window.confirm("이 메뉴를 리스트에서 삭제하시겠습니까?");
	if(confirm) {
		var menus = get(menuStore);
		var new_menus = menus.filter(m => m.name != menu.name);
		menuStore.set(new_menus);
		localStorage.setItem("lunch_menu", JSON.stringify(new_menus, 3, null));
		window.alert("삭제가 완료되었습니다.");
		window.location.reload();
	} else ;
}
function selectMenu() {

}

</script>

<main>
	<h1>점심 메뉴 추천 프로그램</h1>
	<div id="search">
		<input type="text" id="search_option" name="search_option" autocomplete="off" placeholder="가게명 / 카테고리 / 설명 검색" on:keypress={(e) => {if(e.key == 'Enter') searchMenu()}}/>
		<button type="button" id="search_btn" on:click={searchMenu}>검색</button>
		<button type="button" id="select_btn" on:click={selectMenu}>추첨하기</button>
	</div>
	<div id="label_container" style="width: 80%; left:10%; margin-top: 1em; padding: 1em 0; background:rgba(0,0,0,0.05); ">
		<div class="label" style="width:15%;">가게명</div>
		<div class="label" style="width:15%;">카테고리</div>
		<div class="label" style="width:30%;">설명</div>
		<div class="label" style="width:30%;">최근 방문일자</div>
		<div class="label" style="width:10%; border:0;"></div>
	</div>
	<div id="container" style="height:{selectedMenus.length * 36 < 400 ? selectedMenus.length * 36 + "px" : "400px"}">
		{#each selectedMenus as menu}
		<div id="label_container" style="height: 36px;">
			<div class="label" style="width:15%;">{menu.name}</div>
			<div class="label" style="width:15%;">{menu.category}</div>
			<div class="label" style="width:30%;">{menu.description}</div>
			<div class="label" style="width:30%;">{menu.visitDate}</div>
			<div class="label" style="width:10%; border:0;">
				<button type="button" class="delete" on:click={removeMenu(menu)}>삭제</button>	
			</div>
		</div>
		{/each}
	</div>
</main>

<style>
main {
	padding: 1em;
	margin: 0 auto;
}
h1 {
	color: #ff3e00;
	font-size: 3em;
	font-weight: 200;
	text-align: center;
}

#search {
	position: relative;
	width: 80%;
	height: 10%;
	left: 10%;
	display: flex;
	align-items: center;
}
#search_option {
	width: 40%;
	height: 50px;
	border-radius: 5px;
	margin-right: 1%;
}
#search_btn {
	position: relative;
	width: 80px;
	height: 50px;
	border: 2px solid lightgray;
	border-radius: 5px;
	text-align: center;
	background: white;
	cursor:pointer;
}
#select_btn {
	position: absolute;
	width: 80px;
	height: 50px;
	right: 0;
	border: 2px solid lightgray;
	border-radius: 5px;
	text-align: center;
	background: white;
	cursor:pointer;
}

#search_btn:hover, #select_btn:hover {
	background: rgba(0,0,0,0.05);
	font-size: 1.1em;
}

#label_container {
	position: relative;
	width:100%;
	height:auto;
	display:flex;
	border-bottom: 1px solid black;
}
.label {
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border-right: 1px solid black;
	font-size: 1em;
}
.delete {
	border: 0px;
	color: red;
	background: inherit;
	cursor: pointer;
}
#container {
	position: relative;
	width: 80%;
	left: 10%;
	overflow-x: hidden;
	overflow-y: scroll;
	border-bottom: 1px solid black;
}


@media (min-width: 640px) {
	main {
		max-width: none;
	}
}

</style>