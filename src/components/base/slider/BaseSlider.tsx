import styled from "styled-components";

type Props = {
  deposit: number;
  handleDeposit: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BaseSlider = ({ deposit, handleDeposit }: Props) => {


  return (
    <Container>
      <Number>
        0
      </Number>
      <Slider
        type="range"
        min="0"
        max="300"
        value={deposit}
        onChange={(event) => {
          handleDeposit(event)
        }}
      />
      <Number>
        300
      </Number>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Slider = styled.input`
  color: '#8A01D7';
  width: 80%;
`

const Number = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin: auto 5px;
`

export default BaseSlider;