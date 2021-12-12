import { useEffect, useState } from "react"
import styled from "styled-components"

const Main = ({ punkListData, selectedPunk }) => {
    const [activePunk, setActivePunk] = useState(punkListData[0]);

    useEffect(() => setActivePunk(punkListData[selectedPunk]), [punkListData, selectedPunk]);

    return (
        <Container>
            <MainContent>
                <PunkHighlight>
                    <PunkContainer>
                        <SelectedPunk src={activePunk.image_original_url} />
                    </PunkContainer>
                </PunkHighlight>

                <PunkDetails>
                    <PunkTitle>
                        <Title>{activePunk.name}</Title>
                        <ItemNumber>• #{activePunk.token_id}</ItemNumber>
                    </PunkTitle>

                    <Owner>
                        <OwnerImageContainer>
                            <OwnerImage src={activePunk.owner.profile_img_url} />
                        </OwnerImageContainer>
                        <OwnerDetails>
                            <OwnerAddressAndHandle>
                                <OwnerAddress>{activePunk.owner.address}</OwnerAddress>
                                <OwnerHandle>@b3nc4r12</OwnerHandle>
                            </OwnerAddressAndHandle>
                            <OwnerLink>
                                <OwnerLinkImage src="https://i.ibb.co/1vrbb46/instagram.png" />
                            </OwnerLink>
                            <OwnerLink>
                                <OwnerLinkImage src="https://i.ibb.co/SvMMgkr/twitter.png" />
                            </OwnerLink>
                            <OwnerLink>
                                <OwnerLinkImage src="https://i.ibb.co/SBhMKgn/more.png" />
                            </OwnerLink>
                        </OwnerDetails>
                    </Owner>
                </PunkDetails>
            </MainContent>
        </Container>
    )
}

export default Main

const Container = styled.main`
    max-height: 50vh;
`

const MainContent = styled.div`
    display: flex;
    padding-bottom: 20px;
    border-bottom: 1px solid #fff;
`

const PunkHighlight = styled.div`
    flex: 0.25;
    display: flex;
    align-items: center;
    justify-content: center;
`

const PunkContainer = styled.div`
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    margin-right: 20px;
`

const SelectedPunk = styled.img`
    object-fit: contain;
    max-width: min(30vw, 40vh);
    max-height: 30vw;
`

const PunkDetails = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 0.75;
`

const PunkTitle = styled.div`
    display: flex;
    flex-wrap: 1;
`

const Title = styled.h1`
    font-size: 96px;
    font-weight: 800;
`

const ItemNumber = styled.h2`
    color: #a1a5b0;
    font-size: 72px;
    align-self: center;
    margin-left: 20px;
    white-space: nowrap;
`

const Owner = styled.div`
    display: flex;
    margin: 10px 0;
    height: 50px;

    div {
        margin: 0 5px;
    }
`

const OwnerImageContainer = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 50px;
    overflow: hidden;
    object-fit: contain;
`

const OwnerImage = styled.img`
    height: 100%;
    width: 100%;
`

const OwnerDetails = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
`

const OwnerAddressAndHandle = styled.div`
    flex: 1;
`

const OwnerAddress = styled.p``

const OwnerHandle = styled.p`
    color: #00ebfe;
`

const OwnerLink = styled.div`
    padding: 12px;
    border-radius: 50px;
    height: 50px;
    width: 50px;
    border: 1px solid #fff;
    margin: 0 0 0 10px;
    cursor: pointer;
`

const OwnerLinkImage = styled.img`
    height: 100%;
    width: 100%;
`