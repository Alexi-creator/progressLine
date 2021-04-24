import React from 'react';
import {Switch, Route} from "react-router-dom";
import styled from 'styled-components'
import Header from './components/Header/Header';
import StepContainerProgress from './Page/Step/StepContainerProgress';

const ContainerDiv = styled.div`
  height: calc(100vh - 80px);
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const WrapDivs = styled.div`
  display: flex;
`

function App(props) {

  return (
    <>
      <Header />
      <WrapDivs>
        <ContainerDiv>
          <Switch>
            <Route path='/' component={StepContainerProgress} />
          </Switch>
        </ContainerDiv>
      </WrapDivs>
    </>
  );
}

export default App;
