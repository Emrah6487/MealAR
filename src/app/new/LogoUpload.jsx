import React, { useState } from 'react';

const ImageUploader = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      // Resmi işleme veya yükleme adımlarını burada ekleyebilirsiniz
      setImage(URL.createObjectURL(selectedImage));
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 ">
      <div className="bg-white p-4 rounded-lg border-solid border-2 border-dashed">
        <div className="text-center">
          <p className=" font-semibold">Drag and drop files here or</p>
        </div>

        {image ? (
          <div className="mt-4">
            <img src={image} alt="Yüklenen Resim" className="max-w-full" />
          </div>
        ) : (
          <div className="mt-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              id="image-upload"
            />
            <label
              htmlFor="image-upload"
              className=" w-full bg-blue-500 text-white py-1 px-4 rounded-md cursor-pointer text-center"
            >
              Upload
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
