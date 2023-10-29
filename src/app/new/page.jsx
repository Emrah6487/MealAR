import React, { useState } from 'react';
import Days from './Days';
import ToggleButton from './RestaurantTags';
import TypesOfCuisines from './TypesOfCuisines';
import PaymentMethod from './PaymentMethod';
import ImageUploader from './LogoUpload';
import ImageUploaderFoto from './FotoUpload';
import MapComponent from './map';

const Page = ({ onClose }) => {
  const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form verilerini yakalayın
    const formData = new FormData(e.target);

    // Form verilerini konsola yazdırın
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    // Form verilerini backend API'ye göndermek için fetch veya axios gibi bir kütüphane kullanabilirsiniz.
    // Örneğin:
    // fetch('/your-api-endpoint', {
    //   method: 'POST',
    //   body: formData,
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  };

  return (
    <div className="flex relative bg-cover bg-no-repeat bg-fixed flex items-center justify-center">
      <div className="custom-width-height border rounded-lg bg-white p-4 text-#1D3557">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between">
            <span>New Restaurant</span>
            <button onClick={onClose} className="border-2 border-1D3557 rounded-full w-6 h-6 flex items-center justify-center">
              <div>X</div>
            </button>
          </div>
          <div className="flex">
            <div className="flex-1">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Restaurant Name
                </label>
                <input
                  className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  name="restaurantName" // input alanının adını ekledik
                  placeholder="Enter Name"
                />
              </div>
              <div>
                <Days days={dayNames} />
              </div>
              <div>Restaurants Tags</div>
              <div className='flex'>
                <ToggleButton />
              </div>
              <div>Types of Cuisines</div>
              <div className='flex'>
                <TypesOfCuisines />
              </div>
            </div>
            <div className="flex-1">
              <div className="mb-4">
                <div>
                  <MapComponent />
                </div>
                <div>Payment Method</div>
                <div className='flex'>
                  <PaymentMethod />
                </div>
                <div>
                  <span>Set Currency</span>
                  <input
                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="currency"
                    type="number"
                    name="currency" // input alanının adını ekledik
                    placeholder="$ US Dollars"
                  />
                </div>
                <div>
                  <span>Upload Logo</span>
                  <ImageUploader />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <span>Upload Photos</span>
              <ImageUploaderFoto />
            </div>
            <div>
              <button type="submit" className="rounded-full bg-BB2649 px-24 py-2 text-white">Save Changes</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
