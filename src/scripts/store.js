import { writable } from "svelte/store";
export const menuStore = writable();

export const defaultMenu = [
    //가게명, 카테고리, 간단한 설명, 방문날짜, 중복여부(일주일)
    { "name": '', "category": '', "description": '', "visitDate": new Date().getTime(), "dup": false, },
];