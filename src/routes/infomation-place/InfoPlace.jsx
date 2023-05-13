import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react"; import "../Routers.css";
import Menubar from '../../components/Menubar';
import '../../assistant/css/bootstrap.min.css'
import DataTable from 'react-data-table-component';
import Cookies from 'js-cookie';
function InfoPlace() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [hideDirector, setHideDirector] = React.useState(false);
    const token = (Cookies.get('accessToken'));
    const fetchData = () => {
        const url = `http://103.225.27.60:8080/api/v1/organizations/`;
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
            width: '150px'
        },
        {
            name: 'Lat, ',
            cell: row => (
                <li>
                    {row.lat}, {row.long}
                </li>
            ),
            omit: hideDirector,

        },
        {
            name: 'สถานที่',
            selector: row => row.keyName,
        },
        {
            name: 'ประเภทแผนที่',
            cell: row => (<>M Field, E Field</>)
        },
    ];

    useEffect(() => {
        fetchData();
    }, []);
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
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
                <Menubar title="ข้อมูลสถานที่" />
                <div className="container-route">
                    {isLoaded ? <>
                        <div className="sound-backgorund">
                            <p>ข้อมูลรายละเอียดสถานที่</p>
                            <Link to="/SoundSet/AddSound" className="Link-Spect"><button className="btn-add">เพิ่มข้อมูลสถานที่ใหม่</button></Link>
                            <div className="sound-item ">
                                <div className="sound-Head">
                                    <input className="Search" type="text" onChange={e => setFilterText(e.target.value)} placeholder="Search" />
                                    <DataTable
                                        className="dataTables_wrapper"
                                        columns={columns}
                                        data={filteredItems}
                                        theme="solarized"
                                        pagination
                                        dense
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
