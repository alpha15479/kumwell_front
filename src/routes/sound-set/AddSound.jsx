import '../Routers.css';
import '../../assistant/css/bootstrap.min.css'
import Menubar from '../../components/Menubar';
function AddSound() {
    return (
        <>
            <Menubar title="ตั้งค่าข้อมูลเสียงแจ้งเตือน / เพิ่มเสียงใหม่" arrow="long-arrow-left">
            </Menubar>
            <div className="container-route">
                <div className="sound-backgorund">
                    <p>เพิ่มเสียงแจ้งเตือนใหม่</p>
                    <div className="sound-item">
                       <div>ชื่อเสียงแจ้งเตือนใหม่</div>  
                       <input type="text" />
                       <div className='mt-3'>Upload File</div> 
                       <input type="text" />
                       <button className='btn-add mt-4 ' >SUBMIT</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AddSound;