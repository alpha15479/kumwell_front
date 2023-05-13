import React, { useEffect, useRef, useState } from "react";

import { Grid, h } from "gridjs";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Routers.css";
export default function Organization() {
    const [dataOrganization, setDataOrganization] = useState([]);
    
    const wrapperRef = useRef(null);

    let navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://103.225.27.60:8080/api/v1/organizations/", {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjgzODc1MTkwLCJleHAiOjE2ODM5NjE1OTB9.Cdk92wLv1OdhgTUARGv9WB3EH8nwJvmJDg81gsgo_PQeZyCKkQjj1MZ0dUKiF4eTDLThRwky6DBSjfUWnSRycQ`,
                },
            })
            .then((response) => {
                setDataOrganization(response.data);
            });
    }, []);

    useEffect(() => {
        const table = new Grid({
            columns: [
                { id: "id", name: "#" },
                { id: "keyName", name: "Key Name" },
                { id: "nameLocation", name: "ชื่อ" },
                { id: "latitude_longitude", name: "ละติจูด/ลองจิจูด" },
                { id: "address", name: "สถานที่" },
                { id: "mapType", name: "ประเภทแผนที่" },
                {
                    id: "actions",
                    name: "",
                    formatter: (cell, row) => {
                        return h(
                            "div",
                            { className: "text-center" },
                            h(
                                "button",
                                {
                                    className: "btn btn-info btn-sm mr-2",
                                    onClick: () =>
                                        navigate(
                                            `/DetailOrganization/${row.cells[1].data}`,
                                            { replace: true }
                                        ),
                                },
                                h("i", {
                                    className: "fas fa-pencil-alt mr-1",
                                }),
                                "See More"
                            )
                        );
                    },
                },
            ],
            data: dataOrganization.map((item) => ({
                ...item,
                latitude_longitude: `${item.lat} , ${item.long}`,
            })),
            search: true,
            pagination: true,
            sort: true,
            // resizable: true,
        }).render(wrapperRef.current);

        return () => table.destroy();
    });

    return (
        <>
        <div className="container-route">
            <div className="card">
                <div className="card-header">
                    <div className="text-end">
                        <button
                            type="button"
                            className="btn btn-primary btn-sm"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                        >
                            เพิ่มข้อมูลสถานที่ใหม่
                        </button>
                    </div>
                </div>
                <div className="card-body">
                    <div ref={wrapperRef} />;
                </div>
            </div></div>
        </>
    );
}
