import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  background: url("src/assets/images/header-bg-01.png");
  width: 100%;
  height: 400px;
  background-position: center;
  background-size: cover;
`;

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
`;

export const SearchBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px 100px;
`;

export const TextLogo = styled.div`
  color: #f65261;
  font-size: 16px;
  font-weight: bold;
`;

export const AddButton = styled.button`
  color: #f65261;
  border: none;
  background: #55555540;
  border-radius: 5px;
  padding: 15px 35px;
  font-size: 18px;
  cursor: pointer;
`;

export const Title = styled.p`
  color: #ffffff;
  font-size: 45px;
`;

export const SearchButton = styled.button`
  background: #f65261;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 15px 55px;
  font-size: 18px;
  cursor: pointer;
  margin-left: 5px;
`;

export const SearchInput = styled.input`
  border: none;
  border-radius: 5px;
  padding: 18px;
  background: #23232380;
  font-size: 16px;
  color: #ffffff;
`;

export const SearchLine = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
`;
