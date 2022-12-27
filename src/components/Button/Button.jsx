import propTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <>
      <button onClick={() => onClick()}> Load more</button>
    </>
  );
};

export default Button;

Button.propTypes = {
  onClick: propTypes.func.isRequired,
};
