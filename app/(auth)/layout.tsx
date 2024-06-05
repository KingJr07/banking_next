
//file for setting the layout of the pages in the auth, pages in this will extend its properties from

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    //initiating the fonts setup
    return (
      <main>
          {children}
      </main>
    );
  }
  