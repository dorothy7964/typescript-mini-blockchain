## Installation

새 nodeJs 프로젝트 추가

```bash
  npm init -y
```

타입스크립트 설치

```bash
  npm install -D typescript
```

ts-node 설치 : 빌드 없이 타입스크립트를 실행

```bash
  npm i -D ts-node
```

nodemon 설치 : 자동으로 커맨드를 재실행

```bash
  npm i nodemon
```

@types/node 설치 : nodejs를 위한 타입 설치

```bash
  npm i -D @types/node
```

[DefinitelyTyped Github 바로가기](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types)

<br><br>

## 실행

```bash
  npm run dev
```

<br><br>

## tsconfig.json

이 파일이 있으면, vs code는 타입스크립트로 작업한다는 것을 즉시 알 수 있다.

<br>

#### include

- 어디에 타입스크립트 파일이 위치하는지 작성
- 자바스크립트로 컴파일하고 싶은 모든 디렉토리를 넣기

<br>

#### ompilerOptions 속성

| 옵션              | 옵션 값          | 설명                                                      |
| :---------------- | :--------------- | :-------------------------------------------------------- |
| `outDir`          | `build`          | TS에 컴파일할 코드를 찾을 **위치** 지정                   |
| `target`          | `ES6`            | 컴파일할 JS의 **버전**을 지정                             |
| `lib`             | `["ES6", "DOM"]` | 코드가 실행될 **환경**을 지정                             |
| `strict`          | `boolean`        | 엄격한 타입 체크                                          |
| `allowJs`         | `boolean`        | 타입스크립트 안에 자바스크립트를 허용                     |
| `esModuleInterop` | `true`           | ES6 모듈 사양을 준수하여 CommonJS 모듈을 가져오기.        |
| `module`          | `CommonJS`       | CommonJS 포맷은 Node.js (서버사이드 자바스크립트) 의 표준 |

<br><br>

## // @ts-check

- 타입스크립트 파일한테 자바스크립트 파일을 확인하라고 알리는 것
- 타입스크립트 파일이 자바스크립트 파일을 확인하게도 하고싶고 완전히 타입스크립트로 이전하고 싶지 않을 때 사용한다.

<br><br>

## JSDoc

- 코멘트로 이루어진 문법이다.
- 함수 바로 위에 코멘트를 적어주면 된다.

```javascript
// @ts-check
/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */
export function init(config) {
  return true;
}

/**
 * Exits the project
 * @param {number} code
 * @returns number
 */
export function exit(code) {
  return code + 1;
}
```

<br><br>

## 블럭체인

블럭체인은 여러개의 블록이 사슬처럼 묶인 것이다.

**hash**는 **블록의 고유 서명**과 같은 것이다.

해쉬의 장점은 이상하게 생긴 데이터 표시면서 결정론적이라는 것이다.

예를들 123 이라는 숫자를 해쉬값으로 변환하면 항상 같은 문자열이 나온다.

123 = ;akaklsjfk

**데이터가 변하지 않으면 해쉬값도 변하지 않는다.**

이런 방법이 블록체인에서 블록을 보호하는 방법이다.

<br>

#### 해쉬값 만들기 : NodesJS 패키지 중 하나인 crypto 를 이용
