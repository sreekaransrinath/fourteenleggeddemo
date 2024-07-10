import Providers from "../redux/Providers";
import "../styles/globals.css";

export const metadata = {
  title: "Next.js App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
