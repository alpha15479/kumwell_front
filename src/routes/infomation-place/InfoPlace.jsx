import React, { useEffect, useState } from "react"; import "../Routers.css";
import Menubar from '../../components/Menubar';
import '../../assistant/css/bootstrap.min.css'
import DataTable from 'react-data-table-component';
import Cookies from 'js-cookie';
import UpDateOrgan from "./UpDateOrgan";
function InfoPlace() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [hideDirector, setHideDirector] = React.useState(false);
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const token = (Cookies.get('accessToken'));
    const fetchData = () => {
        const url = `http://103.225.27.60:8082/api/v1/organizations/`;
        fetch(url, {
            method: 'GET', headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(false);
                }
            )
    };
    const columns = [
        {
            name: '#',
            selector: row => row.id,
            sortable: true,
            width: '57px'

        },
        {
            name: 'ชื่อ',
            selector: row => row.nameLocation,
            sortable: true,
            width: '200px'
        },
        {
            name: 'Lat,long ',
            cell: row => (
                <li>
                    {row.lat}, {row.long}
                </li>
            ),
            omit: hideDirector,
            width: '150px'

        },
        {
            name: 'สถานที่',
            selector: row => row.keyName,
            width: '100px'
        },
        {
            name: 'ประเภทแผนที่',
            cell: row => (<>M Field, E Field</>),
            width: 'auto',
        },
        {
            name: 'ตั้งค่า',
            cell: row => (<><button className="change-btn">ตั้งค่า</button></>),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            width: '90px',
        },
        {
            name: 'ลบ',
            cell: row => (<><button className="delete-btn">ลบ</button></>),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            width: '60px',
        },
    ];

    useEffect(() => {
        fetchData();
    }, []);

    const [filterText, setFilterText] = useState('');

    const handleClear = () => {
        if (filterText) {
            setResetPaginationToggle(!resetPaginationToggle);
            setFilterText('');
        }
    };

    if (token != null) {
        const filteredItems = items.filter(
            item => item.nameLocation && item.nameLocation.toLowerCase().includes(filterText.toLowerCase()));
        return (
            <>
                {/* <UpDateOrgan/> */}
                <div className="container-route">
                    {isLoaded ? <>
                        <div className="sound-backgorund">
                            <span className="topic-title">ข้อมูลสถานที่</span>
                            <button className="btn-add" onClick={() => <><UpDateOrgan /></>}><img src="./image/plus.png" width="12px" />  เพิ่มข้อมูลสถานที่ใหม่</button>
                            <div className="sound-item ">
                                <div className="sound-Head">
                                    <input className="Search" type="text" onChange={e => setFilterText(e.target.value)} placeholder="Search" />
                                    <DataTable
                                        className="dataTables_wrapper"
                                        columns={columns}
                                        data={filteredItems}
                                        theme="solarized"
                                        pagination
                                        fixedHeader />
                                </div>
                            </div>
                        </div>
                    </> :
                        <>
                            Loading...

                        </>}

                </div>


            </>
        );
    }
    else {
        window.location.href = "/";
    }
}
export default InfoPlace;
