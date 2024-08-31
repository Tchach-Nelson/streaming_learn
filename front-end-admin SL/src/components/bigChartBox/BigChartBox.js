import "./bigChartBox.scss";
import { Area, XAxis, YAxis, CartesianGrid, AreaChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
    {
        name: 'Sun',
        gsi: 4000,
        ama: 2400,
        dot: 2400,
    },
    {
        name: 'Mon',
        gsi: 3000,
        ama: 1398,
        dot: 2210,
    },
    {
        name: 'Tue',
        gsi: 2000,
        ama: 9800,
        dot: 2290,
    },
    {
        name: 'Wed',
        gsi: 2780,
        ama: 3908,
        dot: 2000,
    },
    {
        name: 'Thu',
        gsi: 1890,
        ama: 4800,
        dot: 2181,
    },
    {
        name: 'Fri',
        gsi: 2390,
        ama: 3800,
        dot: 2500,
    },
    {
        name: 'Sat',
        gsi: 3490,
        ama: 4300,
        dot: 2100,
    }
]

function BigChartBox() {

    return (
        <div className="bigChartBox">
            {/* participation absence blame etc */}
            <h1>Displine general</h1>
            <div className="chart">
                <ResponsiveContainer width="99%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <XAxis dataKey="name" />
                        <YAxis />
                        {/* <Tooltip /> */}
                        <Tooltip 
                                contentStyle={{ background: "white", borderRadius: "10px" }}
                            />
                        <Area type="monotone" dataKey="gsi" stackId="1" stroke="#7777f6" fill="#7777f6" />
                        <Area type="monotone" dataKey="ama" stackId="1" stroke="#7777f6a1" fill="#7777f6a1" />
                        <Area type="monotone" dataKey="dot" stackId="1" stroke="#7777f669" fill="#7777f669" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default BigChartBox;