import "../Routers.css";
import Menubar from '../../components/Menubar';
import '../../assistant/css/bootstrap.min.css'
function Report() {

    return (
        <>
            <Menubar title="ข้อมูลรายงานสถานที่ต่างๆ" />
            <div className="container-route">
                <p>ข้อมูลรายงานสถานที่ต่างๆ</p>
                <div className="sound-backgorund">
                    <div className="Report">
                    <div className="report-Head">
                        <span>#</span>
                        <span className="report-name ">ชื่อสถานที่</span>
                        <span className="report-Edit " >แก้ไขรหัสผ่าน</span>
                    </div>
                        <hr />
                        <div>1</div>
                        <div>2</div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Report;
