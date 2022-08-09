import React from "react";
import styled from "styled-components";

const TournamentGrid = ({}) => {
  
    const Main = styled.div`
        display: flex;
        width: 100%;
        background-color: red;
    `
    const Round = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
    `
    const Match = styled.div`
        
    `
    const TeamWrapper = styled.div`
    display: flex;
    margin: 1rem;
    
    `
    const Score = styled.div`
      border: 2px solid orange 
    `

    const Team = styled.div`
    
        background-color: #1C0A68;
    `
  
  return (
    <Main>
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
    </Main>
  );
};
export default TournamentGrid;
