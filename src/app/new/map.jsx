import React, { useState } from 'react';

function MapComponent() {
  const [address, setAddress] = useState('');
  const [mapURL, setMapURL] = useState('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1829707.1748671122!2d8.807068518132024!3d62.47209523442591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x461268458f4de5bf%3A0xa1b03b9db864d02b!2zNcK7!5e0!3m2!1str!2str!4v1698332448551!5m2!1str!2str');

  const updateMap = () => {
    // Eğer adres boş değilse, harita URL'sini güncelle
    if (address.trim() !== '') {
      setMapURL(`https://www.google.com/maps/embed?pb=${encodeURIComponent(address)}`);
    }
  };

  return (
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
        Restaurant Location
      </label>
      <input
        className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="name"
        type="text"
        placeholder="Enter Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={updateMap}>Show Map</button>
      <div>
        <iframe
          title="Google Map"
          src={mapURL}
          width="330"
          height="223"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default MapComponent;

