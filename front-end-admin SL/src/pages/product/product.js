import Single from "../../components/single/Single";
import { singleProduct } from "../../data";
import "./product.scss"

function Product() {

    return (
        <div className="product">
            <Single {...singleProduct} />
        </div>
    )
}

export default Product;  