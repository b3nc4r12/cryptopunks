import styled from "styled-components"
import CollectionCard from "./CollectionCard"

const PunkList = ({ punkListData, setSelectedPunk }) => {
    return (
        <Container>
            {punkListData.map((punk) => (
                <div key={punk.token_id} onClick={() => setSelectedPunk(punk.token_id)}>
                    <CollectionCard
                        id={punk.token_id}
                        name={punk.name}
                        traits={punk.traits}
                        image={punk.image_original_url}
                    />
                </div>
            ))}
        </Container>
    )
}

export default PunkList

const Container = styled.div`
    display: flex;
    overflow-x: scroll;
    margin-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid white;

    ::-webkit-scrollbar {
        display: none;
    }
`