import React from "react";
import Counter from '../components/Counter'
import ToggleText from '../components/ToggleText'
import Form from '../components/Form'
import LogOnMount from "../components/LogOnMount";
import FetchData from '@/components/FetchData'
import DocumentTitleUpdater from '@/components/DocumentTitleUpdater'
import IntervalComponent from "@/components/IntervalComponent";
import FetchDataOnPropChange from "@/components/FetchDataOnPropChange"
export default function Home() {
  return (
    <main>
      <Counter/>
      <ToggleText/>
      <Form/>
      <LogOnMount/>
      <FetchData/>
      <DocumentTitleUpdater/>
      <IntervalComponent/>
      <FetchDataOnPropChange/>
    </main>
  );
}
