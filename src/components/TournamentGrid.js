import React from "react";
import styled from "styled-components";
import db from "./bd.json"
const TournamentGrid = ({}) => {
  
    const Main = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      background-color: #100649;
    `
    const GridWrapper = styled.div`
      display: flex;
      justify-content: space-around;
      width: 1113px;
    `
    const Round = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      color: white;
      margin: 0px 20px;
    `
    const Match = styled.div`
    margin: 10px 0px; 
    `
    const TeamWrapper = styled.div`
      display: flex;
      margin: 10px 0px; 
    `
    const Score = styled.div`
      background-color: ${props => props.winner ? "#025E5F" : "#4C1CF3"};
      margin-left: 3px;
      width: 36px;
      height: 40px;
      border-radius: 0px 5px 5px 0px;
      text-align: center;
      padding: 10px;

    `
    const Team = styled.div`
      width: 254px;
      height: 40px;
      background-color: #1C0A68;
      border-radius: 5px;
      text-align: center;
      padding: 10px;
    `
    const  Cell = styled.div`
    display:flex;
  `
    const MatchWrapper = styled.div`
      display:flex;
      justify-content: center;
      align-items: center;
    `
    const stage = Math.log2(db.tournament[0].teams.length)

    const RoundsLoop = n => {
      const rounds = []
        for (let y = 1; y <= n; y++){
          // console.log(y)
          rounds.push(GenerateStages(y))
        }
        return rounds
    }

    const GenerateStages = n => {
      const matchesArr = db.tournament[0].matches.filter(item => item.stage === n)
      const matches = []
      
      for(let i = 0; i<=matchesArr.length; i+=2){
        // {console.log(matchesArr.length)}
        matches.push(GenerateCell(matchesArr, i))
      }
      return(<Round key={n}>
        {matches}
      </Round>)
    }

    const GenerateCell = (arr,i) => {
      // console.log(arr)
      // console.log(i)
        return (
          <Cell>
          <MatchWrapper>
              <Match key={arr[i].id}>
                <TeamWrapper>
                  <Team>{arr[i].teams[0]}</Team>
                  <Score winner={arr[i].winner === 0}>{arr[i].teamA_score}</Score>
                </TeamWrapper>
                <TeamWrapper>
                  <Team>{arr[i].teams[1]}</Team>
                  <Score winner={arr[i].winner === 1}>{arr[i].teamB_score}</Score>
                </TeamWrapper>
              </Match>
              {i+1 === arr.length-1 ? <Match key={arr[i+1].id}>
                <TeamWrapper>
                  <Team>{arr[i+1].teams[0]}</Team>
                  <Score winner={arr[i+1].winner === 0}>{arr[i+1].teamA_score}</Score>
                </TeamWrapper>
                <TeamWrapper>
                  <Team>{arr[i+1].teams[1]}</Team>
                  <Score winner={arr[i+1].winner === 1}>{arr[i+1].teamB_score}</Score>
                </TeamWrapper>
              </Match> : <></>}
          </MatchWrapper>
        </Cell>
        )
    }

  return (
    <Main>
      <GridWrapper>
        {RoundsLoop(stage)}
      </GridWrapper>
    </Main>
  );
};
export default TournamentGrid;
