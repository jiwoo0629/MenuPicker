import { writable } from "svelte/store";

export const menuStore = writable();

//가게명, 카테고리, 간단한 설명, 방문날짜, 중복여부(일주일)
export const defaultMenu = [
  {
    "name": "92",
    "category": "한식",
    "description": "해산물, 생선, 구이, 조림",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "BBQ",
    "category": "치킨",
    "description": "치킨",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "강남면옥",
    "category": "한식",
    "description": "갈비탕, 냉면",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "강창구찹쌀진순대",
    "category": "한식",
    "description": "순대국",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "겐코슈쿠도",
    "category": "일식",
    "description": "덮밥, 라멘",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "계림 닭도리탕",
    "category": "한식",
    "description": "닭도리탕",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "교동짬뽕",
    "category": "중식",
    "description": "탕수육, 짜장면, 짬뽕",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "나무젓가락",
    "category": "일식",
    "description": "라멘, 마제소바",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "나이쏘이",
    "category": "동남아(태국)",
    "description": "태국",
    "visitDate": "1970/01/01",
    "dup": true
  },
  {
    "name": "남쁠라",
    "category": "동남아(태국)",
    "description": "태국",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "녹정",
    "category": "한식",
    "description": "샤브샤브",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "달래해장",
    "category": "한식",
    "description": "해장국",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "로와테이블",
    "category": "양식",
    "description": "회사 1층 파스타",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "문정돈",
    "category": "고기",
    "description": "고기",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "문정칼국수",
    "category": "한식",
    "description": "지하 1층 칼국수",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "문정한방삼계탕",
    "category": "한식",
    "description": "삼계탕",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "미도인",
    "category": "양식",
    "description": "스테이크, 덮밥",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "미분당",
    "category": "동남아(베트남)",
    "description": "베트남",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "밀숲",
    "category": "한식",
    "description": "칼국수",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "발효묵은지 강찜찌",
    "category": "한식",
    "description": "김치찌개, 고등어정식",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "봉추찜닭",
    "category": "한식",
    "description": "찜닭",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "불독 돈까스",
    "category": "한식",
    "description": "돈까스",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "블리스버거",
    "category": "양식",
    "description": "패스트푸드, 수제버거",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "산들바다",
    "category": "한식",
    "description": "비빔밥, 덮밥",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "산척동수제비",
    "category": "한식",
    "description": "수제비",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "삼꾸미집",
    "category": "한식",
    "description": "해산물, 쭈꾸미",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "삼산회관",
    "category": "한식",
    "description": "김치찌개, 돼지김치구이",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "샤오바오",
    "category": "중식",
    "description": "탄탄면",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "석정",
    "category": "일식",
    "description": "초밥, 탕",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "씨즐",
    "category": "멕시칸",
    "description": "멕시칸, 타코, 파히타",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "양평해장국",
    "category": "한식",
    "description": "국밥, 해장국",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "옥된장",
    "category": "한식",
    "description": "된장찌개, 김, 볶음김치",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "이도곰탕",
    "category": "한식",
    "description": "국밥",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "이차돌",
    "category": "고기",
    "description": "차돌박이",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "이태리부대찌개",
    "category": "한식",
    "description": "부대찌개",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "일루",
    "category": "한식",
    "description": "한식 뷔페",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "일방통행",
    "category": "양식",
    "description": "국물떡볶이, 화덕피자",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "정석",
    "category": "한식",
    "description": "퓨전 한식 뷔페",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "제주곤이칼국수",
    "category": "한식",
    "description": "칼국수",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "청담초밥",
    "category": "일식",
    "description": "초밥",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "틈새라면",
    "category": "한식",
    "description": "분식",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "파파호",
    "category": "동남아(태국)",
    "description": "태국, 쌀국수",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "해남짬뽕",
    "category": "중식",
    "description": "짬뽕, 짜장면",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "행복한순정감자탕",
    "category": "한식",
    "description": "감자탕",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "흥도식당",
    "category": "일식",
    "description": "돈까스, 카레",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "남산수재돈까스",
    "category": "한식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "고향옥얼큰순대국",
    "category": "한식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "청담순대국",
    "category": "한식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "부산밀면",
    "category": "한식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "88제육",
    "category": "한식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "은혜손칼국수",
    "category": "한식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "박가부대",
    "category": "한식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "봄이보리밥",
    "category": "한식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "담솥",
    "category": "한식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "닭국집",
    "category": "한식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "두부공방",
    "category": "한식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "감탄계숯불치킨",
    "category": "한식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "아들내미분식",
    "category": "한식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "김가네",
    "category": "한식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "오토김밥",
    "category": "한식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "얌샘김밥",
    "category": "한식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "선비칼국수",
    "category": "한식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "한우상회",
    "category": "한식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "무청감자탕",
    "category": "한식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "육대장",
    "category": "한식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "담소소사골순대육개장",
    "category": "한식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "매취랑감자탕",
    "category": "한식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "동태탕집",
    "category": "한식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "비비당",
    "category": "한식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "류창희국수",
    "category": "한식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "귀한족발",
    "category": "한식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "솥가득조개",
    "category": "한식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "육회바른연어",
    "category": "한식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "위도집",
    "category": "한식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "서가참치",
    "category": "일식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "시온텐동",
    "category": "일식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "우사기",
    "category": "일식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "고메무이",
    "category": "일식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "킨자카이",
    "category": "일식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "호또멘",
    "category": "일식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "이로이로",
    "category": "일식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "스시현",
    "category": "일식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "륜참치",
    "category": "일식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "부리나케",
    "category": "일식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "잇쇼니",
    "category": "일식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "고씨네",
    "category": "일식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "차이킹",
    "category": "중식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "한양중식",
    "category": "중식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "금만문",
    "category": "중식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "오한수우육면가",
    "category": "중식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "양자강",
    "category": "중식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "마라공방",
    "category": "중식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "샹츠마라",
    "category": "중식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "홍쉐프",
    "category": "양식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "덴테",
    "category": "양식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "파네파네",
    "category": "양식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "계란집",
    "category": "양식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "그린포유",
    "category": "양식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "란짠타부리",
    "category": "동남아식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "마낀카오",
    "category": "동남아식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "니트포",
    "category": "동남아식",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "버거킹",
    "category": "패스트푸드",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "KFC",
    "category": "패스트푸드",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "서브웨이",
    "category": "패스트푸드",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "맘스터치",
    "category": "패스트푸드",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  },
  {
    "name": "바스버거",
    "category": "패스트푸드",
    "description": "-",
    "visitDate": "1970/01/01",
    "dup": false
  }
];