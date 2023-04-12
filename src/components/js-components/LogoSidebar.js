import '../css-components/Sidebar.css'
function LogoSidebar(props) {
    const { img, supname } = props;
    const Rank = localStorage.getItem('Rank');

    return (
        <>
            <div className='Logo-sidebar'>
                <img src={img} />
                <p className="supName" align="center">{supname}</p>
                <p className="Rank" align="center">ADMIN</p>
                {/* <p className="Rank" align="center">{Rank}</p> */}
            </div>
            <hr />
        </>
    );
}
export default LogoSidebar;