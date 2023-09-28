import { Outlet } from "react-router-dom";
import Layout from "../features/services/Layout";

const VendorPage = () => {
    return (
        <>
            <Layout>
                <Outlet/>
            </Layout>
        </>
    )
}

export default VendorPage