import { useHistory } from 'react-router-dom';
import { StyledBackButton, StyledButtonIcon } from './StyledBackButton';

const BackButton = () => {
  const history = useHistory()
  return (
    <StyledBackButton
      onClick={() => history.goBack()}
      type="button" 
    >
      <StyledButtonIcon/>
      Back
    </StyledBackButton>
  )
}

export default BackButton;
