export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl container sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} North Brisbane Maintenance. All rights reserved.</p>
          <p>ABN 26 591 913 053</p>
        </div>
      </footer>
    )
  }