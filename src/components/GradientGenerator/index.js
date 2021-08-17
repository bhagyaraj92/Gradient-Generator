import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  MainContainer,
  ContentContainer,
  Heading,
  DirectionText,
  UnorderedList,
  PickTheColor,
  ColorPickContainer,
  ColorPickInputContainer,
  ColorCode,
  CustomInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    fromInput: '#8ae323',
    toInput: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value},#8ae323,#014f7b`,
  }

  onGenerate = () => {
    const {activeGradientDirection, fromInput, toInput} = this.state

    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${fromInput}, ${toInput}`,
    })
  }

  onChangeFromInput = event => {
    this.setState({fromInput: event.target.value})
  }

  onChangeToInput = event => {
    this.setState({toInput: event.target.value})
  }

  clickGradientDirectionItem = direction => {
    this.setState({activeGradientDirection: direction})
  }

  render() {
    const {
      activeGradientDirection,
      fromInput,
      toInput,
      gradientValue,
    } = this.state
    return (
      <MainContainer
        gradientValue={gradientValue}
        data-testid="gradientGenerator"
      >
        <ContentContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <DirectionText>Choose Direction</DirectionText>
          <UnorderedList>
            {gradientDirectionsList.map(each => (
              <GradientDirectionItem
                key={each.directionId}
                gradientDirectionDetails={each}
                isActive={activeGradientDirection === each.value}
                clickGradientDirectionItem={this.clickGradientDirectionItem}
              />
            ))}
          </UnorderedList>
          <PickTheColor>Pick the Colors</PickTheColor>
          <ColorPickContainer>
            <ColorPickInputContainer>
              <ColorCode>{fromInput}</ColorCode>
              <CustomInput
                type="color"
                value={fromInput}
                onChange={this.onChangeFromInput}
              />
            </ColorPickInputContainer>
            <ColorPickInputContainer>
              <ColorCode>{toInput}</ColorCode>
              <CustomInput
                type="color"
                value={toInput}
                onChange={this.onChangeToInput}
              />
            </ColorPickInputContainer>
          </ColorPickContainer>
          <GenerateButton onClick={this.onGenerate}>Generate</GenerateButton>
        </ContentContainer>
      </MainContainer>
    )
  }
}

export default GradientGenerator
