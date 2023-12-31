import React from "react";
import "./css/PlayerImformationDisplay.css";

function PlayerInformationDisplay({ state, formatTime }) {
  const windowSize = window.innerWidth;

  return (
    <div
      className={`player-information-container ${
        state.numberOfPlayers === 1 ? "single-player-container" : ""
      }`}
    >
      {state.numberOfPlayers === 1 && (
        <>
          <div className="single-player">
            <h2>Time</h2>
            <p>{formatTime(state.timer)}</p>
          </div>
          <div className="single-player">
            <h2>Moves</h2>
            <p>{state.players[state.currentPlayer].moves}</p>
          </div>
        </>
      )}
      {state.numberOfPlayers > 1 &&
        Object.keys(state.players).map((playerKey, index) => {
          return (
            <div
              key={index}
              class={
                state.currentPlayer ===
                parseInt(state.players[playerKey].name.slice(-1))
                  ? "active-player"
                  : null
              }
            >
              <h2>
                {windowSize < 550
                  ? state.players[playerKey].name.slice(0, 1) +
                    state.players[playerKey].name.slice(-1)
                  : state.players[playerKey].name}
              </h2>
              <p>{state.players[playerKey].score}</p>
            </div>
          );
        })}
    </div>
  );
}

export default PlayerInformationDisplay;