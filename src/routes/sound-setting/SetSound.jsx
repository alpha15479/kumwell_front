import "../Routers.css";
import Menubar from '../../components/Menubar';
import '../../assistant/css/bootstrap.min.css'
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
function SoundSet() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [hideDirector, setHideDirector] = React.useState(false);
  const fetchData = () => {
    const url = `https://www.melivecode.com/api/attractions`;
    fetch(url, { method: 'GET' })
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }

  const columns = [
    {
      name: '#',
      selector: row => row.id,
      sortable: true,
      width: '57px'

    },
    {
      name: 'ชื่อเสียงแจ้งเตือน',
      selector: row => row.name,
      sortable: true,
      width: '150px'
    },
    {
      name: 'เสียง',
      selector: row => row.coverimage,
      omit: hideDirector,
      width: 'auto'
    },
    {
      name: 'แก้ไข',
      cell: () => <button className="edit-btn">แก้ไข</button>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      width: '54px'
    },
    {
      name: 'ลบ',
      cell: () => <button className="delete-btn">ลบ</button>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    }
  ];

  useEffect(() => {
    fetchData();
  }, [])

  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredItems = items.filter(
    item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
  );
  const handleClear = () => {
    if (filterText) {
      setResetPaginationToggle(!resetPaginationToggle);
      setFilterText('');
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>
      Loading...</div>;
  } else {
    return (
      <>
        <div className="container-route">
          <div className="sound-backgorund">
            <p>ข้อมูลรายละเอียดเสียงแจ้งเตือน</p>
            <Link to="/SoundSet/AddSound" className="Link-Spect"><button className="btn-add">เพิ่มเสียงแจ้งเตือนใหม่</button></Link>
            <div className="sound-item ">
              <div className="sound-Head">
                <DataTable
                  className="dataTables_wrapper"
                  columns={columns}
                  data={filteredItems}
                  theme="solarized"
                  pagination
                  // dense
                  fixedHeader
                />
              </div>
              <hr />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default SoundSet;
