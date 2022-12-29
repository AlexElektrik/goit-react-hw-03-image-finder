import propTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';
import { ImgList } from './ImageGallery.styled';

const ImageGallery = ({ info, onSelect }) => {
  return (
    <>
      <ImgList>
        {info.map(data => (
          <ImageGalleryItem key={data.id} info={data} onSelect={onSelect} />
        ))}
      </ImgList>
    </>
  );
};

ImageGallery.propTypes = {
  info: propTypes.object.isRequired,
  onSelect: propTypes.func.isRequired,
};

export default ImageGallery;
