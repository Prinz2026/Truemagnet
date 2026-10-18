import "./globals.css";
export const metadata = { title: "Truemagnet", description: "Jumia Clone" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>);
}
