// @ts-nocheck
//  /* eslint-disable */
import React, { useState, useEffect } from "react";
// import { GaslessOnboarding, LoginConfig, GaslessWalletConfig } from "../components/Gaslessonboard";
// import { SafeEventEmitterProvider  } from "@web3auth/base";
// import { Button } from "@mui/material";

// interface GaslessOnboardingProps {
//   loginConfig: LoginConfig;
//   gaslessWalletConfig: GaslessWalletConfig;
// }

// interface UserInfo {
//   name: string;
//   email: string;
//   profileImage: string;
// }

// export default function GaslessOnboardingComponent() {
//   const loginConfig: LoginConfig = {
//     chain: {
//       id: 5,
//       rpcUrl: 'https://goerli.blockpi.network/v1/rpc/public'
//     },
//     domains: ['https://3000-legendarykamal-safepay-80g2xiigdbo.ws-us93.gitpod.io/'],
//     ui: { theme: 'dark' },
//     openLogin: {
//       mfa: "optional",
//       redirectUrl: 'https://3000-legendarykamal-safepay-80g2xiigdbo.ws-us93.gitpod.io/',
//     },
//   };

//   const gaslessWalletConfig: GaslessWalletConfig = {
//     apiKey: '8f1pO9ZPvUpwyJ_1lecK_ajDIt_A10TJbGiuYjvWp9s_'
//   };

//   const gaslessOnboarding = new GaslessOnboarding(loginConfig, gaslessWalletConfig);
//   const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(null);
//   const [userInfo, setUserInfo] = useState<UserInfo>({ name: "", email: "", profileImage: "" });

//   useEffect(() => {
//     async function init() {
//       try {
//         const initiz = await gaslessOnboarding.init();
//         console.log(initiz,'initizalised');
//         await gaslessOnboarding.login();
//         console.log(gaslessOnboarding.getUserInfo(),"in");
//         setProvider(gaslessOnboarding.getProvider());
//         // setUserInfo(gaslessOnboarding.getUserInfo());
//       } catch (err) {
//         console.error(err);
//       }
//     }
//     init();
//   }, []);

//   const handleLogin = async () => {
//     await gaslessOnboarding.login();
//     setProvider(gaslessOnboarding.getProvider());
//   };

//   const handleGetUserInfo = async () => {
//     const openloginUserInfo = await gaslessOnboarding.getUserInfo();
//     const newUserInfo = {
//       name: openloginUserInfo.name ?? "",
//       email: openloginUserInfo.email ?? "",
//       profileImage: openloginUserInfo.profileImage ?? ""
//     };
//     setUserInfo(newUserInfo);
//   };

//   const handleLogout = async () => {
//     await gaslessOnboarding.logout();
//     setProvider(null);
//     setUserInfo({ name: "", email: "", profileImage: "" });
//   };


//   console.log(userInfo,"user");

//   return (
//     <div>
//       {provider ? (
//         <>
//           <p>Provider: {provider.constructor.name}</p>
//           <Button variant="contained" color="primary" onClick={handleLogout}>
//             Logout
//           </Button>
//           {userInfo && (
//             <div>
//               <p>Name: {userInfo.name}</p>
//               <p>Email: {userInfo.email}</p>
//               <p>Profile Image: {userInfo.profileImage}</p>
//             </div>
//       )}
//       {<Button variant="contained" onClick={handleGetUserInfo}>Get User Info</Button>}
//         </>
//       ) : (
//         <Button variant="contained" color="primary" onClick={handleLogin}>
//           Login
//         </Button>
//       )}
//     </div>
//   );
// }
