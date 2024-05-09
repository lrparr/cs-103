import useSWR from 'swr';
import styled from 'styled-components';

const StyledParentDiv=styled.div`
    display: flex;
    flex-flow: row wrap;
    padding: 5%

`;

const StyledChildDiv =styled.div`
    border: navy solid 5px;
    display: flex;
    flex-direction: column;
  
`;


function App() {

  const {data, error} =
    useSWR('https://rickandmortyapi.com/api/character',
        (url)=>
            fetch(url).then((res)=>res.json())
    );

  if (error) return (<p>Oops, there has been an error</p>);
  if (!data) return (<p>I am loading content...</p>);

  return (
    <StyledParentDiv>
      {
        data.results.map((char) =>
            (
                <StyledChildDiv key={char.id}>
                  <h3>{char.name}</h3>
                  <h4>{char.species}</h4>
                  <h4>{char.status}</h4>
                  <img src={char.image} alt={char.name}/>
                </StyledChildDiv>
            )
        )
      }
    </StyledParentDiv>
  )
}

export default App
