import React from "react";
import styled from "styled-components";

const TournamentGrid = ({}) => {
  
    const Main = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    `
    const GridWrapper = styled.div`
      display: flex;
      justify-content: space-around;
      background-color: #100649;
      width: 1113px;
      height: 665px;
    `
    const Round = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
    `
    const Match = styled.div`
    margin: 10px 0px; 
    `
    const TeamWrapper = styled.div`
      display: flex;
      margin: 10px 0px; 
    `
    const Score = styled.div`
      background-color: #4C1CF3;
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
  
  return (
    <Main>
      <GridWrapper>
        <Round>
          <Match>
            <TeamWrapper>
              <Team>Team1</Team>
              <Score>12</Score>
            </TeamWrapper>
            <TeamWrapper>
              <Team>Team2</Team>
              <Score>16</Score>
            </TeamWrapper>
          </Match>
          <Match>
            <TeamWrapper>
              <Team>Team1</Team>
              <Score>12</Score>
            </TeamWrapper>
            <TeamWrapper>
              <Team>Team2</Team>
              <Score>16</Score>
            </TeamWrapper>
          </Match>
          <Match>
            <TeamWrapper>
              <Team>Team1</Team>
              <Score>16</Score>
            </TeamWrapper>
            <TeamWrapper>
              <Team>Team2</Team>
              <Score>12</Score>
            </TeamWrapper>
          </Match>
          <Match>
            <TeamWrapper>
              <Team>Team1</Team>
              <Score>9</Score>
            </TeamWrapper>
            <TeamWrapper>
              <Team>Team2</Team>
              <Score>16</Score>
            </TeamWrapper>
          </Match>
        </Round>
        <Round>
          <Match>
            <TeamWrapper>
              <Team>Team1</Team>
              <Score>9</Score>
            </TeamWrapper>
            <TeamWrapper>
              <Team>Team2</Team>
              <Score>16</Score>
            </TeamWrapper>
          </Match>
          <Match>
            <TeamWrapper>
              <Team>Team1</Team>
              <Score>16</Score>
            </TeamWrapper>
            <TeamWrapper>
              <Team>Team2</Team>
              <Score>3</Score>
            </TeamWrapper>
          </Match>
        </Round>
        <Round>
          <Match>
            <TeamWrapper>
              <Team>Team1</Team>
              <Score>16</Score>
            </TeamWrapper>
            <TeamWrapper>
              <Team>Team2</Team>
              <Score>3</Score>
            </TeamWrapper>
          </Match>
        </Round>
      </GridWrapper>
    </Main>
  );
};
export default TournamentGrid;
