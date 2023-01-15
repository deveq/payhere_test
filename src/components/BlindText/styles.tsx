import styled from "styled-components";

const BlindText = styled.span`
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
`;

export {BlindText};