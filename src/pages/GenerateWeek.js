import Counter from '../features/counter/Counter';

import styled from 'styled-components';


const GenerateWeek = () => {
  return (
    <GenerateWeekStyled>
        <h1>Generate Week</h1>
        <div>
          <Counter />
        </div>
    </GenerateWeekStyled>
  )
}

const GenerateWeekStyled = styled.div`

`

export default GenerateWeek