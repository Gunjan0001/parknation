import React from "react";
import SecurityLevel from "../../ForTruckDrivers/securityPage/SecurityLevel";
import CommonHero from "../../common/CommonHero";
import ProvideBestSecurity from "../../ForTruckDrivers/securityPage/ProvideBestSecurity";

const SecurityPage = () => {
  const commonHero = {
    h2: "Security",
    herobg: "bg-security",
  };
  return (
    <>
      <CommonHero commonHero={commonHero} />
      <SecurityLevel />
      <ProvideBestSecurity />
    </>
  );
};

export default SecurityPage;
