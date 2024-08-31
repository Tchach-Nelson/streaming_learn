import React from 'react';
import { Link } from "react-router-dom";
import "./chartBox.scss";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

type Props = {
    color: string;
    icon: string;
    title: string;
    dataKey: string;
    number: number | string;
    percentage: number;
    chartData: Object[];
    user: any[];  // Vous pouvez ajuster ce type selon la structure de vos données utilisateur
};

const ChartBox: React.FC<Props> = ({ color, icon, title, dataKey, number, percentage, chartData, user }) => {
    return (
        <div className="chartBox">
            <div className="boxInfo">
                <div className="title">
                    <b className={icon} style={{ color }}></b>
                    <span>{title}</span>
                </div>
                <h1>{user ? user.length : '10'}</h1>
                <Link to="/users" style={{ color, fontSize: 12 }}> Voir plus</Link>
            </div>
            <div className="chartInfo">
                <div className="chart">
                    <ResponsiveContainer width="99%" height="100%">
                        <LineChart data={chartData}>
                            <Tooltip
                                contentStyle={{ background: "transparent", border: "none" }}
                                labelStyle={{ display: "none" }}
                                position={{ x: 10, y: 40 }}
                            />
                            <Line
                                type="monotone"
                                dataKey={dataKey}
                                stroke={color}
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="texts">
                    <span className="percentage" style={{ color: percentage < 0 ? "rgba(255, 99, 71, 0.432)" : "rgba(50, 205, 50, 0.418)" }}>
                        {percentage}%
                    </span>
                    <span className="duration">..................</span>
                </div>
            </div>
        </div>
    );
};

export default ChartBox;
