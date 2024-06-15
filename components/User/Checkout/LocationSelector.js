import React, { useState, useEffect } from 'react';

const LocationSelector = ({ setSelectedTinhValue, setSelectedQuanValue, setSelectedPhuongValue }) => {
  const [tinhList, setTinhList] = useState([]);
  const [quanList, setQuanList] = useState([]);
  const [phuongList, setPhuongList] = useState([]);
  const [selectedTinh, setSelectedTinh] = useState('');
  const [selectedQuan, setSelectedQuan] = useState('');
  const [selectedPhuong, setSelectedPhuong] = useState('');

  useEffect(() => {
    fetch('https://esgoo.net/api-tinhthanh/1/0.htm')
      .then(response => response.json())
      .then(data => {
        if (data.error === 0) {
          setTinhList(data.data);
        }
      });
  }, []);

  const handleTinhChange = (event) => {
    const selectedTinhFullName = event.target.options[event.target.selectedIndex].text;
    console.log(selectedTinhFullName)
    const idtinh = event.target.value;
    setSelectedTinh(idtinh);
    setSelectedQuan('');
    setSelectedPhuong('');
    setSelectedTinhValue(selectedTinhFullName); // Pass selected Tỉnh fullName to parent component

    fetch(`https://esgoo.net/api-tinhthanh/2/${idtinh}.htm`)
      .then(response => response.json())
      .then(data => {
        if (data.error === 0) {
          setQuanList(data.data);
        }
      });
  };

  const handleQuanChange = (event) => {
    const selectedQuanFullName = event.target.options[event.target.selectedIndex].text;
    const idquan = event.target.value;
    setSelectedQuan(idquan);
    setSelectedPhuong('');
    setSelectedQuanValue(selectedQuanFullName); // Pass selected Quận fullName to parent component

    fetch(`https://esgoo.net/api-tinhthanh/3/${idquan}.htm`)
      .then(response => response.json())
      .then(data => {
        if (data.error === 0) {
          setPhuongList(data.data);
        }
      });
  };

  const handlePhuongChange = (event) => {
    const selectedPhuongFullName = event.target.options[event.target.selectedIndex].text;
    console.log(selectedPhuongFullName)
    const idphuong = event.target.value;
    setSelectedPhuong(idphuong);
    setSelectedPhuongValue(selectedPhuongFullName); // Pass selected Phường fullName to parent component
  };

  return (
    <div className="flex align-middle justify-between gap-4">
      <select
        className="inline-table w-1/3 p-2  border  border-gray-400  rounded-xl" 
        id="tinh"
        name="tinh"
        title="Chọn Tỉnh Thành"
        value={selectedTinh}
        onChange={handleTinhChange}
      >
        <option value="">Tỉnh Thành</option>
        {tinhList.map(tinh => (
          <option key={tinh.id} value={tinh.id}>
            {tinh.full_name}
          </option>
        ))}
      </select>

      <select
        className="inline-table w-1/3  border border-gray-400 rounded rounded-xl"
        id="quan"
        name="quan"
        title="Chọn Quận Huyện"
        value={selectedQuan}
        onChange={handleQuanChange}
      >
        <option value="">Quận Huyện</option>
        {quanList.map(quan => (
          <option  key={quan.id} value={quan.id}>
            {quan.full_name}
          </option>
        ))}
      </select>

      <select
        className="inline-table w-1/3 p-4 border border-gray-400 rounded-xl "
        id="phuong"
        name="phuong"
        title="Chọn Phường Xã"
        value={selectedPhuong}
        onChange={handlePhuongChange}
      >
        <option value="">Phường Xã</option>
        {phuongList.map(phuong => (
          <option key={phuong.id} value={phuong.id}>
            {phuong.full_name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocationSelector;
