# Typing Web Application
## 1. 설명
타자 연습할 수 있는 Web Application입니다. React Hooks로 작성되었습니다.  
KakaoAPI를 활용해 사용자 정보를 가져오고 저장합니다. (Demo : [Typing](https://lee-donghyun.github.io/Typing/)) 

![preview](/preview.png)
![preview_kakao](/preview_kakao.png)

## 2. 사용 기술
| 사용 기술 | 설명 |
|--|--|
| React Hooks | ES6+을 기반으로 한 Hooks로 작성 |
| UseReducer() | 상태 관리 |
| UseContext()| context 접근 |
| UseEffect() | API 전송 설정 |
| React-Router | 애플리케이션 라우팅 (BrowserRouter) |
| KakaoAPI| 카카오로 로그인하기 구현 |
| styled-components | CSS-in-JS |
| ant-design| Layout, MenuBar, icon등 |

## 3. state
| state | 설명 |
|--|--|
| name : string | 사용자 이름. (사용자가 설정하거나 Kakao와 동기화) |
| mode : string | 현재 어플리케이션이 보여줄 화면 모드 |
| goal : number[] | 목표 타수와 정확도 (Kakao와 동기화) |
|record : number[] | 사용자 타수와 정확도 (Kakao와 동기화) |
|start : number|연습 시작 시각|
|end: number|연습 끝난 시각|
|letters : string|연습 시 사용자에게 보여줄 글자|
|kakao : { login : boolean, profile_img : string }|KakaoAPI에서 받아온 정보 저장|

## 4. components

![component_detail](/component_detail.jpg)


