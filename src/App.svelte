<script>
	import MenuPicker from "./menu-picker/MenuPicker.svelte";
</script>
<svelte:head>
	<title>점심 메뉴 추첨 프로그램</title>
	<link rel="stylesheet" type="text/css" href="./w2ui-2.0.css" />
	<script src="https://kit.fontawesome.com/432f4d98d0.js" crossorigin="anonymous"></script>
</svelte:head>

<svelte:window on:contextmenu|preventDefault={()=>{}} />
<MenuPicker></MenuPicker>