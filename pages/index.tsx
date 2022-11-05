import Link from 'next/link';
import { css } from '@emotion/css';


const visuallyHidden = css`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
`;

const menu = css`
    box-sizing: border-box;
    width: 699px;
    height: 660px;
    background: #FFFFFF;
    border-radius: 45px;
    padding-top: 37px;
    display: inline-block;
    position: relative;
    z-index: 0;
    
    &::before {
        content: "";
        position: absolute;
        z-index: -1;
        inset: 0;
        padding: 20px;
        border-radius: 40px;
        background: linear-gradient(198.7deg, #7F75F0 -40.02%, #101F32 96.22%);
        mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
  }
`;

const menuTitle = css`
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #423F45;
`;

const menuWrapper = css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    justify-content: center;
    width: 100%;
    min-height: 100%;
    padding: 0;
    flex-direction: column;
    background-image: url(/img/4882066.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
`;

const range = css`
    background: transparent;
    cursor: pointer;
    width: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  
  // трек
  &::-webkit-slider-runnable-track {
        background: #FFD748;
        border-radius: 10px;
        height: 21px;
  }  
  
  &::-moz-range-track {
        background: #FFD748;
        border-radius: 10px;
        height: 21px;
  }
  
  // ползунок
  &::-webkit-slider-thumb {
        appearance: none;
        -webkit-appearance: none;
        width: 21px;
        height: 21px;
        background-color: #104987;
        border-radius: 10px;
  }

  &::-moz-range-thumb {
        appearance: none;
        -moz-appearance: none;
        width: 21px;
        height: 21px;
        background-color: #104987;
        border-radius: 10px;
  }
  
`;

const quantityContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 366px;
    margin: auto;
`;

const quantityList = css`
    display: flex;
    flex-direction: row;
    list-style-type: none;
    justify-content: space-between;
    width: 100%;
    padding: 0;
    margin: 0;
`;

const quantityItem = css`
    font-family: 'Calibri';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #4F4B61;
`;

const meaningContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 531px;
    margin: auto;
`;

const meaningList = css`
    display: flex;
    flex-direction: row;
    list-style-type: none;
    justify-content: space-between;
    width: 100%;
    padding: 0;
    margin: 0;
`;

const meaningItem = css`
    font-family: 'Calibri';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #4F4B61;
`;

const sort = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: auto;
    margin-top: 75px;
    padding: 0 20px;
    justify-content: center;
`;

const sortItem = css`
    display: flex;
    align-items: center;
    color: #423F45;
    font-family: 'Calibri';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    background: rgba(255, 215, 72, 0.56);
    border-radius: 20px;
    padding: 3px 24px;
    cursor: pointer;
    
    &:last-child {
        margin-left: 36px;
    }
    
    &:checked {
        background: #FFD748;
    }
`;

const radioItem = css`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  
    &:checked + label {
        background: #FFD748;
    }
`;

const button = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 260px;
    height: 60px;
    background: #38DF7A;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 44px;
    text-decoration: none;
    color: #FFFFFF;
    margin: auto;
    margin-top: 95px;
`;

function Index(): JSX.Element {


    return (
        <>
            <h1 className={visuallyHidden}>
                Главная страница
            </h1>

            <div className={menuWrapper}>
                <div className={menu}>
                    <form>
                        <h2 className={menuTitle}>Кол-во предметов</h2>
                        <div className={quantityContainer}>
                            <ul className={quantityList}>
                                <li className={quantityItem}>2</li>
                                <li className={quantityItem}>3</li>
                                <li className={quantityItem}>4</li>
                                <li className={quantityItem}>5</li>
                            </ul>
                            <input
                                type="range"
                                min="1"
                                max="4"
                                step="1"
                                className={range}
                            />
                        </div>

                        <h2 className={menuTitle}>Значения</h2>
                        <div className={meaningContainer}>
                            <ul className={meaningList}>
                                <li className={meaningItem}>A</li>
                                <li className={meaningItem}>9</li>
                                <li className={meaningItem}>19</li>
                                <li className={meaningItem}>50</li>
                                <li className={meaningItem}>99</li>
                                <li className={meaningItem}>999</li>
                            </ul>
                            <input
                                type="range"
                                min="1"
                                max="6"
                                step="1"
                                className={range}
                            />
                        </div>

                        <div className={sort}>
                            <input
                                className={radioItem}
                                id="increase"
                                name="sort"
                                type="radio"
                                value="increase"
                                checked
                            />
                            <label
                                className={sortItem}
                                htmlFor="increase"
                            >
                                По возрастанию
                            </label>

                            <input
                                className={radioItem}
                                id="decrease"
                                name="sort"
                                type="radio"
                                value="decrease"
                            />
                            <label
                                className={sortItem}
                                htmlFor="decrease"
                            >
                                По убыванию
                            </label>
                        </div>

                        <Link
                            className={button}
                            href="/game"
                        >
                            Играть
                        </Link>
                    </form>
                </div>
            </div>
        </>
    )
}


export default Index;
