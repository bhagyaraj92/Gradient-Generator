import styled from 'styled-components/macro'

export const ListItems = styled.li`
  list-style-type: none;
  width: 49%;
  @media screen and (min-width: 768px) {
    width: 24%;
  }
`
export const DirectionButton = styled.button`
  text-align: center;
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  font-family: 'Roboto';
  background-color: #ffffff;
  font-weight: 600;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  width: 100%;
  border-radius: 6px;
  border: none;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  margin-bottom: 10px;
  outline: none;
  cursor: pointer;
`
