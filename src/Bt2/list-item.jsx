import Item from "./item"

const LstItem = () => {
    return (
        <section className="pt-4">
            <div className="container px-lg-5">
                <div className="row gx-lg-5">
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>
            </div>
        </section>
    );
}
export default LstItem