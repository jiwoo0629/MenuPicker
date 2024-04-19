<script>
	import { onMount } from "svelte";
	import { menuStore, defaultMenu } from "./scripts/store";
	import { get } from "svelte/store";

	onMount(() => setup());

	function setup() {
		const menuList = getMenu(); //점심 메뉴 리스트 받아오기
		setMenu(menuList); //점심 메뉴 리스트 설정
	}
	function getMenu() {
		let lunch_menu = localStorage.getItem('lunch_menu');
		lunch_menu = JSON.parse(lunch_menu);
		if(!lunch_menu) lunch_menu = {};

		let menus = lunch_menu.menus;
		if(!menus) lunch_menu.menus = defaultMenu;
		return lunch_menu;
	}
	function setMenu(menuList) {
		if(!menuList) return false;
		let menus = menuList.menus;
		menus = menuList;
		localStorage.setItem("lunch_menu", JSON.stringify(menuList, null, 3));
		return true;
	}
	function updateDup() { //방문한지 일주일 지나면, dup = false, 

	}


</script>

<main>
	<h1>Hello!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>