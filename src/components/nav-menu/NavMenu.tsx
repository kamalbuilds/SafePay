import Box from "@mui/material/Box";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import { Theme } from "@mui/material";

type NavMenuProps = {
  setStep: (newStep: number) => void;
  activeStep: number;
};

const NavMenu = ({ setStep, activeStep }: NavMenuProps) => {
  return (
    <NavMenuContainer
      padding="16px"
      display="flex"
      flexDirection="column"
      gap={2}
      minWidth="368px"
    >
      <MenuList>
        <NavItem onClick={() => setStep(0)} active={activeStep === 0}>
          <Typography fontWeight="700" fontSize="20px">
            Intro
          </Typography>
        </NavItem>

        <NavItem onClick={() => setStep(1)} active={activeStep === 1}>
        <OrderLabel fontSize="10px" fontWeight="700">
            01
          </OrderLabel>
          <Typography fontWeight="700" fontSize="20px">
            Choose Category
          </Typography>
        </NavItem>

        <NavItem onClick={() => setStep(2)} active={activeStep === 2}>
          <OrderLabel fontSize="10px" fontWeight="700">
            02
          </OrderLabel>
          <Typography fontWeight="700" fontSize="20px" marginLeft="12px">
            Authenticate
          </Typography>
        </NavItem>

        <NavItem onClick={() => setStep(3)} active={activeStep === 3}>
          <OrderLabel fontSize="10px" fontWeight="700">
            03
          </OrderLabel>
          <Typography fontWeight="700" fontSize="20px" marginLeft="12px">
            Buy Crypto using CC
          </Typography>
        </NavItem>

        <NavItem onClick={() => setStep(4)} active={activeStep === 4}>
          <OrderLabel fontSize="10px" fontWeight="700">
            04
          </OrderLabel>
          <Typography fontWeight="700" fontSize="20px" marginLeft="12px">
            Stream Money
          </Typography>
        </NavItem>

        <NavItem onClick={() => setStep(5)} active={activeStep === 5}>
          <OrderLabel fontSize="10px" fontWeight="700">
            05
          </OrderLabel>
          <Typography fontWeight="700" fontSize="20px" marginLeft="12px">
            Relay Kit
          </Typography>
        </NavItem>

        <NavItem onClick={() => setStep(6)} active={activeStep === 6}>
          <OrderLabel fontSize="10px" fontWeight="700">
            06
          </OrderLabel>
          <Typography fontWeight="700" fontSize="20px" marginLeft="12px">
            Gasless Onboarding
          </Typography>
        </NavItem>
      </MenuList>
    </NavMenuContainer>
  );
};

export default NavMenu;

const NavMenuContainer = styled(Box)<{
  theme?: Theme;
}>(
  ({ theme }) => `
  
  border-radius: 10px;
  
  border: 1px solid ${theme.palette.border.light};
`
);

const NavItem = styled(MenuItem)<{
  theme?: Theme;
  active: boolean;
}>(
  ({ theme, active }) => `
  
  border-radius: 10px;
  
  border: 1px solid ${
    active ? theme.palette.primary.dark : theme.palette.border.light
  };

  margin-bottom: 16px;
  padding: 16px 22px;
  display: flex
`
);

const OrderLabel = styled(Typography)<{
  theme?: Theme;
}>(
  ({ theme }) => `
  border: 1px solid ${theme.palette.text.primary};
  border-radius: 4px;
  padding: 4px 6px;
  line-height: 12px;
`
);
