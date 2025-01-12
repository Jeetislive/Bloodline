import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import MapComponent from "../components/mapComponent";
import AppFeatures from "../components/appFeatures";

const DonorDashboard = () => {
  const navigate = useNavigate();
  const [donationHistory, setDonationHistory] = useState([]);

  useEffect(() => {
    // Mock donor's previous blood donation history
    const mockHistory = [
      {
        id: 1,
        date: "2024-12-15",
        bloodBank: "LifeLine Blood Bank",
        location: "New Delhi, India",
        status: "Completed",
      },
      {
        id: 2,
        date: "2024-10-01",
        bloodBank: "Red Cross Center",
        location: "Mumbai, India",
        status: "Completed",
      },
    ];
    setDonationHistory(mockHistory);
  }, []);

  const handleLogout = () => {
    // Perform logout actions if needed
    navigate("/");
  };

  return (
    <>
      {/* Header with Dashboard Title and Logout Button */}
      <div className="flex justify-between items-center px-6 py-4 bg-red-500 text-white">
        <h1 className="text-2xl font-bold">Donor Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-white text-red-500 px-4 py-2 rounded hover:bg-gray-100 transition"
        >
          Logout
        </button>
      </div>

      <div className="h-8"></div>

      {/* Main Content */}
      <div className="min-h-screen bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          {/* Map Section */}
          <div className="bg-white shadow-md rounded-md mb-8">
            <h2 className="text-2xl font-bold text-red-500 px-6 py-4">
              Requesters & Blood Bank Needs Near You
            </h2>
            <div className="w-full h-96">
              <MapComponent />
            </div>
          </div>

          {/* Donation History */}
          <div className="bg-white shadow-md rounded-md mb-8">
            <h2 className="text-2xl font-bold text-red-500 px-6 py-4">
              Previous Donations
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 text-center">
                <thead>
                  <tr>
                    <th className="px-6 py-3 border-b">Date</th>
                    <th className="px-6 py-3 border-b">Blood Bank</th>
                    <th className="px-6 py-3 border-b">Location</th>
                    <th className="px-6 py-3 border-b">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {donationHistory.map((donation) => (
                    <tr key={donation.id}>
                      <td className="px-6 py-3 border-b">{donation.date}</td>
                      <td className="px-6 py-3 border-b">{donation.bloodBank}</td>
                      <td className="px-6 py-3 border-b">{donation.location}</td>
                      <td className="px-6 py-3 border-b">{donation.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* App Features / Advertisements */}
          <div className="bg-white shadow-md rounded-md mb-8">
            <h2 className="text-2xl font-bold text-red-500 px-6 py-4">
              Discover More Features
            </h2>
            <div className="p-6">
              <AppFeatures />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default DonorDashboard;
