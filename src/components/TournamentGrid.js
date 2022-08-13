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

    const MatchWrapper = styled.div`
      display:flex;
      justify-content: center;
      align-items: center;
    `
    const stage = Math.log2(db.tournament[0].teams.length)
    console.log(stage)

    const RoundsLoop = n => {
      let rounds = []
        for (let i = 0; i <= n; i++){
          rounds.push(GenerateStages(i))
        }
        return rounds
    }

    const GenerateStages = n => {
      return(<Round key={n}>
        {db.tournament[0].matches.filter(item => item.stage === n).map(item => {
          return (
          <MatchWrapper>
            <Match key={item.id}>
              <TeamWrapper>
                <Team>{item.teams[0]}</Team>
                <Score winner={item.winner === 0}>{item.teamA_score}</Score>
              </TeamWrapper>
              <TeamWrapper>
                <Team>{item.teams[1]}</Team>
                <Score winner={item.winner === 1}>{item.teamB_score}</Score>
              </TeamWrapper>
            </Match>
            <GorizontalLine/>
            {item.id % 2 ? <VerticalLineDown/> : <VerticalLineUp/>}
          </MatchWrapper>
          )
        })}
      </Round>)
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
