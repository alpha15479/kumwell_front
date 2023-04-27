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
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const filteredItems = items.filter(item => item.fname && item.fname.toLowerCase().includes(filterText.toLowerCase()),);
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
            name: 'ชื่อ',
            cell: row => (
                <li>
                    {row.fname} {row.lname}
                </li>
            ),
            sortable: true,
            width: '150px'
        },
        {
            name: 'ชื่อ Username',
            selector: row => row.fname,
            omit: hideDirector,
            width: '150px'
        },
        {
            name: 'ชื่อบริษัท',
            selector: row => row.lname,
            omit: hideDirector,
            width: 'auto'
        },
        {
            name: 'แก้ไขรหัสผ่าน',
            cell: () => <button className="change-btn" onClick={ShowID}>เปลี่ยนแปลงรหัสผ่าน</button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            width: '190px'
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
            cell: row =>  <button className="delete-btn" onClick={()=>onDelete(row.id)}>ลบ</button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        }
    ];
    const ShowID =()=>{
        console.log('')
    }

    const onDelete =(id)=>{
        console.log(id)
        const data ={
            "id": id
        };
        const urlDelete = `https://www.melivecode.com/api/attractions/delete`;
        fetch(urlDelete, { method: 'DELETE',
        headers:{
            Accept: 'application/form-data',
            'Content-Type':  'application/json'
        },
        body: JSON.stringify(data)
    })
            .then(res => res.json())
            .then(
                (result) => {
                    if(result['status']=='ok'){
                        fetchData()
                    }
                },
            )
    }

    useEffect(() => {
        fetchData();
    }, [])

    
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
                <Menubar title="ตั้งค่าข้อมูลผู้ใช้งาน" />
                <div className="container-route">
                    <div className="sound-backgorund">
                        <p>ข้อมูลผู้ใช้งาน</p>
                        <Link to="/SoundSet/AddSound" className="Link-Spect"><button className="btn-add">เพิ่มข้อมูลผู้ใช้งานใหม่</button></Link>
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
