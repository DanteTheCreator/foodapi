import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: 'Bearer 2A9X6gJR9JNTgXez0iVkPdoCKh1To7OasceFfnPtKfjIjHktl9e-fln4JjiagmOA4IpAYdt9vXMp_g2uo6IAkOZ05bv0Mjp9WWz4kibqQpK-rX4D_tO76hzxagp4YXYx'
    }

});