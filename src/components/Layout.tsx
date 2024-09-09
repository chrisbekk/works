type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return <div className="layout flex flex-col h-full">{children}</div>;
};
