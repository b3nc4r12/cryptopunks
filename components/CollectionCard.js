import styled from "styled-components"

const CollectionCard = ({ id, name, traits, image }) => {
    return (
        <Container>
            <Image src={image} />
            <Details>
                <Name>{name} <Id>• #{id}</Id></Name>
                <PriceContainer>
                    <WethImage src="https://i.ibb.co/r6CgfzD/weth.png" />
                    <Price>{traits[0]?.value}</Price>
                </PriceContainer>
            </Details>
        </Container>
    )
}

export default CollectionCard

const Container = styled.div`
    color: white;
    background-color: #1a1c1e;
    border-radius: 20px;
    overflow: hidden;
    width: 300px;
    height: 500px;
    margin-right: 30px;
    cursor: pointer;
`

const Image = styled.img`
    width: 100%;
`

const Details = styled.div`
    padding: 20px;
`

const Name = styled.h4`
    font-size: 20px;
    font-weight: 900;
`

const Id = styled.span`
    color: #a1a5b0;
    font-size: 18px;
    font-weight: 600;
`

const PriceContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    object-fit: contain;
`

const WethImage = styled.img`
    height: 23px;
    width: 15px;
`

const Price = styled.p`
    margin-left: 5px;
    font-weight: 600;
`