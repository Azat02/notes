import styled from 'styled-components/macro';
import plus from '../assets/plus.png'
import delet from '../assets/delete.png'
import edit from '../assets/edit.png'



const Header = styled.header`
    width:100%;
    min-height: 7%;
    background-color:${({theme})=>theme.bg1} ;
    border-radius: 10px 10px 0 0 ;
    padding: 9px 20px 0 20px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 425px) {
      /* flex-direction: column; */
      border-radius: 0;
    }
`;

const Icon = styled.img `
  width: 20px; 
  height: 20px;
  @media (max-width: 768px) {
    width: 15px; 
    height: 15px;
  }
`

const IconWrapper = styled.div`
  display: flex;
  gap: 10px;

`

const IconBlock = styled.div`
  width: 50px;
  height: 30px;
  background-color: ${({theme})=>theme.bg4};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 30px; 
    height: 30px;
  }
`

const Search = styled.input`
  width: 200px;
  height: 30px;
  border: none;
  border-radius: 5px;
  padding-left: 10px ;
  &::placeholder {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (max-width: 768px) {
    width: 40%; 
    height: 30px;
  }
  @media (max-width: 768px) {
    width: 50%; 
  }
`

function Nav() {
  return (
    <>
      <Header>
        <IconWrapper>
          <IconBlock>
            <Icon src={plus} alt="plus" />
          </IconBlock>
          <IconBlock>
            <Icon src={delet} alt="plus" />
          </IconBlock>
          <IconBlock>
            <Icon src={edit} alt="plus" />
          </IconBlock>
        </IconWrapper>
        <Search placeholder='search'/>
      </Header>
    </>
  )
}

export default Nav