import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

import theme from '../global/theme'

export const MyBackground = styled(LinearGradient).attrs({
    colors: [theme.color.primaryDarkColor, theme.color.primaryColor],
})`
    flex: 1;
    padding: 10px;
`;

export const NameTitle = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 25px;
    align-self: center;
    margin-vertical: 7px;
`
