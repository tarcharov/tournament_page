import React from "react";
import db from "./bd.json"
import styled from "styled-components";

const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #100649;
  `
const GridWrapper = styled.div`
    display: flex;
    justify-content: center;
    min-width: 1113px;
    @media ${props => props.media.phone}{
      min-width: 400px;
    }
    @media ${props => props.media.tablet}{
      min-width: 700px;
    }
    @media ${props => props.media.desktop}{
      min-width: 1113px;
    }
  `
const Round = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-around;
    color: white;
    margin: 0px 20px;
  `
const Match = styled.div`
  margin: ${props => props.margin ?
    `${props.margin+10}px 0px`
   : `10px 0px`};
  position:relative;
  :before{
    ${props => props.margin ? "content: '' ; position:absolute; width: 15px; background: white; height: 4px; left: -20px;top: 50%;" : ""}
  }
  :after{
    ${props => props.winners ? "" :`
    content: "";
    position:absolute;
    width: 15px;
    background: white;
    height: 4px;
    right: -20px;
    top: 50%;`}
  }

  `
const TeamWrapper = styled.div`
    display: flex;
  `
const Score = styled.div`
    background-color: ${props => props.winner ? "#025E5F" : "#4C1CF3"};
    margin-left: 3px;
    width: 36px;
    height: 40px;
    border-radius: 0px 5px 5px 0px;
    text-align: center;
    padding: 10px;
    @media ${props => props.media.phone}{
      width: 18px;
      height: 20px;
      padding: 5px;
      border-radius: 0px 2px 2px 0px;
    }
    @media ${props => props.media.tablet}{
      width: 27px;
      height: 30px;
      padding: 7px;
      border-radius: 0px 3px 3px 0px;
    }
    @media ${props => props.media.desktop}{
      width: 36px;
      height: 40px;
      padding: 10px;
      border-radius: 0px 5px 5px 0px;
    }
  `
const Team = styled.div`
    width: 250px;
    height: 40px;
    background-color: #1C0A68;
    border-radius: 5px;
    text-align: center;
    padding: 10px;
    @media ${props => props.media.phone}{
      width: 150px;
      height: 20px
    }
    @media ${props => props.media.tablet}{
      height: 30px;
      width: 100px;
    }
    @media ${props => props.media.desktop}{
      width: 250px;
      height: 40px;
    }
  `
const Cell = styled.div`
    position:relative;
    :after{
      ${props => props.winners ? "" :`
      content: '';
      position: absolute; 
      width: 5px;
      background: white;
      height:${props.margin*2+100}px;
      right: -20px;
      top:25%;`}
    }
`
const MatchWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
  `

const media = {
  phone: "(max-width: 425px)",
  tablet: "(max-width: 768px) and (min-width:425px)",
  desktop: "(max-width: 1920px) and (min-width: 768px)"
}
const TournamentGrid = () => {
    
    const stage = Math.log2(db.tournament[0].teams.length)

    const RoundsLoop = n => {
      const rounds = []
        for (let i = 1; i <= n; i++){
          rounds.push(GenerateStages(i))
        }
        return rounds
    }

    const GenerateStages = n => {
      const matchesArr = db.tournament[0].matches.filter(item => item.stage === n)
      const matches = []
      
      for(let i = 0; i<=matchesArr.length-1; i+=2){
        matches.push(GenerateCell(matchesArr, i, n))
      }
      return(<Round key={n}>
        {matches}
      </Round>)
    }

    const GenerateCell = (arr,i, n) => {
      let margin = 0;
      for(let i=0; i<n;i++){
        margin+=i*50;
      }
        return (
          <Cell margin={margin} winners={n===stage}>
           {console.log(n===stage)}
          <MatchWrapper>
              <Match key={arr[i].id} margin={margin} winners={n===stage}>
                <TeamWrapper>
                  <Team media={media}>{arr[i].teams[0]}</Team>
                  <Score media={media} winner={arr[i].winner === 0}>{arr[i].teamA_score}</Score>
                </TeamWrapper>
                <TeamWrapper>
                  <Team media={media}>{arr[i].teams[1]}</Team>
                  <Score media={media} winner={arr[i].winner === 1}>{arr[i].teamB_score}</Score>
                </TeamWrapper>
              </Match>
              {i+1 <= arr.length-1 ? <Match key={arr[i+1].id}  margin={margin}>
                <TeamWrapper>
                  <Team media={media}>{arr[i+1].teams[0]}</Team>
                  <Score media={media} winner={arr[i+1].winner === 0}>{arr[i+1].teamA_score}</Score>
                </TeamWrapper>
                <TeamWrapper>
                  <Team media={media}>{arr[i+1].teams[1]}</Team>
                  <Score media={media} winner={arr[i+1].winner === 1}>{arr[i+1].teamB_score}</Score>
                </TeamWrapper>
              </Match> : <></>}
          </MatchWrapper>
        </Cell>
        )
    }

  return (
    <Main>
      <GridWrapper media={media}>
        {RoundsLoop(stage)}
      </GridWrapper>
    </Main>
  );
};
export default TournamentGrid;
