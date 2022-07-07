## Installation

새 nodeJs 프로젝트 추가

```bash
  npm init -y
```

타입스크립트 설치

```bash
  npm install -D typescript
```

## build

```bash
  npm run build
```

## tsconfig.json

이 파일이 있으면, vs code는 타입스크립트로 작업한다는 것을 즉시 알 수 있다.

#### include

- 어디에 타입스크립트 파일이 위치하는지 작성
- 자바스크립트로 컴파일하고 싶은 모든 디렉토리를 넣기

#### ompilerOptions 속성

| 옵션     | 옵션 값          | 설명                                    |
| :------- | :--------------- | :-------------------------------------- |
| `outDir` | `build`          | TS에 컴파일할 코드를 찾을 **위치** 지정 |
| `target` | `ES6`            | 컴파일할 JS의 **버전**을 지정           |
| `lib`    | `["ES6", "DOM"]` | 코드가 실행될 **환경**을 지정           |
| `strict` | `boolean`        | 엄격한 타입 체크                        |
