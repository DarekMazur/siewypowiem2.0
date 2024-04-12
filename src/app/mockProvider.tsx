export function MockProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
    require('../mocks');
  }

  return <>{children}</>;
}
