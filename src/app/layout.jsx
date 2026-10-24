
import "antd/dist/reset.css";  //Ant Design components ko default styles normalize garcha.
import "./globals.css";

export const metadata = {
  title: "BatoKhula | Safer Roads, Better Journeys",
  description:
    "Report road problems and explore routes across Nepal.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white antialiased">
        {children}
      </body>
    </html>
  );
}

