import "./globals.css";
import { CourseProvider } from "./hooks/CourseContext";

export default function RootLayout({ children }) {
  return (
    <CourseProvider>
      <html lang="en">
      <body>
        {children}
      </body>
    </html>
    </CourseProvider>
  );
}
