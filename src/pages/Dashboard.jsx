import React, {useEffect} from "react"
import TopData from "../components/TopData"
import CardSection from "../components/CardSection"

import { useSelector } from 'react-redux';

function Dashboard() {
  useEffect(() => {
    document.title = "UDAO - Dashboard"
  }, []);
  
  let allState = useSelector(state => state);
  let activeProposals = useSelector(state => state.activeProposals);
  let activeGrants = useSelector(state => state.activeGrants);

  let activeProposalCount = activeProposals.length;
  let activeGrantCount = activeGrants.length;

  return (
    <>
      <div className="mb-5 p-5 flex justify-center items-center rounded-lg bg-black">
        <TopData name="Total Supply" data="69240/69420"/>
        <TopData name="Active Proposals" data={activeProposalCount}/>
        <TopData name="Active Grants" data={activeGrantCount}/>
      </div>
      <div className="flex">
        <CardSection header="Active Proposals" data={activeProposals}/>
        <CardSection header="Active Grants" data={activeGrants}/>
      </div>
    </>
  )
}

export default Dashboard
