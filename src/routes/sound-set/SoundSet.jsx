import "../Routers.css";
import Menubar from '../../components/Menubar';
import '../../assistant/css/bootstrap.min.css'
import { Link } from "react-router-dom";
function SoundSet() {

  return (
    <>
      <Menubar title="ตั้งค่าข้อมูลเสียงแจ้งเตือน" />
      <div className="container-route">
        <div className="sound-backgorund">
          <p>ข้อมูลรายละเอียดเสียงแจ้งเตือน</p>
          <Link to="/SoundSet/AddSound" className="Link-Spect"><button className="btn-add">เพิ่มเสียงแจ้งเตือนใหม่</button></Link>
          <div className="sound-item padding">
            <div className="sound-Head">
              <span>#</span>
              <span className="sound-name">ชื่อเสียงแจ้งเตือน</span>
              <span className="sound">เสียง </span>
              <span className="sound-Edit">แก้ไข</span>
              <span className="sound-Delete">ลบ</span>
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
export default SoundSet;
