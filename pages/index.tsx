import Link from 'next/link';
import { css } from '@emotion/css'


function Index(): JSX.Element {


    return (
        <div>
            <h1
                className={css`
                    background-color: hotpink;
                    font-size: 24px;
                `}
            >
                Главная страница
            </h1>
            <Link href="/game">
                Игровой экран
            </Link>
        </div>
    )
}


export default Index;
