import "../Routers.css";
import Menubar from '../../components/Menubar';
import '../../assistant/css/bootstrap.min.css'
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
function SetCustomer() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [hideDirector, setHideDirector] = React.useState(false);
    const fetchData = () => {
        const url = `https://www.melivecode.com/api/users`;
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
            name: 'ชื่อบริษัท',
            cell: row => (
                <li>
                    {row.fname} {row.lname}
                </li>
            ),
            sortable: true,
            width: '150px'
        },
        {
            name: 'ที่อยู่',
            selector: row => row.username,
            omit: hideDirector,
        },
        {
            name: 'อีเมลล์',
            selector: row => row.username,
            omit: hideDirector,
            width: '100px'
        },
        {
            name: 'โทรศัพท์',
            selector: row => row.fname,
            omit: hideDirector,


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
        item => item.fname && item.fname.toLowerCase().includes(filterText.toLowerCase()),

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
        return <div><Menubar title="ตั้งค่าข้อมูลเสียงแจ้งเตือน" />
            Loading...</div>;
    } else {
        return (
            <>
                <Menubar title="ตั้งค่าข้อมูลลูกค้า" />
                <div className="container-route">
                    <div className="sound-backgorund">
                        <p>ข้อมูลบริษัทลูกค้า</p>
                        <Link to="/SoundSet/AddSound" className="Link-Spect"><button className="btn-add">เพิ่มบริษัทใหม่</button></Link>
                        <div className="sound-item ">
                            <div className="sound-Head">
                                {/* <button className="btn-add" onClick={() => setHideDirector(!hideDirector)}>Hide Directory Column</button> */}
                                <input className="Search" type="text" onChange={e => setFilterText(e.target.value)} placeholder="Search" />
                                <DataTable
                                    className="dataTables_wrapper"
                                    columns={columns}
                                    data={filteredItems}
                                    theme="solarized"
                                    pagination
                                    dense
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
export default SetCustomer;
