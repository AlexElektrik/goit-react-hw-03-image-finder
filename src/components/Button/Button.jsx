import propTypes from 'prop-types';
import { LoadMore } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    <>
      <LoadMore onClick={() => onClick()}> Load more</LoadMore>
    </>
  );
};

export default Button;

Button.propTypes = {
  onClick: propTypes.func.isRequired,
};
