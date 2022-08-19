import React from "react";
import styled from "styled-components";
import db from "./bd.json"
const TournamentGrid = () => {
  
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
      justify-content:space-around;
      color: white;
      margin: 0px 20px;
    `
    const Match = styled.div`
    margin: ${props => props.margin ?
      `${props.margin}px 0px`
     : `0px`};
     position:relative;
    :after{
      content: "";
      position:absolute;
      width: 15px;
      background: white;
      height: 4px;
      right: -20px;
      top: 50%;
    }
    `
    const TeamWrapper = styled.div`
      display: flex;
      // margin: 10px 0px; 
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
      width: 250px;
      height: 40px;
      background-color: #1C0A68;
      border-radius: 5px;
      text-align: center;
      padding: 10px;
    `
    const  Cell = styled.div`
      position:relative;
      :after{
        content: "";
        position: absolute;
        width: 5px;
        background: white;
        height: ${props => `${props.margin*2+80}px`};
        right: -20px;
        top:25%;
      }
  `
    const MatchWrapper = styled.div`
      display:flex;
      flex-direction:column;
      justify-content: center;
      align-items: center;
    `
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
          <Cell margin={margin}>
          <MatchWrapper>
              <Match key={arr[i].id} margin={margin}>
                <TeamWrapper>
                  <Team>{arr[i].teams[0]}</Team>
                  <Score winner={arr[i].winner === 0}>{arr[i].teamA_score}</Score>
                </TeamWrapper>
                <TeamWrapper>
                  <Team>{arr[i].teams[1]}</Team>
                  <Score winner={arr[i].winner === 1}>{arr[i].teamB_score}</Score>
                </TeamWrapper>
              </Match>
              {i+1 <= arr.length-1 ? <Match key={arr[i+1].id}  margin={margin}>
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
