import "./single.scss";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts";
import Cookies from 'js-cookie';

// const data = [
//     {
//         name: 'page A',
//         uv: 4000,
//         pv: 2400,
//         amt: 2400,
//     },
//     {
//         name: 'page B',
//         uv: 3000,
//         pv: 1398,
//         amt: 2210,
//     },
//     {
//         name: 'page C',
//         uv: 2000,
//         pv: 9800,
//         amt: 2290,
//     },
//     {
//         name: 'page D',
//         uv: 2780,
//         pv: 3908,
//         amt: 2000,
//     },
//     {
//         name: 'page E',
//         uv: 1890,
//         pv: 4800,
//         amt: 2181,
//     },
//     {
//         name: 'page F',
//         uv: 2390,
//         pv: 3800,
//         amt: 2500,
//     },
//     {
//         name: 'page G',
//         uv: 3490,
//         pv: 4300,
//         amt: 2100,
//     }
// ]

type Props = {
    id: Number;
    img?: String;
    title: String;
    info: Object;
    chart?: {
        datakeys: { name: String; color: String }[];
        data: Object[];
    };
    activities?: { time: String; text: String }[];
}

function Single(props: Props) {

    return (
        <div className="single">
            <div className="view">
                <div className="info">
                    <div className="topInfo">
                        {props.img && <img src={props.img} alt="" />}
                        <h1>{Cookies.get('nom')}</h1>
                        {/* <button>Update</button> */}
                    </div>
                </div>
                <div className="details">
                    <div className="item">
                        <span className="itemTitle">username:</span>
                        <span className="itemTitle">{Cookies.get('nom')}</span>
                    </div>
                    <div className="item">
                        <span className="itemTitle">date:</span>
                        <span className="itemTitle">{Cookies.get('date')}</span>
                    </div>
                    <div className="item">
                        <span className="itemTitle">email:</span>
                        <span className="itemTitle">{Cookies.get('email')}</span>
                    </div>
                    <div className="item">
                        <span className="itemTitle">phone:</span>
                        <span className="itemTitle">{Cookies.get('telephone')}</span>
                    </div>
                     <div className="item">
                        <span className="itemTitle">status:</span>
                        <span className="itemTitle">{Cookies.get('status') != 0 ? 'ACTIF' : 'DEACTIVER' }</span>
                    </div>
                </div>
                <hr />
                {//si il ya un graphique
                    props.chart &&
                    <div className="chart">
                        <ResponsiveContainer width="100%" height="100%" >
                            <LineChart
                                width={500}
                                height={300}
                                data={props.chart.data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                {props.chart.datakeys.map((datakey) => (
                                    <Line
                                        type="monotone"
                                        dataKey={datakey.name}
                                        stroke={datakey.color}
                                    />
                                ))}

                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                }
            </div>
            <div className="activities">
                <h2>Mes Privilèges</h2>
                {props.activities && (
                    <ul>
                        {props.activities.map((activity) => (
                            <li key={activity.text}>
                                <div>
                                    <p>{activity.text}</p>
                                    <time>{activity.time}</time>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div >
    )
}

export default Single; 