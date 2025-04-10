import PropTypes from "prop-types";
import PriceOption from "../priceOptions/priceOption";
import {AiFillCheckCircle} from "react-icons/ai";

const Feature=({feature})=>{
    return(
        <div>
        <p className="flex"><AiFillCheckCircle className="text-green-500"></AiFillCheckCircle> {feature}</p>
        </div>
    );
};

Feature.propTypes={
    feature:PropTypes.string

}
export default Feature;