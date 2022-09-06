import './App.css';
import {useEffect} from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import cloud from './assets/cloud.png';


function App() {
    const iterations = 1000;

    const background1 = useWebAnimations({
        keyframes: [
            {transform: 'translateX(100%)'},
            {transform: 'translateX(-100%)'},
        ],

        animationOptions: {
            duration: 36000,
            iterations
        },
    });

    const background2 = useWebAnimations({
        keyframes: [
            {transform: 'translateX(100%)'},
            {transform: 'translateX(-100%)'},
        ],
        animationOptions: {
            duration: 36000,
            iterations
        },
    });

    //background3 is the cloud
    const background3 = useWebAnimations({
        keyframes: [
            {transform: 'translateX(100%)'},
            {transform: 'translateX(-100%)'},
        ],
        animationOptions: {
            duration: 70000,
            iterations
        },
    });

    const foreground1 = useWebAnimations({
        keyframes: [
            {transform: 'translateX(100%)'},
            {transform: 'translateX(-100%)'},
        ],
        animationOptions: {
            duration: 12000,
            iterations
        },
    });

    const foreground2 = useWebAnimations({
        keyframes: [
            {transform: 'translateX(100%)'},
            {transform: 'translateX(-100%)'},
        ],
        animationOptions: {
            duration: 12000,
            iterations
        },
    });

    const redQueen_alice = useWebAnimations({
        keyframes: [
            {transform: 'translateY(0)'},
            {transform: 'translateY(-100%)'},
        ],
        animationOptions: {
            easing: 'steps(7, end)',
            direction: "reverse",
            duration: 600,
            playbackRate: 1,
            iterations
        }
    });

    let playBackRateRQ = 1;
    let playBackRateBG = 0;

    const adjustBackgroundPlayback = () => {
        if (playBackRateRQ < 0.8) {
            playBackRateBG = playBackRateRQ / 2 * -1;
        } else if (playBackRateRQ > 1.2) {
            playBackRateBG = playBackRateRQ / 2;
        } else {
            playBackRateBG = 0;
        }
        foreground1.getAnimation().playbackRate = playBackRateBG;
        foreground2.getAnimation().playbackRate = playBackRateBG;
        background1.getAnimation().playbackRate = playBackRateBG;
        background2.getAnimation().playbackRate = playBackRateBG;
    };

    const goFaster = () => {
        playBackRateRQ *= 1.1;
        redQueen_alice.getAnimation().playbackRate = playBackRateRQ;
        adjustBackgroundPlayback();
    }

    useEffect(() => {
        setInterval(() => {
            if (playBackRateRQ > 0.4) {
                playBackRateRQ *= 0.9;
                redQueen_alice.getAnimation().playbackRate = playBackRateRQ
            }
            adjustBackgroundPlayback();
        }, 3000);

        document.addEventListener('click', goFaster)
    });

    return (
        <>
            <div className="wrapper">
                <div className="sky">
                    <div className="scenery" id={'background3'} ref={background3.ref}>
                        <img id="cloud" src={cloud} alt="Cloud"/>
                    </div>
                </div>
                <div className="earth">
                    <div id="red-queen_and_alice">
                        <img id="red-queen_and_alice_sprite"
                             src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
                             srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x"
                             alt="Alice and the Red Queen running to stay in place."
                             ref={redQueen_alice.ref}
                        />
                    </div>
                </div>
                <div className="scenery" id="foreground1" ref={foreground1.ref}>
                    <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
                         srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" "/>
                </div>
                <div className="scenery" id="foreground2" ref={foreground2.ref}>
                    <img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png"
                         srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" "/>
                    <img id="w_rook_upright"
                         src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png"
                         srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" "/>
                </div>
                <div className="scenery" id="background1" ref={background1.ref}>
                    <img id="r_pawn_upright"
                         src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"
                         srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" "/>
                    <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png"
                         srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" "/>
                    <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png"
                         srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" "/>
                </div>
                <div className="scenery" id="background2" ref={background2.ref}>
                    <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png"
                         srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" "/>

                    <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png"
                         srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" "/>
                    <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png"
                         srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" "/>
                </div>
            </div>
        </>

    );
}

export default App;
