
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Pages/SharedSection/MenuItem/MenuItem";
import UseMenu from "../../Hooks/UseMenu";
import { Link } from "react-router-dom";


const PopularMenu = () => {
    // const [menus, setMenus] = useState([])

    // useEffect(() => {
    //     axios.get('/menu.json')
    //         .then(res => {
    //             const items = res.data;
    //             const popularItems = items.filter(item => item.category === 'popular')
    //             setMenus(popularItems)
    //         })
    // }, [])

    const [menus] = UseMenu()
    const popularMenus = menus.filter(item => item.category === 'popular')
 
    return (
        <div className="max-w-6xl mx-auto mb-10 px-3 md:px-5 xl:px-0">
            <div>
                <SectionTitle
                    subtitle={'---Check it out---'}
                    heading={'FROM OUR MENU'}
                ></SectionTitle>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mt-10 mb-3">
                {
                   popularMenus.map(menu => <MenuItem key={menu._id} menu={menu}></MenuItem>)
                }
            </div>
                <div className="text-center">
                    
            <Link to='/ourmenu'><button className="btn btn-outline  border-t-0 border-r-0 border-l-0 ">view Full Menu</button></Link>
                </div>
        </div>
    );
};

export default PopularMenu;