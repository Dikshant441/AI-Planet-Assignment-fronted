const Layout = ({ children }) => {
  return (
    <div>
      <div className=" bg-custom-light">
        <main className="">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
