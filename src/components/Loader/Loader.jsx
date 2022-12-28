import { TailSpin } from 'react-loader-spinner';
import { Spiner } from './Loader.styled';

export const Loader = () => {
  return (
    <Spiner>
      <TailSpin
        height="80"
        width="80"
        color=" #4f74dc"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Spiner>
  );
};
