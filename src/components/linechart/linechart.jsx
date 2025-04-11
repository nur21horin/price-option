 import { LineChart as LC, Line ,XAxis,YAxis} from 'recharts';

const LineChart=()=>{

  const marksData = [
    {id: 1, name: "Ayesha", Math: 85, Physics: 78, Chemistry: 88},
    {id: 2, name: "Hasan", Math: 72, Physics: 65, Chemistry: 70},
    {id: 3, name: "Fatima", Math: 90, Physics: 92, Chemistry: 89},
    {id: 4, name: "Rahim", Math: 78, Physics: 81, Chemistry: 75},
    {id: 5, name: "Zoya", Math: 88, Physics: 86, Chemistry: 91},
    {id: 6, name: "Karim", Math: 65, Physics: 60, Chemistry: 68},
    {id: 7, name: "Meera", Math: 92, Physics: 89, Chemistry: 93},
    {id: 8, name: "Anik", Math: 80, Physics: 77, Chemistry: 79},
    {id: 9, name: "Samira", Math: 76, Physics: 72, Chemistry: 78},
    {id: 10, name: "Tanvir", Math: 89, Physics: 84, Chemistry: 87}
  ];
    return(
        <div>
        <LC width={800} height={400} data={marksData}>
        <XAxis dataKey={'name'}></XAxis>
        {/* <YAxis dataKey={'id'}></YAxis> */}
          <Line type="monotone" dataKey="Math" stroke='Blue'></Line>
          <Line dataKey="Physics" stroke='yellow'></Line>
          <Line dataKey={'Chemistry'} stroke='red'></Line>
        </LC>
        </div>
    );
};

export default LineChart;
