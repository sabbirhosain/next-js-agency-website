'use client';
import Count from 'react-countup';


const Counter = ({ count, duration }) => {
    return (<Count end={count} duration={duration} enableScrollSpy scrollSpyOnce={false} />)
}

export default Counter