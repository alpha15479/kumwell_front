import "../Routers.css";
import Menubar from '../../components/Menubar';
import '../../assistant/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
function Report() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

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
            name: 'ชื่อเสียงสถานที่',
            selector: row => row.name,
            sortable: true,
            width: 'auto'
        },
        {
            name: 'แก้ไขรหัสผ่าน',
            cell: () => <button className="btn-report">เลือกค้นหาข้อมูล</button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            width: '140px'
        }
    ];

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <Menubar title="ข้อมูลรายงานสถานที่ต่างๆ" />
            <div className="container-route">
                <div className="sound-backgorund">
                    <p>ข้อมูลรายงานสถานที่ต่างๆ</p>
                    <div className="report-item">
                        <div className="Report">
                            <DataTable
                                className="dataTables_wrapper"
                                columns={columns}
                                data={items}
                                theme="solarized"
                                pagination
                                dense
                                fixedHeader/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Report;
