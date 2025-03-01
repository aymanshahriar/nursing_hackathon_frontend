import React, { useState } from "react";
import NavBar from "./components/NavBar";

const CalendarPage = () => {
    const today = new Date();
    const [currentDate, setCurrentDate] = useState({
        year: today.getFullYear(),
        month: today.getMonth()
    });
    const [selectedDate, setSelectedDate] = useState(null);

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const firstDayOfMonth = new Date(currentDate.year, currentDate.month, 1).getDay();
    const totalDays = getDaysInMonth(currentDate.year, currentDate.month);

    const prevMonth = () => {
        setCurrentDate((prev) => {
            const newMonth = prev.month === 0 ? 11 : prev.month - 1;
            const newYear = prev.month === 0 ? prev.year - 1 : prev.year;
            return { year: newYear, month: newMonth };
        });
    };

    const nextMonth = () => {
        setCurrentDate((prev) => {
            const newMonth = prev.month === 11 ? 0 : prev.month + 1;
            const newYear = prev.month === 11 ? prev.year + 1 : prev.year;
            return { year: newYear, month: newMonth };
        });
    };

    const isPastDate = (year, month, day) => {
        const today = new Date();
        const selectedDate = new Date(year, month, day);
        return selectedDate < today.setHours(0, 0, 0, 0);
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-background px-6 pb-16">
            <h2 className="text-4xl font-fredoka text-primary mt-6">Calendar</h2>
            <p className="text-center text-base text-gray-500 font-montserrat mt-2 max-w-md">
                Stay organized with upcoming events, support group meetings, and personal journaling schedules.
            </p>

            {/* Calendar Card */}
            <div className="mt-6 w-full max-w-md bg-card p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-4">
                    <button onClick={prevMonth} className="px-4 py-2 bg-gray-300 rounded">❮</button>
                    <h3 className="text-xl font-semibold font-poppins text-textPrimary">
                        {new Date(currentDate.year, currentDate.month).toLocaleString('default', { month: 'long' })} {currentDate.year}
                    </h3>
                    <button onClick={nextMonth} className="px-4 py-2 bg-gray-300 rounded">❯</button>
                </div>

                {/* Days of the Week */}
                <div className="grid grid-cols-7 gap-2 text-center font-semibold">
                    {daysOfWeek.map((day, index) => (
                        <div key={index} className="text-sm text-textPrimary">{day}</div>
                    ))}
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-2 mt-2">
                    {[...Array(firstDayOfMonth)].map((_, index) => (
                        <div key={index} className="p-2"></div>
                    ))}
                    {Array.from({ length: totalDays }, (_, index) => index + 1).map((day) => (
                        <button
                            key={day}
                            onClick={() => !isPastDate(currentDate.year, currentDate.month, day) && setSelectedDate(day)}
                            disabled={isPastDate(currentDate.year, currentDate.month, day)}
                            className={`p-2 rounded-md text-center text-sm transition ${
                                selectedDate === day
                                    ? "bg-primary text-white"
                                    : isPastDate(currentDate.year, currentDate.month, day)
                                        ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                                        : "bg-white text-black border border-gray-300"
                            }`}
                        >
                            {day}
                        </button>
                    ))}
                </div>
            </div>

            <button className="mt-6 w-full max-w-xs py-4 text-lg bg-accent text-white font-bold font-poppins shadow-md hover:bg-secondary transition rounded-full">
                Add Event
            </button>

            <NavBar />
        </div>
    );
};

export default CalendarPage;
