// Layout.tsx
import Header from "./header"; 

// eslint-disable-next-line react/prop-types
export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ marginTop: "64px" }}>{children}</main>
     
    </div>
  );
};
