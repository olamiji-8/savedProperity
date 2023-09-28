import ServicesList from "../components/ServicesList";
import SearchForm from "../components/SearchForm";
import Layout from "../Layout";

const ServiceListPage = () => {
    return (
        <Layout>
            <SearchForm placeholder={'Search services...'}/>
            <main className="idk1">
                <ServicesList/>
            </main>
        </Layout>
    )
}

export default ServiceListPage