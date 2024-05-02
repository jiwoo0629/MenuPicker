<script>
    import { onMount } from "svelte";
    import { menuStore, defaultMenu } from "./scripts/store";
    import { get } from "svelte/store";
    import { select, selectAll } from '../../scripts/d3';
    import { popupAdd } from './scripts/popup_add';
    import { popupUpdate } from './scripts/popup_update';
    import { popupSelect } from './scripts/popup_select'; 
    import FileSaver from './scripts/FileSaver';
    
    let selectedMenus = [];
    let mainMenuList = [];
    let page = 0;
    
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
        lunch_menu.sort(function(a, b) {
            if(a.name < b.name) return -1;
            if(a.name > b.name) return 1;
        });
        return lunch_menu;
    }
    function setMenu(menuList) {
        if(!menuList) return false;
        menuList.forEach(menu => updateDup(menu));
        menuStore.set(menuList);
        localStorage.setItem("lunch_menu", JSON.stringify(menuList, 3, null));
        showMenu(menuList);
        return true;
        
        function updateDup(menu) { //방문한지 일주일 지나면, dup = false, 
            if(menu.dup && new Date().getTime() - new Date(menu.visitDate).getTime() >= 7 * 24 * 60 * 60 * 1000) {
                menu.dup = false;
            }
        }
    }
    function searchMenu() { //메뉴 검색 결과 보여주기
        const menus = get(menuStore);
        var option = select("#search_option").property("value");
        var filteredMenu = menus.filter((menu) => menu.name.includes(option) || menu.category.includes(option) || menu.description.includes(option));
        showMenu(filteredMenu);
    }
    function showMenu(menuList) {
        var idx = 0, arr = [];
        selectedMenus = [];
        while(idx < menuList.length) {
            arr.push(menuList[idx]);
            idx++;
            if(idx % 15 == 0) {
                selectedMenus.push(arr);
                arr = [];
            }
        }
        if(arr.length !== 0) selectedMenus.push(arr);
        page = 0;
        mainMenuList = selectedMenus[page];
    }

    function removeMenu(menu) { //메뉴 리스트에서 메뉴 제거
        var confirm = window.confirm("이 메뉴를 리스트에서 삭제하시겠습니까?");
        if(confirm) {
            const menus = get(menuStore);
            var new_menus = menus.filter(m => m.name != menu.name);
            menuStore.set(new_menus);
            localStorage.setItem("lunch_menu", JSON.stringify(new_menus, 3, null));
            window.alert("삭제가 완료되었습니다.");
            window.location.reload();
        } else ;
    }
    function addMenu() { popupAdd(); }
    function selectMenu() { popupSelect(); }
    function saveData() {
        const menuList = get(menuStore);
        const menuJson = JSON.stringify(menuList, null, 3);
        let file = new Blob([menuJson], {type: "text/plain; charset=utf-8;"});
        let date = new Date();
        let time = date.getFullYear().toString() + (date.getMonth()+1).toString().padStart(2, '0') + date.getDate().toString().padStart(2, '0') + "-" + date.getHours().toString().padStart(2, '0') + date.getMinutes().toString().padStart(2, '0') + date.getSeconds().toString().padStart(2, '0'); 
        FileSaver.saveAs(file, 'menulist_' + time + '.json');
    }
    function loadData() {
        let input = document.createElement("input");
        input.type = "file";
        input.accept = ".json";
        input.onchange = e => processDataFile(e.target.files[0]);
        input.click();
        
        function processDataFile(file) {
            const reader = new FileReader();
            reader.onload = function() {
                let menulist = JSON.parse(reader.result);
                localStorage.setItem("lunch_menu", JSON.stringify(menulist, 3, null));
                window.location.reload();
            }
            reader.readAsText(file);
        }
    }
    function pageLeft() {
        page--;
        mainMenuList = selectedMenus[page];
    }
    function pageRight() {
        page++;
        mainMenuList = selectedMenus[page];
    }
    </script>
    
    <main>
        <h1>점심 메뉴 추첨 프로그램</h1>
        <div id="search">
            <input type="text" id="search_option" name="search_option" autocomplete="off" placeholder="가게명 / 카테고리 / 설명 검색" on:keypress={(e) => {if(e.key == 'Enter') searchMenu()}}/>
            <button type="button" id="search_btn" on:click={searchMenu}>검색</button>
            <div id="actions">
                <button type="button" class="action_btn" on:click={saveData}>데이터 저장하기</button>
                <button type="button" class="action_btn" on:click={loadData}>데이터 불러오기</button>
                <button type="button" class="action_btn" on:click={addMenu}>가게 추가하기</button>
                <button type="button" class="action_btn" on:click={selectMenu}>추첨하기</button>
            </div>
        </div>
        <div id="label_container" style="width: 80%; left:10%; margin-top: 1em; padding: 1em 0; background:rgba(0,0,0,0.05); ">
            <div class="label" style="width:20%;">가게명</div>
            <div class="label" style="width:20%;">카테고리</div>
            <div class="label" style="width:30%;">설명</div>
            <div class="label" style="width:20%;">최근 방문일자</div>
            <div class="label" style="width:10%; border:0;">수정 / 삭제</div>
        </div>
        <div id="container" style="height:{mainMenuList.length * 37 < window.innerHeight * 0.5 ? mainMenuList.length * 37 + "px" : window.innerHeight * 0.5 + "px"}">
            {#each mainMenuList as menu}
            <div id="label_container" style="height:36px;">
                <div class="label" style="width:20%;">{menu.name}</div>
                <div class="label" style="width:20%;">{menu.category}</div>
                <div class="label" style="width:30%;">{menu.description}</div>
                <div class="label" style="width:20%;">{menu.visitDate === "2024/04/01" ? "-" : menu.visitDate}</div>
                <div class="label" style="width:10%; border:0;">
                    <button type="button" class="delete" style="color: blue;" on:click={popupUpdate(menu)}>수정</button>	
                    <button type="button" class="delete" on:click={removeMenu(menu)}>삭제</button>	
                </div>
            </div>
            {/each}
        </div>
        <div id="page_container">
            {#if page > 0}
            <button type="button" style="position: absolute; left: calc(50% - 90px); border:0; background: none; font-size:24px; font-weight:600; cursor:pointer;" on:click={pageLeft}> ⇦ </button>
            {/if}
            <b style="position: absolute; top: 13px;">{15 * page} - { (15 * page + (mainMenuList.length - 1) < 15 * (page+1) - 1) ? 15 * page + (mainMenuList.length - 1) : 15 * (page + 1) - 1 }</b>
            {#if page < selectedMenus.length - 1}
            <button style="position: absolute; left: calc(50% + 100px); border:0; background: none; font-size:24px; font-weight:600; cursor:pointer;" on:click={pageRight}> ⇨ </button>
            {/if}
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
        height: 40px;
        border-radius: 5px;
        margin-right: 1%;
    }
    #search_btn {
        position: relative;
        height: 40px;
        border: 1px solid lightgray;
        border-radius: 5px;
        text-align: center;
        background: white;
        cursor:pointer;
    }
    
    #actions {
        position: absolute;
        right: 0;
        width: 50%;
        display: flex; 
        justify-content: right; 
    }
    .action_btn {
        position: relative;
        height: 40px;
        border: 1px solid lightgray;
        border-radius: 5px;
        margin-left: 1%;
        text-align: center;
        background: white;
        cursor:pointer;
    }
    
    #search_btn:hover, .action_btn:hover {
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
    #page_container {
        position: relative;
        top: 50px;
        text-align: center;
    }
    
    @media (min-width: 1080px) {
        main {
            max-width: none;
        }
    }
    
    </style>