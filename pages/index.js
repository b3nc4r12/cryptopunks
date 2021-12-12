import Head from "next/head"
import styled from "styled-components"
import Header from "../components/Header"
import PunkList from "../components/PunkList"
import Main from "../components/Main"
import { useState } from "react"

const Home = ({ punkListData }) => {
  const [selectedPunk, setSelectedPunk] = useState(0);

  return (
    <Container>
      <Head>
        <title>CryptoPunks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main punkListData={punkListData} selectedPunk={selectedPunk} />
      <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
    </Container>
  )
}

export const getStaticProps = async () => {
  const punks = await fetch("https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x335552F808Bb207C1f55B4727C91C3Ec3D1738d1").then((res) => res.json());

  return {
    props: {
      punkListData: punks.assets
    }
  }
}

export default Home

const Container = styled.div`
  background-color: #000;
  padding: 20px;
  min-height: 100vh;
  max-width: 100vw;
`