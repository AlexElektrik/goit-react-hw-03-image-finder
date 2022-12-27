import propTypes from 'prop-types';
import { Img, ImgItem } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ info, onSelect }) => {
  return (
    <ImgItem>
      <Img
        src={info.webformatURL}
        onClick={() => onSelect(info.largeImageURL)}
        alt=""
      />
    </ImgItem>
  );
};

ImageGalleryItem.propTypes = {
  info: propTypes.object.isRequired,
  onSelect: propTypes.func.isRequired,
};

export default ImageGalleryItem;
