import SearchForm from "../components/SearchForm";
import VendorsList from "../components/VendorsList";

const VendorListPage = () => {
    return (
        <>
            <SearchForm placeholder={'Search by name, location'}/>
            <main className="idk1">
                <VendorsList/>
            </main>
        </>

    )
}

export default VendorListPage