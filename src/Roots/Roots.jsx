import { Outlet } from "react-router-dom";
import NavBer from "../NavBer/NavBer";


const Roots = () => {
    return (
        <div>
            <NavBer />
            <Outlet/>
        </div>
    );
};

export default Roots;