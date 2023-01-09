1. eslint 설치

   > `npm install eslint-plugin-testing-library eslint-plugin-jest-dom`

2. package.json 에서 eslint-config 부분을 직접 config 파일을 만들어서 사용할 것이므로 삭제 해줌

3. .eslintrc.json 파일 생성 및 설정

```json
// .eslintrc.json

{
  "plugins": ["jest-dom", "testing-library"],
  "extends": [
    "react-app",
    "react-app/jest",
    "plugins:testing-library/recommended",
    "plugins:testing-library/react",
    "plugins:jest-dom/recommended"
  ]
}
```

4. .vscode < settings.json 생성 및 세팅

```json
{
  "eslint.options": {
    "configFile": ".eslintrc.json"
  },
  "eslint.validate": ["javascript", "javscriptreact"],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

5. git ignore 세팅

```.gitignore
.vscode
.eslintcache
```
