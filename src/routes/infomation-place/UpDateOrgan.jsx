import "../Routers.css";
export default function UpDateOrgan() {
    return (
        <>
            <div className="bodyModal" >
                
                <div class="modals" >
                <h5><img src="./image/add-button.png" width="25px"/> เพิ่มข้อมูลสถานที่ใหม่</h5>
                    <hr/>
                    <div>ชื่อสถานที่</div>
                    <input type="text" placeholder="กรุณาระบุชื่อสถานที่"/>
                    <div className="mt-2 ">สถานที่</div>
                    <input type="text" placeholder="กรุณาระบุสถานที่"/>
                    <div className="mt-2">Latitude </div>
                    <input type="number" placeholder="กรุณาระบุ Latitude (เป็นตัวเลขเท่านั้น)"/>
                    <div className="mt-2">Longitude </div>
                    <input type="number" placeholder="กรุณาระบุ Longitude (เป็นตัวเลขเท่านั้น)"/>
                    <div className="mt-2">ที่อยู่</div>
                    <input type="text" placeholder="กรุณาระบุที่อยู่"/>
                    <div className="mt-2">คีย์ไลน์</div>
                    <input type="text" placeholder="กรุณาระบุคีย์ไลน์"/>
                    <div className="mt-2">ชนิดแผนที่</div>
                    <select id="comp" className="select-type">
                        <option value="M Field"> M Field</option>
                        <option value="E Field"> E Field</option>
                        <option value="M Field,E Field"> M Field,E Field</option>
                    </select>
                    <div className="mt-2">ActiveZoneA</div>
                    <input type="number" placeholder="กรุณาระบุActiveZoneA (เป็นตัวเลขเท่านั้น)"/>
                    <div className="mt-2">ActiveZoneB</div>
                    <input type="number" placeholder="กรุณาระบุActiveZoneB (เป็นตัวเลขเท่านั้น)"/>
                    <div className="mt-2">ActiveZoneC</div>
                    <input type="number" placeholder="กรุณาระบุActiveZoneC (เป็นตัวเลขเท่านั้น)"/>
                    <div className="mt-2">Display</div>
                    <input type="number" placeholder="กรุณาระบุ Display (เป็นตัวเลขเท่านั้น)"/>
                    <div>
                        <button className="btn-add mt-4 ">เพิ่ม</button>
                    </div>

                </div>


            </div>

            <div className="overlay"></div>
        </>
    );
}