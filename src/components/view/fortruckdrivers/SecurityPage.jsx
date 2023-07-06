import React from 'react'
import SecurityLevel from '../../ForTruckDrivers/securityPage/SecurityLevel'
import CommonHero from "../../common/CommonHero";

const SecurityPage = () => {
    const commonHero = {
      h2: "Security",
      herobg: "bg-blog",
    };
  return (
    <>
      <CommonHero commonHero={commonHero} />
      <SecurityLevel />
    </>
  );
}

export default SecurityPage