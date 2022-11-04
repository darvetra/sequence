import { css } from '@emotion/css'


function Game(): JSX.Element {


    return (
        <div>
            <h1
                className={css`
                    background-color: lawngreen;
                    font-size: 24px;
                `}
            >
                Игровой экран
            </h1>
        </div>
    )

}


export default Game;
