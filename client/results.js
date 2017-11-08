import React from 'react';
import styles from './style.css'
import App from './App'
import PlayerPick from './PlayerPick'
export default class Results extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: true,
            playerName: '',
            playerPick: '',
            playerScore: 0,
            computerScore: 0,
            computerChoice: 'Computer choice',
            playerChoice: 'Player choice',
            computerResult: 'Wynik',
            playerResult: 'Wynik',
        }
    }

    name(name) {
        name = prompt('Give name')
        this.setState({
            playerName: name,
        })
    }

    getComputerPick() {
        const possiblePicks = ['rock', 'paper', 'scissors'];
        return possiblePicks[Math.floor(Math.random()*3)];
    }

    checkRoundWinner(playerPick, computerPick) {
        let winnerIs = 'player';

        if(playerPick == computerPick) {
            winnerIs = '';
            this.setState({
                computerResult: 'draw',
                playerResult: 'draw',
            })
        } else if (
            (computerPick == 'rock' && playerPick == 'scissors') ||
            (computerPick == 'scissors' && playerPick == 'paper') ||
            (computerPick == 'paper' && playerPick == 'rock')){

            winnerIs = 'computer';
        }
        if(winnerIs == 'computer') {
            this.setState({
                computerResult: 'Winner',
                playerResult: 'lose',
                computerScore: this.state.computerScore + 1
            })
        } else if (winnerIs == 'player') {
            this.setState({
                computerResult: 'lose',
                playerResult: 'Winner',
                playerScore: this.state.playerScore + 1
            })
        }
    }

    checkResult() {
        if (this.state.computerScore >= 10) {
            this.setState({
                computerResult: 'Winner is Computer',
                playerResult: '',
                show: false
            })

        } else if (this.state.playerScore >= 10) {
            this.setState({
                playerResult: 'Winner is ' + this.state.playerName,
                computerResult: '',
                show: false
            })
        }
    }

    getPlayerPick(playerPick) {
        let computerPick = this.getComputerPick();
        this.setState({
            playerPick: playerPick,
            computerChoice: computerPick,
            playerChoice: playerPick,
        })
        this.checkRoundWinner(playerPick, computerPick);
        this.checkResult();
        console.log(computerPick);
    }

    restartGame() {
        this.setState({
            show: !this.state.show,
            playerPick: '',
            playerScore: 0,
            computerScore: 0,
            computerChoice: 'Computer choice',
            playerChoice: 'Player choice',
            computerResult: 'Wynik',
            playerResult: 'Wynik',
        })

    }

    render() {
        return   this.state.playerName !== '' ? this.GameRender() : this.NotGameRender()
    }

    GameRender(){
        return (
            <div>
                <button className={styles.buttonReset} onClick={() => this.restartGame()} style={{display: this.state.show ? 'none' : 'block'}}>
                    New Game
                </button>
                <h3 style={{display: this.state.show ? 'none' : 'block'}}>
                    {this.state.computerResult}
                    {this.state.playerResult}
                </h3>
                <div className={styles.container} style={{display: this.state.show ? 'block' : 'none'}}>
                    <PlayerPick
                        getPlayerPick={playerPick => this.getPlayerPick(playerPick)}
                        restartGamee = {() => this.restartGame()}
                    />
                    <div className={styles.row}>
                        <div className={styles.row_center1}>
                            <span className={styles.badge}>
                                {this.state.playerName}
                            </span>
                            <span className={styles.badge}>
                                {this.state.playerScore}
                            </span>
                        </div>
                        <div className={styles.row_center}>
                                VS.
                        </div>
                        <div className={styles.row_center2}>
                            <span className={styles.badge}>
                                {this.state.computerScore}
                            </span>
                                Computer
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.row_center}>
                            <span>
                                {this.state.playerChoice} {/*player choice */}
                            </span>
                        </div>
                        <div className={styles.row_center}>
                            <span>
                                {this.state.computerChoice} {/*Computer choice */}
                            </span>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.row_center}>
                            <span>
                                {this.state.playerResult} {/*Result Computer */}
                            </span>
                        </div>
                        <div className={styles.row_center}>
                            <span>
                                {this.state.computerResult} {/*Result player */}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    NotGameRender() {
        return <button className={styles.buttonReset} onClick={(name) => this.name(name)}>Start</button>
    }
}
