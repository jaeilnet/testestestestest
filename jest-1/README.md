1. Type of Test

- Unit Test
  - 코드의 한 유닛 혹은 단위를 테스트 한다.
  - 다른 코드의 유닛과 상호 작용하는 것은 테스트 하지 않는다.
- Integration test
  - 여러 유닛이 함께 작동하는 방식을 테스트
  - 유닛 간의 상호 작용을 테스트
  - ex) 컴포넌트 간의 상호 작용을 테스트 하거나 MSA 간의 상호 작용을 테스트 함
- Functional Test
  - 기능 테스트는 소프트웨어의 특정 기능을 테스트 함
  - 특정 코드 함수가 아닌 소프트웨어의 일반적인 동작을 의미
  - 일반적인 동작이란 데이터를 폼에 입력하고 제출을 클릭하면 소프트웨어가 특정 데이터 세트로 바르게 작동하는 기능을 확인해야 함
  - 입력란에 잘못된 데이터를 입력하면 빨갛게 변하는지 보는 테스트일 수도 있다.
  - **핵심 개념은 코드가 아닌 동작을 테스트 하는 것**
- End to End Test
  - 실제 브라우저가 필요함
  - 보통 Cypress 나 Selenium 과 같은 특별한 도구가 필요함
  - 애플리케이션을 실행해 보고 이것저것 클릭해 보는 것

---

Unit Test vs Functional Test

- Unit test

  - 함수나 컴포넌트를 테스트 할 때 의존성을 표시합니다.
  - 컴포넌트가 의존하는 다른 함수가 있으면 실제 버전 대신 테스트 버전을 사용합니다.
  - 테스트 코드의 한 유닛에 격리되어있기 때문에 테스트가 실패하면 어디를 확인해야 하는지 정확하게 알 수 있다
  - 리팩토링은 동작을 변경하는것이 아니라 작성방식을 변경하는 것이므로 리팩토링만으로도 실패할수도 있다.

- Functional Test
  - 유저 플로우와 연관된 모든 단위를 포함함
  - 장점은 사용자가 소프트웨어와 상호 작용 방식과 밀접하다는 것
  - 테스트에 통과하면 사용자에게 문제가 없지만 실패하면 사용자에게 문제가 생길 확률이 높다
  - 유닛 테스트와 반대로 리팩토링 시 동작이 변경되는 것이 아니라면 통과하게 된다.
  - 대신 코드와 밀접한 관계가 없어서 실패의 원인을 정확히 알 수 없다.
