import React, { useState } from "react";
import "./Routers.css";
import { Link, useParams } from "react-router-dom";

export default function DetailOrganization() {
    const { keyName } = useParams();

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };
    return (
        <> <div className="container-route">
            <div className="card">
                <div className="card-header">
                    <div className="d-flex">
                        <Link
                            to="/organization"
                            className="btn me-3 btn-outline-danger"
                        >
                            ย้อนกลับ
                        </Link>
                        <h3 className="card-title">
                            {keyName}{" "}
                            <span class=" text-success fs-6">Online</span>
                        </h3>
                    </div>
                </div>
                <div className="card-body">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <button
                                className={`nav-link ${
                                    activeTab === 1 ? "active" : ""
                                }`}
                                onClick={() => handleTabClick(1)}
                            >
                                แผนที่ Sim
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${
                                    activeTab === 2 ? "active" : ""
                                }`}
                                onClick={() => handleTabClick(2)}
                            >
                                แผนที่
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${
                                    activeTab === 3 ? "active" : ""
                                }`}
                                onClick={() => handleTabClick(3)}
                            >
                                Export Temp
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${
                                    activeTab === 4 ? "active" : ""
                                }`}
                                onClick={() => handleTabClick(4)}
                            >
                                ข้อมูลอุณหภูมิ
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${
                                    activeTab === 5 ? "active" : ""
                                }`}
                                onClick={() => handleTabClick(5)}
                            >
                                ตั้งค่า
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${
                                    activeTab === 6 ? "active" : ""
                                }`}
                                onClick={() => handleTabClick(6)}
                            >
                                ตั้งค่า Sim
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${
                                    activeTab === 7 ? "active" : ""
                                }`}
                                onClick={() => handleTabClick(7)}
                            >
                                อุปกรณ์
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${
                                    activeTab === 8 ? "active" : ""
                                }`}
                                onClick={() => handleTabClick(8)}
                            >
                                ผู้ใช้งาน
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${
                                    activeTab === 9 ? "active" : ""
                                }`}
                                onClick={() => handleTabClick(9)}
                            >
                                แก้ไข
                            </button>
                        </li>
                    </ul>

                    <div className="tab-content mt-3">
                        <div
                            className={`tab-pane ${
                                activeTab === 1 ? "active" : ""
                            }`}
                        >
                            <h3>เป็นแผนที่จริง</h3>
                            <p>เดี๋ยวทำ</p>
                        </div>
                        <div
                            className={`tab-pane ${
                                activeTab === 2 ? "active" : ""
                            }`}
                        >
                            <h3>เป็นแผนที่ปลอม</h3>
                            <p>เดี๋ยวทำ</p>
                        </div>
                        <div
                            className={`tab-pane ${
                                activeTab === 3 ? "active" : ""
                            }`}
                        >
                            <h3>ส่งออกข้อมูล</h3>
                            <p>ข้อมูลlogมั้ง</p>
                        </div>
                        <div
                            className={`tab-pane ${
                                activeTab === 4 ? "active" : ""
                            }`}
                        >
                            <h3>ส่งออกข้อมูล</h3>
                            <p>ข้อมูลอุณหภูมิ</p>
                        </div>
                        <div
                            className={`tab-pane ${
                                activeTab === 5 ? "active" : ""
                            }`}
                        >
                            <h3>ตั้งค่าข้อมูล</h3>
                            <p>
                                พวก active zone e-field m-field (ละก็ PolyLines)
                            </p>
                        </div>
                        <div
                            className={`tab-pane ${
                                activeTab === 6 ? "active" : ""
                            }`}
                        >
                            <h3>ตั้งค่าการ Sim</h3>
                            <p>นำเข้าข้อมูล M-field เพื่อนำไป Sim</p>
                        </div>
                        <div
                            className={`tab-pane ${
                                activeTab === 7 ? "active" : ""
                            }`}
                        >
                            <h3>จัดการอุปกรณ์</h3>
                            <p>เพิ่ม ลบ แก้ไข อุปกรณ์</p>
                        </div>
                        <div
                            className={`tab-pane ${
                                activeTab === 8 ? "active" : ""
                            }`}
                        >
                            <h3>จัดการลูกน้องในบริษัทนี้</h3>
                            <p>เพิ่ม ลบ แก้ไข ลูกน้อง</p>
                        </div>
                        <div
                            className={`tab-pane ${
                                activeTab === 9 ? "active" : ""
                            }`}
                        >
                            <h3>จัดการข้อมูลบริษัทนี้</h3>
                            <p>เพิ่ม ลบ แก้ไข ข้อมูลบริษัท</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}
