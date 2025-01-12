const RequestBloodSection = () => {
  return (
    <section className=" py-10">
      <div className="container mx-auto px-4">
        
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto">
          <form>
            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
              />
            </div>

            {/* Blood Group Field */}
            <div className="mb-4">
              <label htmlFor="bloodGroup" className="block text-gray-700 font-semibold mb-2">
                Blood Group
              </label>
              <select
                id="bloodGroup"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>

            {/* Contact Number Field */}
            <div className="mb-4">
              <label htmlFor="contact" className="block text-gray-700 font-semibold mb-2">
                Contact Number
              </label>
              <input
                type="text"
                id="contact"
                placeholder="Enter your contact number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
              />
            </div>

            {/* Location Field */}
            <div className="mb-4">
              <label htmlFor="location" className="block text-gray-700 font-semibold mb-2">
                Location
              </label>
              <input
                type="text"
                id="location"
                placeholder="Enter your location"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RequestBloodSection;
