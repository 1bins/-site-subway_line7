<img src="./public/subWayLine7/intro.png">

<br/>

# 지하철 7호선 운행 안내 서비스
<a href="http://wbins2.dothome.co.kr/" title="새 창으로 열기" target="_blank">http://wbins2.dothome.co.kr/</a>
<blockquote>서울 열린데이터 광장 API를 이용하여 만든 지하철 7호선 운행 안내 서비스입니다</blockquote>
<br/>

## 프로그래밍 언어 & 프레임워크
<p align="left">
  <img src="https://camo.githubusercontent.com/5d01ff32c8ff69d52e2e19e6f2d6c3dec2565398ab6a49d85451f46726224614/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742d3631444146423f6c6f676f3d7265616374266c6f676f436f6c6f723d7768697465" height="24px">
  <img src="https://camo.githubusercontent.com/64e3ed535b90fafa087dab829106804d76bd80a40ac55a542a4a51ff5dd440fa/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f48544d4c352d4533344632363f7374796c653d666c6174266c6f676f3d48544d4c35266c6f676f436f6c6f723d7768697465" height="24px">
  <img src="https://camo.githubusercontent.com/d6bf556d08b49b7bdeca54eaae43675eec1a6249b9f9ab589ed7b8c6393e182d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f435353332d3135373242363f7374796c653d666c6174266c6f676f3d43535333266c6f676f436f6c6f723d7768697465" height="24px">
  <img src="https://camo.githubusercontent.com/a7eb481788fac742d0221a66cc189ac35c808e5389c353c8e5296c91cee336ce/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d4637444631453f7374796c653d666c6174266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d7768697465" height="24px">
</p>
<br/>

### API 호출 및 변수 정리
<img src="./public/subWayLine7/app.png" width="100%">
<blockquote>1) 서울 열린데이터 광장에서 발급받은 키를 이용하여 암호화(env 파일에 저장)한 뒤 API를 호출하였습니다.
<br/>2) filter함수를 사용하여 7호선 노선만 가져오게 하였고, 상행과 하행을 구분하였습니다.
<br/>3) arrivalMsg state에 객체로 값들을 담게 하였고, 값들이 없을 경우(종점에 가까운 역일수록 하행2 혹은 상행2값이 없을 경우)를 대비하여 '&&'을 사용하였습니다.</blockquote>
<br/>

### Map 컴포넌트
<img src="./public/subWayLine7/map.png" width="100%">
<blockquote>7호선 데이터를 배열 안의 객체들로 담아준 뒤 js로 저장 후 export하였고, Map 컴포넌트 파일에서 import해준 다음 Station이라는 컴포넌트로 하나씩 뿌려지게 설정하였습니다.</blockquote>
<br/>

### Station 컴포넌트
<img src="./public/subWayLine7/station.png" width="100%">
<blockquote>부모 컴포넌트인 Map에서 onClick={setStation}으로 station의 상태를 변화해주는 함수를 받아왔고, 클릭을 했을 때 station에 name값을 전달하게 하였습니다.
<br/>또한 클릭이 발생했을 때 현재 클릭한 역을 알려주기 위해 현재 클릭한 역 name과 station에 설정된 state가 같을 경우 true를 반환하는 clickedStation을 만들어 class에 전달게 하였습니다.</blockquote>
<br/>

### ArrInfo 컴포넌트
<img src="./public/subWayLine7/arrInfo_1.png" width="100%">
<blockquote>현재 역을 기준으로 이전 역과 다음 역의 정보를 받아오게 하였습니다.
<br/>출발점이나 종점일 경우 각 이전역과 다음역이 없게 되므로 그에 따라 null이 반환되게 설정하였습니다.</blockquote>
<br/>

<img src="./public/subWayLine7/arrInfo_2.png" width="100%">
<blockquote>이전 역과 다음 역을 클릭했을 때 station state의 값을 클릭한 역의 이름으로 바꾸는 함수를 작성하였습니다.</blockquote>
<br/>

<img src="./public/subWayLine7/arrInfo_3.png" width="100%">
<blockquote>arrivalMsg state을 통해 받아온 값을 노출되게 하였고, 만약 값이 없을 경우 '도착 예정 정보가 없습니다'라는 텍스트가 노출되게 하였습니다.</blockquote>
<br/>


## 프로젝트 설명
### 지하철역을 클릭하면 해당 역의 도착 정보를 확인 할 수 있어요
<img src="./public/subWayLine7/selectStation.gif" width="100%">
<br/>

### 이전 역 혹은 다음 역을 클릭하면 이동됨과 동시에 이동된 역의 도착 정보가 노출돼요
<img src="./public/subWayLine7/prevNextStation.gif" width="100%">
<br/>

### 새로고침 버튼을 누르면 최신 시간대의 도착 정보를 가져올 수 있어요
<img src="./public/subWayLine7/reload.gif" width="100%">
<blockqutoe>서울 열린데이터 광장에서 지원하는 API의 업데이트 시간이 30초라서 계속 새로고침해도 바로 반영되지는 않아요 :(</blockqutoe>
