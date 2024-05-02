import { writable } from "svelte/store";

export const menuStore = writable();

export const defaultMenu = [
    //가게명, 카테고리, 간단한 설명, 방문날짜, 중복여부(일주일)
    { "name": '로와테이블', "category": '양식', "description": '회사 1층 파스타', "visitDate": '2024/04/01', "dup": false, },
    { "name": '이차돌', "category": '한식', "description": '고기, 차돌박이', "visitDate": '2024/04/01', "dup": false, },
    { "name": '블리스버거', "category": '양식', "description": '패스트푸드, 수제버거', "visitDate": '2024/04/01', "dup": false, },
    { "name": '이도곰탕', "category": '한식', "description": '국밥', "visitDate": '2024/04/01', "dup": false, },
    { "name": '92', "category": '한식', "description": '해산물, 생선, 구이, 조림', "visitDate": '2024/04/01', "dup": false, },
//    { "name": '스위치', "category": '카페', "description": '샐러드, 샌드위치', "visitDate": '2024/04/01'', "dup": false, },
//    { "name": '오토김밥', "category": '한식', "description": '분식, 김밥', "visitDate": '2024/04/01'', "dup": false, },
    { "name": '샤오바오', "category": '중식', "description": '탄탄면', "visitDate": '2024/04/01', "dup": false, },
//    { "name": '슬로우캘리', "category": '카페', "description": '샐러드', "visitDate": '2024/04/01', "dup": false, },
    { "name": '미분당', "category": '동남아(베트남)', "description": '베트남', "visitDate": '2024/04/01', "dup": false, },
    { "name": '나이쏘이', "category": '동남아(태국)', "description": '태국', "visitDate": '2024/04/01', "dup": false, },
    { "name": '불독 돈까스', "category": '한식', "description": '돈까스', "visitDate": '2024/04/01', "dup": false, },
    { "name": '양평해장국', "category": '한식', "description": '국밥, 해장국', "visitDate": '2024/04/01', "dup": false, },
    { "name": '청담초밥', "category": '일식', "description": '초밥', "visitDate": '2024/04/01', "dup": false, },
    { "name": '삼꾸미집', "category": '한식', "description": '해산물, 쭈꾸미', "visitDate": '2024/04/01', "dup": false, },
    { "name": '겐코슈쿠도', "category": '일식', "description": '덮밥, 라멘', "visitDate": '2024/04/01', "dup": false, },
    { "name": '남쁠라', "category": '동남아', "description": '태국', "visitDate": '2024/04/01', "dup": false, },
    { "name": '강남면옥', "category": '한식', "description": '갈비탕, 냉면', "visitDate": '2024/04/01', "dup": false, },
    { "name": '나무젓가락', "category": '일식', "description": '라멘, 마제소바', "visitDate": '2024/04/01', "dup": false, },
    { "name": '석정', "category": '일식', "description": '초밥, 탕', "visitDate": '2024/04/01', "dup": false, },
    { "name": '씨즐', "category": '멕시칸', "description": '멕시칸, 타코, 파히타', "visitDate": '2024/04/01', "dup": false, },
    { "name": '문정돈', "category": '고기', "description": '고기', "visitDate": '2024/04/01', "dup": false, },
    { "name": '녹정', "category": '한식', "description": '샤브샤브', "visitDate": '2024/04/01', "dup": false, },
    { "name": '틈새라면', "category": '한식', "description": '분식', "visitDate": '2024/04/01', "dup": false, },

];