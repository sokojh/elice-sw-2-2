import Logo from './instagram_logo.png';

//1.내비게이션 영역인 Nav bar 기본 구조를 생성하세요.
const Nav = () => `<nav> 
     <a href="#" class="logo">
                     <img src=${Logo}  alt="logo">
     </a>
     <input type="text" class="search" placeholder="Search">
     <span class="nav-links">
         <a href="#"><i class="fal fa-home-alt"></i></a>
         <a href="#"><i class="far fa-plus-square"></i></a>
         <a href="#"><i class="far fa-compass"></i></a>
         <a href="#"><i class="far fa-heart"></i></a>
        </span>
</nav>`
//2. `<nav>...</nav> `내에 내비게이션 바의 총 3가지 요소들(인스타그램 로고, 검색창, 상단 메뉴 탭)을 구성하세요.




export default Nav;
