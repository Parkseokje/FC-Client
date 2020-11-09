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

## 트러블 슈팅

- ./secret 파일은 gitignore 되어 있음. 서버에 import/별도 작성해야 함.
- `npm install`시 python2.7에 대한 오류 발생: `pyenv install 2.7.16`
- `bcrypt` 오류 시 `npm rebuild bcrypt --build-from-source`

  ```
  dyld: lazy symbol binding failed: Symbol not found: _napi_add_finalizer
  Referenced from: /Users/seokjepark/Code/FC-Client/node_modules/bcrypt/lib/binding/napi-v3/bcrypt_lib.node
  Expected in: flat namespace
  ```

- `npm run build` 시 Requires Babel "^7.0.0-0", but was loaded with "6.26.3".` 오류 발생하면,

  ```
  $ yarn why babel-core
  $ npm install --save-dev babel-core@^7.0.0-bridge.0
  ```

###Todo list

- 아쿠아 플레이어 desktop 적용 (17.11.10)
