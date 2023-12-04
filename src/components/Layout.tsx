import NavBar from "./NavBar";

type LayoutType = {
  children:  React.ReactNode
}

export default function Layout({children}:LayoutType) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
      </>
  )
}