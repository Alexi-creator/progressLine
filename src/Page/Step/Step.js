import React from 'react'
import styled from 'styled-components'

const WrapStep = styled.div`
  width: 90%;
`

const LineProgressWrap = styled.div`
  position: relative;
  width: calc(100% - 20px);
  height: 5px;
  background-color: #fff;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    width: ${props => props.width};
    height: 100%;
    top: 0;
    background-color: #5125DB;
    z-index: 2;
    transition: width 0.5s ease;
  }
  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: #DBDBDB;
    z-index: 1;
  }
`

const Circul = styled.div`
  position: absolute;
  top: calc(50% - 10px);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 5px solid ${props => props.color};
  z-index: 3;
  background-color: #fff;
  left: ${props => props.left};
  cursor: pointer;
  transition: border 0.3s ease;
  &:after {
    content: '${props => props.textStep}';
    position: absolute;
    top: -30px;
    left: -150%;
    width: auto;
    color: ${props => props.color};
    transition: color 0.3s ease;
  }
`

const Step = ({numberStep, currentStep, changePoint, textStep}) => {

  // колличество точек = колличество шагов(расстояние между точками) +1
  const numberPoint = numberStep + 1
  // создаем массив где будут точки в зависимости от props будет меняться их кол-во и цвет
  const point = []
  
  // ширина от точки до точки в зависимости от кол-ва точек
  let leftProgress = 100 / numberStep
  // для каждой точки будет отступ слева на ширину шага leftProgress (первая точка 0% слева)
  let countLeftProgress = 0
  // цвет точки сиреневый если попадает в законченный шаг (шаг может фиксироваться в state redux например)
  let currentStepCircul = currentStep + 1

  for (let i = 0; i < numberPoint; i++) {
    point.push(<Circul key={i} 
                       left={`${countLeftProgress}%`} 
                       color={currentStepCircul ? '#5125DB' : '#DBDBDB'}
                       onClick={() => changePoint(i)} 
                       textStep={textStep[i]} >
      </Circul>)
    // увеличиваем шаг для отрисовки следующей точки на равное расстояние слева
    countLeftProgress += leftProgress
    // уменьшаем значение шага чтобы отрисовать точки сиреневые только те которые нужны
    currentStepCircul -= 1
    // не делаем точку сиреневой если не выполняется условие ниже
    if (currentStepCircul <= 0) currentStepCircul = 0
  }

 
  return(
    <>
      <WrapStep>
        <LineProgressWrap width={`${leftProgress * currentStep}%`}>
          {point}
        </LineProgressWrap>
      </WrapStep>
    </>
  )
}

export default Step








