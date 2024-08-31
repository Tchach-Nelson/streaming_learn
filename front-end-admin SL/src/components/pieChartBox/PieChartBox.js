import "./pieChartBox.scss";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
    { name: "Technologie", value: 10, color: "#7777f6" },
    { name: "Gestion", value: 10, color: "#7777f6a1" },
    { name: "Santé", value: 10, color: "#7777f669" },
    { name: "Mecanique", value: 10, color: "#7777f61f" }
]

function PieChartBox() {

    return (
        <div className="pieChartBox">
            <h1>Effectifs</h1>
            <div className="chart">
                <ResponsiveContainer width="99%" height={300} >
                    <PieChart>
                        <Tooltip
                            contentStyle={{ background: "white", borderRadius: "5px" }}
                        />
                        <Pie
                            data={data}
                            innerRadius={"60%"}
                            outerRadius={"80%"}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {
                                data.map((item) => (
                                    <Cell
                                        key={item.name}
                                        fill={item.color}
                                    />
                                ))
                            }
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="options">
                {data.map((item) => (
                    <div className="option" key={item.name}>
                        <div className="title">
                            <div className="dot" style={{ backgroundColor: item.color }} />
                            <span>{item.name}</span>
                        </div>
                        <span>{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PieChartBox;