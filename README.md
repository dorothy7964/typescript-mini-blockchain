readme.so logo

light
Download
SectionsReset

Delete
Click on a section below to edit the contents

Click on a section below to add it to your readme

Custom Section

Acknowledgements

API Reference

Appendix

Authors

Badges

Color Reference

Contributing

Demo

Deployment

Documentation

Environment Variables

FAQ

Features

Feedback

Github Profile - About Me

Github Profile - Introduction

Github Profile - Links

Github Profile - Other

Github Profile - Skills

Installation

Lessons

License

Logo

Optimizations

Related

Roadmap

Run Locally

Screenshots

Support

Tech

Running Tests

Usage/Examples

Used By
Editor

#### ompilerOptions 속성

| 옵션     | 옵션 값 | 설명                                                                  |
| :------- | :------ | :-------------------------------------------------------------------- |
| `outDir` | `build` | 자바스크립트 파일이 **생성될 디렉토리**를 지정                        |
| `target` | `ES6`   | **어떤 버전**의 자바스크립트로 타입스크립트를 컴파일 하고 싶은지 작성 |

Preview
Raw

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

| 옵션     | 옵션 값 | 설명                                                                  |
| :------- | :------ | :-------------------------------------------------------------------- |
| `outDir` | `build` | 자바스크립트 파일이 **생성될 디렉토리**를 지정                        |
| `target` | `ES6`   | **어떤 버전**의 자바스크립트로 타입스크립트를 컴파일 하고 싶은지 작성 |
