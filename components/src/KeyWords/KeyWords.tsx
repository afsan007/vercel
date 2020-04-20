import React, { FC } from "react"; 
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

const CircleKeyWords = styled(Chip)`
    font-family: "IRANSans";
    background-color: #bde1f6;
    color: #323232;
    margin-left:5px;
    margin-bottom:5px;
`;

export interface keyWordsProps {
    keywords: string[];
}

export const WebbinarKeyWords: FC<keyWordsProps> = ({ keywords }) => {
    const webinarKeyWordss = keywords.map(function (keyword, index) {
        return <CircleKeyWords key = { index } label={keyword} />
    });
    return (
        <Grid>
            { webinarKeyWordss }
        </Grid>
    );          
};

export default WebbinarKeyWords;
