import RenderAdvice from '../features/advices/RenderAdvice';
// import SelfcareData from '../shared/SelfcareData'
import {View, Text} from 'react-native';

const AdviceInfoScreen = ({ route }) => {
    const { adviceCard } = route.params;

    return (
        <>
        <RenderAdvice adviceCard={adviceCard} />
        </>
    );

};

export default AdviceInfoScreen;