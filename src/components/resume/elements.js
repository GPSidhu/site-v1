import styled from 'styled-components'

export const ResumeContainer = styled.div`
    height: 842px; //1123px; //1754px; //842px;
    width: 595px; //794px; //1240px; //595px; 
    border: 1px solid black;
    margin: auto;
    display: block;
`

export const ResumeWrapper = styled.div`
    margin: auto;
    //border: 1px dotted grey;
    display: table;
    height: 100%;
    width: 100%;
`

export const ResumeHeader = styled.section`
    width: 100%;
    height: 164px;
    //border: 1px solid aqua;
    display: flex;
    background-color: #a9b0ad; //#66bdb1;
    color: white;
`

export const AvatarContainer = styled.div`
    //border: 1px solid black;
    display: table-column;
    width: 25%;
    //overflow: hidden;
    position: relative;
`

export const Avatar = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
`

export const Triangle = styled.div`
    height: 0;
    width: 0;
    border-top: 126px solid #66bdb1; //#a9b0ad;
    border-right: 556px solid transparent;
    position: absolute;
`
export const Img = styled.img`
    height: 65%;
    width: 70%;
    border-radius: 50%;
    border: 4px solid #66bdb1;
    margin: auto
`

export const InfoContainer = styled.div`
    //border: 1px solid black;
    display: table-column;
    width: 75%;
    position: relative;
`

export const Title = styled.h5`
    //border: 1px dotted black;
`

export const SubTitle = styled.div`
    //border: 1px dotted black;
    font-size: 14px;
`

export const Description = styled.p`
    font-size: 10px;
    font-style: italic;
    margin-top: 1rem;
`

export const ContactInfo = styled.div`
    //border: 1px dotted black;
    display: grid;
    grid-template-columns: 1fr 2fr;
    font-size: 10px;
    column-gap: 24px;
`

export const ContactChannel = styled.div`
    //margin: auto;
`

export const ContactChannelText = styled.span`
    padding-left: 4px;
`

export const ResumeBody = styled.section`
    //border: 1px dashed black;
    height: calc(100% - 164px);
    width: 100%;

    display: grid;
    grid-template-columns: 60% auto;
    column-gap: 20px;
    padding: 8px;
`

export const LeftColumn = styled.div`
    //border: 1px dotted grey;
    display: flex;
    flex-direction: column;
`

export const RightColumn = styled.div`
    //border: 1px dotted grey;
    display: flex;
    flex-direction: column;
    max-width: 212px;
`

export const ModuleContainer = styled.div`
    display: block;
    //border: 1px solid grey;
    margin-bottom: 8px;
`

export const ModuleTitle = styled.h6`
    color: #66bdb1;
    font-weight: bold;
    text-decoration: underline;
`

export const ModuleSectionTitle = styled.div`
    color: #a9b0ad;
    font-weight: bold;
    font-size: 10px;
`

export const ModuleSubtitle = styled.div`
    display: flex;
`

export const ModuleContent = styled.ul`
    display: block;
    height: auto;
    width: 100%;
    overflow-wrap: break-word;
`

export const ModuleContentLine = styled.li`
    font-size: 10px;
`

export const ModuleTopLine = styled.div`
    font-size: 10px;
    font-weight: 300;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const HighlightedText = styled.span`
    color: #66bdb1;
    font-style: italic;
    font-size: 11px;
`

export const PlainText = styled.span`
    color: black;
    font-size: 11px;
`

export const Skill = styled.div`
    height: 20px;
    width: auto;
    padding: 4px;
    background: #66bdb1;
    color: white;
    font-size: 10px;
    display: inline-block;
    margin: 2px;
    border-radius: 4px;
    vertical-align: middle;
    text-align: center;
`

export const SkillNested = styled.div`
    font-size: 10px;
    padding-bottom: 4px;
`


export const ModuleSectionHeading1 = styled.span`
    font-weight: 500;
    color: black;
    font-size: 12px;
`

export const ModuleSectionHeading2 = styled.span`
    font-weight: bold;
    font-size: 12px;
    color: #a9b0ad;
    padding-left: 4px;
`