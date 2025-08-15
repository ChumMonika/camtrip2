import { Poppins } from "next/font/google";
import "./globals.css";
import "./styles/cambodia.css";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Cambodia Travel - Discover the Kingdom of Wonder",
  description: "Explore Cambodia's magnificent temples, vibrant culture, and stunning landscapes. Plan your perfect trip to the Kingdom of Wonder.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
