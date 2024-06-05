//file for setting the layout of the pages in the root app

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //initiating the fonts setup
  return (
    <main>
        SIDEBAR
        {children}
    </main>
  );
}
