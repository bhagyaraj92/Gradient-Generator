import {ListItems, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDirectionDetails, isActive, clickGradientDirectionItem} = props
  const {displayText, value} = gradientDirectionDetails

  const onClickGradientDirectionItem = () => {
    clickGradientDirectionItem(value)
  }

  return (
    <ListItems>
      <DirectionButton
        isActive={isActive}
        onClick={onClickGradientDirectionItem}
        type="button"
      >
        {displayText}
      </DirectionButton>
    </ListItems>
  )
}

export default GradientDirectionItem
