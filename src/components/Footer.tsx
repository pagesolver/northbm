export default function Footer() {
  return (
    <footer className="footer footer-center p-4 bg-gray-800 text-white">
      <div>
        <p>
          &copy; {new Date().getFullYear()} North Brisbane Maintenance. All
          rights reserved.
        </p>
        <p>ABN 26 591 913 053</p>
      </div>
    </footer>
  );
}
