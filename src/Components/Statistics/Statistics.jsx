import { useEffect, useState } from "react";
import { Cell, Legend, Pie, PieChart } from "recharts";

const Statistics = () => {
    const [totalDonation, setToalDonation] = useState(0);
    const [yourDonation, setYourDonation] = useState(0);
    const [statisticsValue, setStatisticsValue] = useState({
        totalDonation: 100,
        yourDonation: 0
    });
    useEffect(() => {
        fetch('./donet.json')
            .then((res) => res.json())
            .then((data) => {
                setToalDonation(data.length);
            })
    }, [])
    useEffect(() => {
        const getLocalData = JSON.parse(localStorage.getItem('Donet'));
        if (getLocalData) {
            setYourDonation(getLocalData.length);
        }
    }, [])

    useEffect(() => {
        setStatisticsValue({
            totalDonation: 100 - ((100 / totalDonation) * yourDonation).toFixed(2),
            yourDonation: (100 / totalDonation).toFixed(2) * yourDonation
        })
    }, [yourDonation, totalDonation])

    const data = [
        {
            "name": "Your Donation" + ` (${statisticsValue.yourDonation}%)`,
            "value": statisticsValue.yourDonation,
            color: "#00C49F",
        },
        {
            "name": "Total Donation" + ` (${statisticsValue.totalDonation}%)`,
            "value": statisticsValue.totalDonation,
            color: "#FF444A",
        }
    ];

    return (
        <section className="py-10 px-5 flex justify-center">

            <div className="md:hidden">
                <PieChart width={230} height={250}>
                    <Legend verticalAlign="bottom" height={10} />
                    <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50}>
                        {
                            data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))
                        }
                    </Pie>
                </PieChart>
            </div>
            <div className="hidden md:block">
                <PieChart width={500} height={250}>
                    <Legend verticalAlign="bottom" height={10} iconSize={30} />
                    <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50}>
                        {
                            data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))
                        }
                    </Pie>
                </PieChart>
            </div>

        </section>
    );
};

export default Statistics;