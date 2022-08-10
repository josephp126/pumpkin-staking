import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import { Drawer } from "@material-ui/core";

const SidebarLayout = styled.div`
  background-color: white;
  text-align: right;
  padding-right: 3%;
  @media (max-width: 900px) {
    background-color: transparent;
    position: absolute;
    right: 0px;
    top: 20px;
  }
`;

const ItemUL = styled.ul`
  list-style-type: none;
  text-decoration: none;
  margin: 8px 0;
  height: 100%;
  display: inline-flex;
`;

const ItemName = styled.li`
  margin: 10px 30px;
  float: right;
  border-bottom: 2px solid white;
  font-size: 20px;
  &:hover {
    border-bottom: 2px solid red;
  }
`;

const ItemMobile = styled.div`
  padding: 10px 20px;
  font-size: 20px;
  color: white;
  &:hover {
    border-bottom: 2px solid red;
  }
`;

const MobileLayout = styled.div`
  padding-top: 30px;
  height: 100%;
  background: white;
`;

const sidebarItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Read Docs",
    link: "/readdocs",
  },
  {
    name: "Staking",
    link: "/staking",
  },
  {
    name: "Mint Token",
    link: "minttoken",
  },
];

export const Sidebar = () => {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayMobile = () => {
    const handleDrawerOpen = (e: any) => {
      e.preventDefault();
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    };

    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
    return (
      <>
        <button onClick={(e) => handleDrawerOpen(e)}>
          <MenuIcon style={{ color: "black" }} />
        </button>
        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
            color: "black",
          }}
        >
          <div>{getDrawerChoices()}</div>
        </Drawer>
      </>
    );
  };

  const getDrawerChoices = () => {
    return (
      <MobileLayout>
        {sidebarItems.map(({ name, link }: { name: string; link: string }) => (
          <ItemMobile key={name}>
            <Link style={{ textDecoration: "none", color: "black" }} to={link}>
              {name}
            </Link>
          </ItemMobile>
        ))}
      </MobileLayout>
    );
  };

  const displayDesktop = () => {
    return (
      <div>
        <ItemUL>
          {sidebarItems.map(
            ({ name, link }: { name: string; link: string }) => (
              <ItemName key={name}>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={link}
                >
                  {name}
                </Link>
              </ItemName>
            )
          )}
        </ItemUL>
      </div>
    );
  };

  return (
    <SidebarLayout>
      {mobileView ? displayMobile() : displayDesktop()}
    </SidebarLayout>
  );
};
