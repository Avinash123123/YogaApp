import Banner from "../components/Banner"

const Home = () => {
  return (
  
      <section className="container mx-auto mt-8">
        <h2 className="text-2xl font-semibold mb-4">Popular Yoga Classes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* <!-- Dummy Yoga Classes -->*/}
            <div className="bg-white rounded-lg shadow p-4">
                <h3 className="text-lg font-semibold mb-2">Yoga Class Title</h3>
                <p className="text-gray-600">Teacher: Deepak Mani</p>
                <p className="text-gray-600">Time: Monday, 10:00 AM - 11:00 AM</p>
                <p className="text-gray-600">Rs: 599</p>
                <button className="py-2 px-5 border rounded bg-blue text-white">Book Now</button>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
                <h3 className="text-lg font-semibold mb-2">Yoga Class Title</h3>
                <p className="text-gray-600">Teacher: Keerthana</p>
                <p className="text-gray-600">Time: Monday, 06:00 AM - 07:00 AM</p>
                <p className="text-gray-600">Rs: 400</p>
                <button className="py-2 px-5 border rounded bg-blue text-white">Book Now</button>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
                <h3 className="text-lg font-semibold mb-2">Yoga Class Title</h3>
                <p className="text-gray-600">Teacher: Manika Patel</p>
                <p className="text-gray-600">Time: Monday, 09:00 AM - 10:00 AM</p>
                <p className="text-gray-600">Rs: 1500</p>
                <button className="py-2 px-5 border rounded bg-blue text-white">Book Now</button>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
                <h3 className="text-lg font-semibold mb-2">Yoga Class Title</h3>
                <p className="text-gray-600">Teacher: Rohit</p>
                <p className="text-gray-600">Time: Monday, 10:00 AM - 11:00 AM</p>
                <p className="text-gray-600">Rs: 399</p>
                <button className="py-2 px-5 border rounded bg-blue text-white">Book Now</button>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
                <h3 className="text-lg font-semibold mb-2">Yoga Class Title</h3>
                <p className="text-gray-600">Teacher: Sapna</p>
                <p className="text-gray-600">Time: Monday, 07:00 AM - 08:00 AM</p>
                <p className="text-gray-600">Rs: 2500</p>
                <button className="py-2 px-5 border rounded bg-blue text-white">Book Now</button>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
                <h3 className="text-lg font-semibold mb-2">Yoga Class Title</h3>
                <p className="text-gray-600">Teacher: Amit Soham</p>
                <p className="text-gray-600">Time: Monday, 06:00 AM - 07:00 AM</p>
                <p className="text-gray-600">Rs: 400</p>
                <button className="py-2 px-5 border rounded bg-blue text-white">Book Now</button>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
                <h3 className="text-lg font-semibold mb-2">Yoga Class Title</h3>
                <p className="text-gray-600">Teacher: Garima</p>
                <p className="text-gray-600">Time: Monday, 07:00 AM - 08:00 AM</p>
                <p className="text-gray-600">Rs: 450</p>
                <button className="py-2 px-5 border rounded bg-blue text-white">Book Now</button>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
                <h3 className="text-lg font-semibold mb-2">Yoga Class Title</h3>
                <p className="text-gray-600">Teacher: Prashant</p>
                <p className="text-gray-600">Time: Monday, 09:00 AM - 10:00 AM</p>
                <p className="text-gray-600">Rs: 599</p>
                <button className="py-2 px-5 border rounded bg-blue text-white">Book Now</button>
            </div>
        </div>
    </section>
  )
}

export default Home