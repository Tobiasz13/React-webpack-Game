import React from 'react';
import styles from './style.css';
import Results from './results';

class App extends React.Component {
    render(){
        return(
            <div>
                <div className={styles.container}>
                    <h1 className={styles.style}>Witaj w grze</h1>
                    <h3 className={styles.text}>
                        <span className={styles.stone }>Kamień</span>
                        <span className={styles.paper}>Papier</span>
                        <span className={styles.scissors}>Nożyce</span>
                    </h3>
                </div>
                <div className={styles.container}>
                    <Results/>
                </div>

                <div className={styles.resultWinner}>
                    <span></span>
               </div>
            </div>
        )
    }

}

export default App;
