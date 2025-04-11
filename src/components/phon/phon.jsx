import { data } from "autoprefixer";
import axios from "axios";
import { useEffect, useState } from "react";

import { BarChart, Bar, ResponsiveContainer } from 'recharts';
import { Audio } from 'react-loader-spinner';
// const Phones=()=>{
//     const [phones,setPhones]=useState([]);

    // useEffect(()=>{
    // //    fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // //    .then(res=>res.json())
    // //    .then(data=>setPhones(data.data))
        
    // axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(data=>{
    //     const phoneData=data.data.data;
    //     const phonesWithFakeData=phoneData.map(phone=>{
    //         const slugParts={
    //             name:phone.phone_name,
    //             price:parseInt(phone.slug.spit('-')[1])
    //         }
    //         return obj;
    //     })
    //     setPhones(phonesWithFakeData);
    // });

    // },[])
const Phones = () => {
    const [phones, setPhones] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(response => {
                const phoneData = response.data.data;
                const phonesWithFakeData = phoneData.map(phone => {
                    const slugParts = phone.slug.split('-');
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(slugParts[1]) || 0 // Handle NaN values gracefully
                    };
                    return obj;
                });
                setPhones(phonesWithFakeData);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);
    return(
        <div>
        { loading && <div >
            <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass

        />
        </div>}
        <h2 className="text-5xl"> Phones: {phones.length}</h2>
        <BarChart width={600} height={400} data={phones}>
            <Bar dataKey={'price'} fill="#8884d8"></Bar>
        </BarChart>
        </div>
    );
};
export default Phones;