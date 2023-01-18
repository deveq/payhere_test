#  Payhere 과제

```text
고객은 내가 자주 가는 GitHub의 Public Repository의 Issue들을 모아서 보고 싶다.
찾아보니 GitHub에서 Open API를 제공하기 때문에, 이를 활용해서 개발할 수 있다.
자세한 요구사항은 다음과 같다. 
```
## 📝 요구사항

- [x] 검색창에 Repository명을 입력해서 Repository를 검색할 수 있다.
- [x] 검색된 Public Repository를 등록할 수 있다.
    - [x] 등록 개수는 최대 4개로 제한하며, 최대 개수 초과 등록 시 이를 사용자에게 알려준다.
    - [x] 웹은 LocalStorage, 앱은 Async Storage 등 로컬 저장소를 활용한다. (웹 혹은 앱 선택)
- [x] 등록된 Repository를 삭제할 수 있다.
- [x] 등록된 각각의 Public Repository의 issue를 한 페이지에서 모아서 볼 수 있다.
    - [x] 각 issue 마다 제목, Repository 명은 필수로 표현되어야 한다. 그 이외의 데이터 중 필요하다고 생각되는 부분은 추가한다.
    - [x] 해당 issue를 클릭하면 Github의 상세 페이지로 이동할 수 있다.
    - [x] 페이지네이션을 통해서 계속해서 issue를 모아서 볼 수 있다.
- [ ] 기능 추가
    - [ ] Github 로그인 추가
    - [ ] issue 필터링
    - [x] Settings 페이지 추가
    - [x] 다크모드
    - [x] 검색목록
    - 


## 📦 사용 라이브러리 및 스택

<img src="https://img.shields.io/badge/-REACT-61DAFB.svg?style=for-the-badge&logo=react&logoColor=black" alt="react" /> <img src="https://img.shields.io/badge/-typescript-3178C6.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript" /> <img src="https://img.shields.io/badge/-testing library-e33332.svg?style=for-the-badge&logo=testing-library&logoColor=white" alt="testing library" />

<img src="https://img.shields.io/badge/-axios-5A29E4.svg?style=for-the-badge&logo=axios&logoColor=white" alt="axios" /> <img src="https://img.shields.io/badge/-styled components-DB7093.svg?style=for-the-badge&logo=styled-components&logoColor=white" alt="styled components" />

<img src="https://img.shields.io/badge/-react query-FF4154.svg?style=for-the-badge&logo=react-query&logoColor=white" alt="react query" /> <img src="https://img.shields.io/badge/-react router-CA4245.svg?style=for-the-badge&logo=react-router&logoColor=white" alt="react" />

## 🖥 시연 화면

## 🤔 느낀점