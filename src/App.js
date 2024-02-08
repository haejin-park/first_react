import {useEffect, useState} from 'react';
import './App.css';

function App() {
  let counter = 0;
  const [counter2, setCounter2] = useState(0);
  const [value, setValue] = useState(0);
  const increase = () => {
    counter = counter + 1;
    setCounter2(counter2+1);
    setValue(value+2);
    console.log('counter', counter, "counter2", counter2, "value", value);
  };

  /*
  순서
  유저가 버튼 클릭
  counter+1해서 1이됨
  setState함수 호출
  console.log 실행됨

  변수값은 1로 보이고 state 값은 아직 안변했기 때문에 그 전에 값이 보인다
  함수 끝
  app 다시 re render
  let counter = 0을 거치면서 counter값은 다시 0으로 초기화가 된다
  update된 state값이 보인다 
*/
  useEffect(() => {
    console.log("useEffect1 Fire");
  },[]);

  useEffect(() => {
    console.log("useEffect2 Fire", counter2);
  },[counter2]);


  useEffect(() => {
    console.log("useEffect3 다른내용", value);
  },[value]);

  return (
    <div>
      {console.log("render")}
      <div>{counter}</div>
      <div>state: {counter2}</div>
      <button onClick={increase}>클릭!</button>
    </div>
  );
}

export default App;