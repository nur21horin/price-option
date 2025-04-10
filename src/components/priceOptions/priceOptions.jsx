import PriceOption from "./priceOption";
const PriceOptions=()=>{
    const priceOptions=[
        {
          "id": 1,
          "name": "Basic Plan",
          "price": 30,
          "duration": "1 Month",
          "features": [
            "Access to gym equipment",
            "Locker facilities",
            "Free Wi-Fi",
            "Complimentary water bottles"
          ]
        },
        {
          "id": 2,
          "name": "Standard Plan",
          "price": 150,
          "duration": "6 Months",
          "features": [
            "Access to gym equipment",
            "Locker facilities",
            "2 Personal Training Sessions",
            "Free Wi-Fi",
            "Group fitness classes",
            "Sauna access"
          ]
        },
        {
          "id": 3,
          "name": "Premium Plan",
          "price": 280,
          "duration": "1 Year",
          "features": [
            "Access to gym equipment",
            "Locker facilities",
            "Unlimited Personal Training Sessions",
            "Access to Pool and Spa",
            "Group fitness classes",
            "Free nutrition consultation",
            "Priority booking for classes",
            "Free parking"
          ]
        },
        {
          "id": 4,
          "name": "Day Pass",
          "price": 10,
          "duration": "1 Day",
          "features": [
            "Access to gym equipment",
            "Locker facilities",
            "Free Wi-Fi",
            "Access to lounge area"
          ]
        }
      ]
    return(
        <div>
        <h2 className="text-5xl">Best Prices...</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
        {
            priceOptions.map(option=><PriceOption key={option.id} option={option}></PriceOption>)
        }
        </div>
       
        </div>
    );
};

export default PriceOptions;