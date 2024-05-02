import { menuStore } from "./store";
import { get } from "svelte/store";
import { w2popup } from '../../../scripts/w2ui-2.0.es6';
import { select, selectAll } from '../../../scripts/d3';

export function popupSelect() {
    window.popupSelect();
}

window.popupSelect = function() {
    w2popup.open({
        title: "점심 메뉴 추첨",
        body: "<div id='popup_select'></div>",
        actions: ['Close'],
        width: 820,
        height: 600,
        showClose: false,
        showMax: false,
        multiple: false,
    })
    .then(() => {
        menulist = get(menuStore).filter(d => d.dup == false);
        showPopup();
    })
    .close(() => {
        w2popup.close();
        window.location.reload();
    })
}

let menulist, menu;
let chance = 3; //남은 기회
function showPopup() {
    const popup_box = select('#popup_select');
    popup_box.style('background-color', '#fff');
    popup_box.style('user-select', 'none');
    const popup_frame = popup_box.append('svg');
    popup_frame.attr("width", 800).attr("height", 500);

    const result_frame = popup_frame.append('g');
    result_frame.append('rect')
        .attr("width", 600)
        .attr("height", 250)
        .attr("x", 100)
        .attr("y", 50)
        .attr("rx", 5)
        .attr("ry", 5)
        .style("stroke", "lightgray")
        .style("stroke-width", 1)
        .style("fill", "gray")
        .style("opacity", 0.3);
    result_frame.append('text')
        .attr("x", 400)
        .attr("y", 50+250/2)
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .style("font-size", "24px")
        .text("점심 메뉴를 추첨하려면 하단의 '추첨하기' 버튼을 클릭하세요");

    const selectBtn = popup_frame.append('g');
    selectBtn.append('rect')
        .attr("width", 150)
        .attr("height", 50)
        .attr("x", 400 - 150/2)
        .attr("y", 350)
        .attr("rx", 5)
        .attr("ry", 5)
        .style("stroke", "lightgray")
        .style("stroke-width", 1)
        .style("fill", "white");
    selectBtn.append('text')
        .attr("x", 400)
        .attr("y", 350+50/2)
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .style("font-size", "20px")
        .text("추첨하기");
    selectBtn.on('mouseover', function() {
        select(this).select('rect').style("fill", "gray");
        select(this).select('rect').style("opacity", 0.3);
        select(this).select('text').style("font-size", "22px");
    }).on('mouseout', function() {
        select(this).select('rect').style("fill", "white");
        select(this).select('rect').style("opacity", 1);
        select(this).select('text').style("font-size", "20px");
    }).on('click', function() {
        selectMenu()
    })

    const reselectBtn = popup_frame.append('g')
        .style("visibility", "hidden");
    reselectBtn.append('rect')
        .attr("width", 150)
        .attr("height", 50)
        .attr("x", 300 - 150/2)
        .attr("y", 350)
        .attr("rx", 5)
        .attr("ry", 5)
        .style("stroke", "lightgray")
        .style("stroke-width", 1)
        .style("fill", "white");
    reselectBtn.append('text')
        .attr("x", 300)
        .attr("y", 350+50/2)
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .style("font-size", "20px")
        .text("다시 추첨하기");
    reselectBtn.on('mouseover', function() {
        select(this).select('rect').style("fill", "gray");
        select(this).select('rect').style("opacity", 0.3);
        select(this).select('text').style("font-size", "22px");
    }).on('mouseout', function() {
        select(this).select('rect').style("fill", "white");
        select(this).select('rect').style("opacity", 1);
        select(this).select('text').style("font-size", "20px");
    }).on('click', function() {
        selectMenu();
    })

    const chooseBtn = popup_frame.append('g')
        .style("visibility", "hidden");
    chooseBtn.append('rect')
        .attr("width", 150)
        .attr("height", 50)
        .attr("x", 500 - 150/2)
        .attr("y", 350)
        .attr("rx", 5)
        .attr("ry", 5)
        .style("stroke", "lightgray")
        .style("stroke-width", 1)
        .style("fill", "white");
    chooseBtn.append('text')
        .attr("x", 500)
        .attr("y", 350+50/2)
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .style("font-size", "20px")
        .text("선택하기");
    chooseBtn.on('mouseover', function() {
        select(this).select('rect').style("fill", "gray");
        select(this).select('rect').style("opacity", 0.3);
        select(this).select('text').style("font-size", "22px");
    }).on('mouseout', function() {
        select(this).select('rect').style("fill", "white");
        select(this).select('rect').style("opacity", 1);
        select(this).select('text').style("font-size", "20px");
    }).on('click', function() {
        let confirm = window.confirm("이 메뉴를 선택하시겠습니까?");
        if(confirm) {
            menulist.forEach(m => {
                if(m.name === menu.name) {
                    var date = new Date();
                    m.visitDate = date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate();
                    m.dup = true;
                }
            })
            menuStore.set(menulist);
            localStorage.setItem("lunch_menu", JSON.stringify(menulist, 3, null));
            alert("오늘의 점심 메뉴는 " + menu.name + " 으로 결정 되었습니다. 감사합니다.");
            w2popup.close();
            window.location.reload();
        }
    })

    const chance_left = popup_frame.append('text')
        .attr("x", 400)
        .attr("y", 450)
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .style("font-size", "20px")
        .text("남은 횟수 : " + chance);

    function selectMenu() {
        chance--;
        chance_left.text("남은 횟수 : " + chance);
        selectBtn.remove();
        reselectBtn.style("visibility", "hidden");
        chooseBtn.style("visibility", "hidden");
        result_frame.selectAll('text').remove();
        const result_text = result_frame.append('text')
            .attr("x", 400)
            .attr("y", 50+250/2)
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "middle")
            .style("font-size", "24px")
            .text("추첨 중입니다...");
        setTimeout(() => {
            menu = menulist[Math.floor(Math.random() * menulist.length)];
            result_text.style("fill", "red");
            result_text.style("font-size", "36px");
            result_text.style("font-weight", 600);
            result_text.style("cursor", "pointer");
            result_text.text("결과 확인하기 ▹");
            result_text.on('click', function() {
                result_text.remove();
                const selectresult = result_frame.append('g');
                selectresult.append('text')
                    .attr("x", 400)
                    .attr("y", 90)
                    .attr("text-anchor", "middle")
                    .attr("alignment-baseline", "middle")
                    .attr("font-size", "20px")
                    .text("추첨 결과");
                selectresult.append('text')
                    .attr("x", 400)
                    .attr("y", 160)
                    .attr("text-anchor", "middle")
                    .attr("alignment-baseline", "middle")
                    .attr("font-size", "48px")
                    .style("fill", "red")
                    .text(menu.name);
                selectresult.append('text')
                    .attr("x", 400)
                    .attr("y", 225)
                    .attr("text-anchor", "middle")
                    .attr("alignment-baseline", "middle")
                    .attr("font-size", "16px")
                    .text(menu.category);
                selectresult.append('text')
                    .attr("x", 400)
                    .attr("y", 250)
                    .attr("text-anchor", "middle")
                    .attr("alignment-baseline", "middle")
                    .attr("font-size", "16px")
                    .text(menu.description);
    
                if(chance > 0) reselectBtn.style("visibility", "visible");
                if(chance == 0) {
                    chooseBtn.select('rect').attr("x", 400 - 150/2);
                    chooseBtn.select('text').attr("x", 400);
                }
                chooseBtn.style("visibility", "visible");
            })
        }, 2000);
    }
}