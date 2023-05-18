import "../Routers.css";
import Menubar from "../../components/Menubar";
import "../../assistant/css/bootstrap.min.css";
export default function UpdateOrganization() {
    return (
        <>
            <form action="">
                <Menubar
                    title="ตั้งค่าข้อมูลสถานที่ / เพิ่มข้อมูลสถานที่ใหม่"
                    arrow="long-arrow-left"
                />
                <div className="container-route">
                    <div className="sound-backgorund">
                        <p>เพิ่มข้อมูลสถานที่ใหม่</p>
                        <div className="add-container" align="left">
                            <div className="sound-item">
                                <div>ชื่อสถานที่</div>
                                <input type="text" />
                                <div className="mt-2 ">สถานที่</div>
                                <input type="text" />
                                <div className="mt-2">Latitude </div>
                                <input type="number" />
                                <div className="mt-2">Longitude </div>
                                <input type="number" />
                                <div className="mt-2">ที่อยู่</div>
                                <input type="text" />
                                <div className="mt-2">คีย์ไลน์</div>
                                <input type="text" />
                                <div className="mt-2">ชนิดแผนที่</div>
                                <select id="comp" className="select-type">
                                    <option value="M Field">M Field</option>
                                    <option value="E Field">E Field</option>
                                    <option value="M Field,E Field">M Field,E Field</option>
                                </select>
                                <div className="mt-2">ActiveZoneA</div>
                                <input type="number" />
                                <div className="mt-2">ActiveZoneB</div>
                                <input type="number" />
                                <div className="mt-2">ActiveZoneC</div>
                                <input type="number" />
                                <div className="mt-2">Display</div>
                                <input type="number" />
                                <div>
                                    <button className="btn-add mt-4 ">SUBMIT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
