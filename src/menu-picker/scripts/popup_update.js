import { menuStore } from "./store";
import { get } from "svelte/store";
import { w2grid, w2popup, w2alert, w2ui  } from '../../../scripts/w2ui-2.0.es6';
import { select, selectAll } from '../../../scripts/d3';

export function popupUpdate(menu) {
    window.popupUpdate(menu);
}

window.popupUpdate = function(menu) {
    w2popup.open({
        title: "메뉴 수정하기",
        body: "<div id='popup_update'></div>",
        actions: ['Close'],
        width: 520,
        height: 375,
        showClose: false,
        showMax: false,
        multiple: false,
    })
    .then(() => {
        showPopup(menu);
    })
    .close(() => {
        w2popup.close();
        window.location.reload();
    })
}

function updateMenu(menu) {   
    if(select("#name").property("value") == "") 
        alert("가게명을 입력하세요");
    else if(select("#category_select").property("value") == "")
        alert("카테고리를 입력하세요");
    else if(select("#category_select").property("value") == "self" && select("#category").property("value") == "")
        alert("카테고리를 입력하세요");
    else if(select("#description").property("value") == "")
        alert("설명을 입력하세요")
    else {
        const menus = get(menuStore);
        var confirm = window.confirm("이 가게 정보를 수정하시겠습니까?")
        if(!confirm) return;
        else {
            menus.forEach(m => {
                if(m.name === menu.name) {
                    m.name = select("#name").property("value");
                    m.category = (select("#category_select").property("value") == "self") ? select("#category").property("value") : select("#category_select").property("value");
                    m.description = select("#description").property("value");
                }
            });
            menuStore.set(menus);
            localStorage.setItem("lunch_menu", JSON.stringify(menus, 3, null));
            alert("메뉴 정보가 수정되었습니다.");
            select("#name").property("value", "");
            select("#category_select").property("value", "");
            select("#description").property("value", "")
            w2popup.close();
            window.location.reload();
        }
    }
}

function showPopup(menu) {
    const popup_box = select('#popup_update');
    popup_box.style('background-color', '#fff');
    popup_box.style('user-select', 'none');
    const popup_frame = popup_box.append('svg');
    popup_frame.attr("width", 500).attr("height", 275);

    const name = popup_frame.append('g')
    appendLayer(name, "가게명", 50) 
    appendInput(name, "가게명", "name", menu.name, [50, 300])

    const category = popup_frame.append('g')
    appendLayer(category, "카테고리", 100)
    appendSelect(category, "category_select", menu.category, [100, 100])
    appendSelfInput(category, "카테고리", "category", [100, 150])
    category.select("#category_select").on('change', function() {
        if(select(this).property("value") == "self") select("#category").style("visibility", "visible");
        else select("#category").style("visibility", "hidden");
    })
    
    const description = popup_frame.append('g')
    appendLayer(description, "설명", 150)
    appendInput(description, "설명", "description", menu.description, [150, 300])

    const add = popup_frame.append('g')
    appendButton(add, "수정하기", "add_menu", [100, 40, 250-100/2, 200, 250, 200+40/2])
    add.on('click', (e) => {
        e.preventDefault();
        updateMenu(menu);
    });
}

function appendLayer(g, text, y) {
    g.append('text')
        .attr("x", 50)
        .attr("y", y)
        .style("font-size", "16px")
        .text(text);
}
function appendSelect(g, id, value, arr) {
    const menus = get(menuStore);
    const categorys = [];
    menus.forEach(menu => categorys.push(menu.category));
    const uniqueCategory = categorys.filter((element, index) => {
        return categorys.indexOf(element) === index;
    })
    let options = `<option value="">선택</option>`;
    uniqueCategory.forEach(c => {
        if(c === value) options += `<option value=${c} selected>${c}</option>`;
        else options += `<option value=${c}>${c}</option>`
    })
    options += `<option value="self">직접 추가</option>`
    
    g.append('foreignObject')
        .attr("x", 120)
        .attr("y", arr[0]-24)
        .attr("width", arr[1])
        .attr("height", 40)
        .style("font-size", "16px")
        .html(function() {
            return `<select id=${id} style="width:${arr[1]}px;">${options}</select>`
        });
}
function appendInput(g, text, id, value, arr) {
    g.append('foreignObject')
        .attr("x", 120)
        .attr("y", arr[0]-24)
        .attr("width", arr[1])
        .attr("height", 36)
        .style("font-size", "16px")
        .html(function() {
            return `<input type="text" id=${id} value='${value}' placeholder=${text} autocomplete="off" style="width:${arr[1]}px;" />`
        });
}
function appendSelfInput(g, text, id, arr) {
    g.append('foreignObject')
        .attr("x", 270)
        .attr("y", arr[0]-24)
        .attr("width", arr[1])
        .attr("height", 36)
        .style("font-size", "16px")
        .html(function() {
            return `<input type="text" id=${id} placeholder=${text} autocomplete="off" style="width:${arr[1]}px; visibility:hidden;" />`
        });
}
function appendButton(g, text, id, arr) {
    g.attr("id", id)
    .style("cursor", "pointer")
    .on('mouseover', function () { g.select('rect').style("fill", "#eee") })
    .on('mouseout', function () { g.select('rect').style("fill", "#fff") });

    g.append('rect')
        .attr("width", arr[0]) //width
        .attr("height", arr[1]) //height
        .attr("rx", 5)
        .attr("ry", 5)
        .attr("x", arr[2]) //x
        .attr("y", arr[3]) //y
        .style("stroke", "lightgray")
        .style("stroke-width", 1)
        .style("fill", "#fff")

    g.append('text')
        .attr("x", arr[4]) //text_x
        .attr("y", arr[5]) //text_y
        .attr("font-size", "16px")
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .style("fill", "black")
        .text(text);
}