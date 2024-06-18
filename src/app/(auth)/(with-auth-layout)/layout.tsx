export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1>Add new layout for auth</h1>
      {children}
    </>
  );
}
