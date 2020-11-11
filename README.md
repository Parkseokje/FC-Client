# FC Client

## 준비

- Node v8.16.1에서 동작

## 시작하기

### 설치

```
$ yarn install
```

### 실행

```
$ yarn start # http:localhost:3002에서 확인
```

## 이슈

- 서버에서 device type에 따라 다른 아쿠아플레이어 버젼(htmp/app)의 페이지를 내려주는데 아이패드의 경우 pc로 인식되는 문제로 인해 app 버젼의 플레이어가 실행되지 않음.

## 트러블 슈팅

- ./secret 파일은 gitignore 되어 있음. 서버에 import/별도 작성해야 함.
- `npm install`시 python2.7에 대한 오류 발생: `pyenv install 2.7.16`
- `bcrypt` 오류 시 `npm rebuild bcrypt --build-from-source` 또는 `bcryptjs` 사용

  ```
  dyld: lazy symbol binding failed: Symbol not found: _napi_add_finalizer
  Referenced from: /Users/seokjepark/Code/FC-Client/node_modules/bcrypt/lib/binding/napi-v3/bcrypt_lib.node
  Expected in: flat namespace
  ```

###Todo list

- 아쿠아 플레이어 desktop 적용 (17.11.10)
