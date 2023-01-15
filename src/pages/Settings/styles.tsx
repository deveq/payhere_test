import {ReactElement} from 'react';
import styled from 'styled-components';
import Card from 'components/Card';

export interface IMenuItemData {
    label: string;
    button?: ReactElement;
}

export interface MenuTabProps {
    title: string;
    data: IMenuItemData[];
}

export const MenuList = styled.ul`
    display: grid;
    gap: 10px;
    padding: 10px 5px;
`;

export const MenuItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const MenuTitle = styled.span`
    color: ${({theme}) => theme.text1};
`;

export const SettingsContainer = styled.div`
    padding: 70px;
    flex: 1;
`;

export const CardTitle = styled.h3`
    color: ${({theme}) => theme.text3};
    font-size: 18px;
    margin-bottom: 10px;
    text-indent: -10px;
`;

export const MenuCard = styled(Card)`
    margin-bottom: 30px;
`;



export const MenuTab = ({data, title}: MenuTabProps) => {
    return (
        <>
            <CardTitle>{title}</CardTitle>
            <MenuCard>
                <MenuList>
                    {
                        data.map(item => (
                            <MenuItem key={item.label}>
                                <MenuTitle>{item.label}</MenuTitle>
                                {item.button}
                            </MenuItem>
                        ))

                    }
                </MenuList>
            </MenuCard>
        </>
    )
}