import styled from 'styled-components'

const Quote = ({by, source, quote}) => {
  
  const Figure = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
    font-style: italic;
    text-align: center;
    max-width: 15rem;
  `

  const BlockQuote = styled.p`
    background-color: lightgrey;
    padding: 1.5rem;
    /* max-width: 15rem; */
    display: flex;
    justify-content: center;
    border-radius: 10px;
    
  `
  const Cite = styled.p`
    color: grey;
    margin: 0px;
    
  `


  return (
    <Figure>
      <BlockQuote>"{quote}"</BlockQuote>
      <Cite>-{by}</Cite>
    </Figure>
  )
}

export default Quote