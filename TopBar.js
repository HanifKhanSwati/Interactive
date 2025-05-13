import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function TopBar() {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => setDateTime(new Date()), 1000);
    }, []);

    return (
        <nav className="bg-gray-900 text-white p-4 flex justify-between">
            <div>Medical WebApp</div>
            <div>{dateTime.toLocaleString()}</div>
        </nav>
    );
}

export default TopBar;