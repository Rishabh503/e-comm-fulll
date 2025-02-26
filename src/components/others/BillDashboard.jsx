import { useState } from "react";

export default function BillDashboard() {
  const initialBills = [
    { id: 1, billName: "Electricity Bill", amount: 1200, dueDate: "2025-03-10", category: "Electricity" },
    { id: 2, billName: "Water Bill", amount: 500, dueDate: "2025-03-15", category: "Water" },
    { id: 3, billName: "Internet Bill", amount: 800, dueDate: "2025-03-20", category: "Internet" },
    { id: 4, billName: "Rent", amount: 15000, dueDate: "2025-03-05", category: "Rent" },
    { id: 5, billName: "Phone Bill", amount: 600, dueDate: "2025-03-12", category: "Other" },
  ];

  const [bills, setBills] = useState(initialBills.map(bill => ({
    ...bill,
    reminders: Array.from({ length: 4 }, (_, i) => i * 3 + 3),
  })));
  const [sortBy, setSortBy] = useState("dueDate");
  const [completedReminders, setCompletedReminders] = useState({});

  const calculateReminderDates = (dueDate, reminders) => {
    return reminders
      .map((monthsBefore) => {
        const due = new Date(dueDate);
        due.setMonth(due.getMonth() - monthsBefore);
        return { date: due.toISOString().split('T')[0], monthsBefore };
      })
      .sort((a, b) => new Date(b.date) + new Date(a.date));
  };

  const handleCompleteReminder = (billId) => {
    setBills((prevBills) =>
      prevBills.map((bill) => {
        if (bill.id === billId) {
          return {
            ...bill,
            reminders: bill.reminders.slice(1),
          };
        }
        return bill;
      })
    );
    setCompletedReminders((prev) => ({
      ...prev,
      [billId]: (prev[billId] || 0) + 1,
    }));
  };

  const sortedBills = [...bills].sort((a, b) => new Date(a[sortBy]) + new Date(b[sortBy]));

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Admin Dashboard</h2>
      <div className="flex justify-between mb-4">
        <label className="font-semibold">Sort By: 
          <select
            className="ml-2 p-2 border rounded"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="dueDate">Due Date</option>
            <option value="amount">Amount</option>
          </select>
        </label>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 shadow-md rounded-lg">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="border p-3">Bill Name</th>
              <th className="border p-3">Amount</th>
              <th className="border p-3">Due Date</th>
              <th className="border p-3">Category</th>
              <th className="border p-3">Upcoming Reminders</th>
              <th className="border p-3">Completed Reminders</th>
              <th className="border p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedBills.map((bill, index) => {
              const reminderDates = calculateReminderDates(bill.dueDate, bill.reminders);
              return (
                <tr key={bill.id} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} text-center border` }>
                  <td className="border p-3">{bill.billName}</td>
                  <td className="border p-3 font-semibold">₹{bill.amount}</td>
                  <td className="border p-3">{bill.dueDate}</td>
                  <td className="border p-3">{bill.category}</td>
                  <td className="border p-3">{reminderDates.length > 0 ? reminderDates[0].date : "No more reminders"}</td>
                  <td className="border p-3">{completedReminders[bill.id] || 0}</td>
                  <td className="border p-3">
                    {reminderDates.length > 0 && (
                      <button
                        onClick={() => handleCompleteReminder(bill.id)}
                        className="px-3 py-1 bg-green-500 text-white rounded"
                      >
                        Mark Done
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
