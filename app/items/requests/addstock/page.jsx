import Layouts from "../../../components/layouts";

const Page = () => {
    return (
        <Layouts>
            <div className="container">
                <div>
                    <h1>Add Stock</h1>

                    <div className="card">
                        <h2 className="mt-5 text-center">Add Stock</h2>

                        <input type="text" className="input-stock"/>

                        <button type="button" className="mt-5 input-stock-btn">Update</button>
                    </div>
                </div>
            </div>
        </Layouts>
    );
}

export default Page;