import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";

function ProductImage(props) {
  const [Images, setImages] = useState([]);

  useEffect(() => {
    if (props.detail.images && props.detail.images.length > 0) {
      let images = [];

      props.detail.images.map((item) => {
        images.push({
          original: `http://localhost:5000/${item}`,
          thumbnail: `http://localhost:5000/${item}`,
        });
      });
      setImages(images);
    }
  }, [props.detail]); // props.detail이 바뀌기때문에 리사이클 됨

  // 렌더링 된다음에 위에꺼를 리사이클 해줌 다음 이미지 전달
  return (
    <div>
      <ImageGallery items={Images} />
    </div>
  );
}

export default ProductImage;
