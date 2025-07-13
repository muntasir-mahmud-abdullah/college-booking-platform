import NavBar from "@/components/NavBar";
import "@/app/globals.css"
    export default function RootLayout({ children }) {
      return (
        <html lang="en">
          <body>
            <NavBar />
            <main className="container mx-auto p-4">{children}</main>
          </body>
        </html>
      );
    }