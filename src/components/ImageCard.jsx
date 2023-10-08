
const ImageCard = ({classnames, productImage }) => {
    return (
      <div className={`${classnames}`}
            style={{ 
              backgroundImage: `url(${productImage})`,
              objectFit : "fill"
            }}>
    </div>
  );
};
export default ImageCard;
