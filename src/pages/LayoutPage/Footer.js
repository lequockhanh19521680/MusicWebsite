export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About Us</h3>
                        <p className="text-sm">Your Company Name is a platform dedicated to delivering the latest and greatest in music.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Explore</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-sm hover:text-gray-400 transition duration-300">Home</a></li>
                            <li><a href="#" className="text-sm hover:text-gray-400 transition duration-300">Music</a></li>
                            <li><a href="#" className="text-sm hover:text-gray-400 transition duration-300">Artists</a></li>
                            <li><a href="#" className="text-sm hover:text-gray-400 transition duration-300">Events</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Connect</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-sm hover:text-gray-400 transition duration-300">Contact</a></li>
                            <li><a href="#" className="text-sm hover:text-gray-400 transition duration-300">About</a></li>
                            <li><a href="#" className="text-sm hover:text-gray-400 transition duration-300">Privacy Policy</a></li>
                            <li><a href="#" className="text-sm hover:text-gray-400 transition duration-300">Terms of Use</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <ul className="flex space-x-4">
                            <li><a href="#" className="text-sm hover:text-gray-400 transition duration-300">Facebook</a></li>
                            <li><a href="#" className="text-sm hover:text-gray-400 transition duration-300">Twitter</a></li>
                            <li><a href="#" className="text-sm hover:text-gray-400 transition duration-300">Instagram</a></li>
                            <li><a href="#" className="text-sm hover:text-gray-400 transition duration-300">YouTube</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                </div>
            </div>
        </footer>)
}