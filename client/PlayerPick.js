import React from 'react';
import styles from './style.css';

const PlayerPick = props => {
        return(
            <div className={styles.container} >
                <div className={styles.container}>
                    <div className={styles.player_pick_button_center}>
                        <button className={styles.btn} onClick={() => props.getPlayerPick('rock')}>
                            <span className={styles.badge}>
                                <i className={styles.fa_fa_hand_rock_o} aria-hidden={true}></i>
                            </span>
                            kamień
                        </button>
                        <button className={styles.btn} onClick={() => props.getPlayerPick('paper')}>
                            <span className={styles.badge}>
                                <i className={styles.fa_fa_hand_paper_o} aria-hidden={true}></i>
                            </span>
                            Papier
                        </button>
                        <button className={styles.btn} onClick={() => props.getPlayerPick('scissors')}>
                            <span className={styles.badge}>
                                <i className={styles.fa_fa_hand_scissors_o} aria-hidden={true}></i>
                            </span>
                            Nożyce
                        </button>
                    </div>
                </div>
            </div>
        )
    }
export default PlayerPick;
