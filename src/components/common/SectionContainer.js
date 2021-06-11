import styled from 'styled-components'

export const SectionContainer = styled.section`
    color: ${({theme}) => theme.main.textPrimary};
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({theme, seq}) => (seq % 2 === 0) ? theme.main.bgSecondary : theme.main.bgPrimary};
    width: 100%;
    min-height: 560px;
    height: 100%;
    background-image: linear-gradient(to right, ${({theme, seq}) => (seq % 2 > 0) ? theme.main.bgSecondary: theme.main.bgPrimary}, ${({theme, seq}) => (seq % 2 > 0) ? theme.main.bgTertiary : theme.main.bgHeader});
    padding: 4rem 0;
    @media screen and (max-width: 768px) {
        padding: 100px 0;
        display: inline-table;
    }
    // border: 1px solid;
    // margin: auto;
    // background: conic-gradient(
	// 	from 45deg,
	// 	#e6e2cf 0,
	// 	#e6e2cf 90deg,
	// 	#f5f3eb 90deg,
	// 	#f5f3eb 180deg,
	// 	#ede3b9 180deg,
	// 	#ede3b9 270deg,
	// 	#f0ede1 270deg,
	// 	#f0ede1 360deg
	// );
	// background-size: 0.5em 0.5em;
	// height: 100vh;
`
export default SectionContainer