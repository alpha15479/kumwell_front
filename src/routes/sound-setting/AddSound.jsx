import '../Routers.css';
import Menubar from '../../components/Menubar';
import '../../assistant/css/bootstrap.min.css'
function AddSound() {
    return (
        <>
        <form action="">
            <Menubar title="ตั้งค่าข้อมูลเสียงแจ้งเตือน / เพิ่มเสียงใหม่" arrow="long-arrow-left"/>
            <div className="container-route">
                <div className="sound-backgorund">
                    <p>เพิ่มเสียงแจ้งเตือนใหม่</p>
                    <div className="sound-item">
                       <div>ชื่อเสียงแจ้งเตือนใหม่</div>  
                       <input type="text" />
                       <label htmlFor=""></label>
                       <div className='mt-3'>Upload File</div> 
                       <input type="file" />
                       <button className='btn-add mt-4 ' >SUBMIT</button>
                    </div>
                </div>
            </div>
            </form>
        </>
    );
}
export default AddSound;