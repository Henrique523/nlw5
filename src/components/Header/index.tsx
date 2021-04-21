import React from 'react'

import { HeaderContainer, HeaderTextContainer, RegularHeaderText, BoldHeaderText, HeaderImage } from './styles'

import henriqueImg from '../../assets/henrique.png'

interface HeaderProps {
  regularText: string
  boldText: string
}

export const Header: React.FC<HeaderProps> = ({ boldText, regularText}) => {
  return (
    <HeaderContainer>
      <HeaderTextContainer>
        <RegularHeaderText>{regularText}</RegularHeaderText>
        <BoldHeaderText>{boldText}</BoldHeaderText>
      </HeaderTextContainer>

      <HeaderImage source={henriqueImg} />
    </HeaderContainer>
  )
}
