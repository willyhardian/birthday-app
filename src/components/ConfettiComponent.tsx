'use client'
import { useEffect, useState } from 'react';
import Confetti from 'react-dom-confetti';
export default function ConfettiComponent() {
    const [active, setActive] = useState(false);
    const config = {
        angle: 90,
        spread: 360,
        startVelocity: 40,
        elementCount: 70,
        dragFriction: 0.12,
        duration: 3000,
        stagger: 3,
        width: "20px",
        height: "20px",
        perspective: "500px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
    };

    useEffect(() => {
        setTimeout(() => {
            setActive(true)
        }, 1000);
    }, []);
    return (
        <>
            <div className='absolute z-10'>
                <Confetti active={active} config={config} />
            </div>
        </>
    );
}