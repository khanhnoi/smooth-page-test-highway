import Highway from '@dogstudio/highway';
import { TimelineLite } from 'gsap';
// import Tween from 'gsap';
// import { TweenMax } from 'gsap';

class Fade extends Highway.Transition {

    // in ({ from, to, trigger, done }) {

    //     // Remove Old View
    //     console.log("in");
    //     from.remove();
    //     done();
    //     TweenMax.fromTo(to, 1, { left: '-100%', top: '50%' }, { left: '0%', onComplete: () => { done() } })
    //         // Animation
    //     tl.fromTo(to, 0.5, { opacity: 0 }, {
    //         opacity: 1
    //     });
    // }

    // out({ from, trigger, done }) {
    //     // [...]
    //     done();
    // }

    in ({ from, to, done }) {

        const tl = new TimelineLite();;
        tl.fromTo(to, 0.5, { left: '-100%', top: '50%' }, { left: '0%' })
            .fromTo(to, 0.5, { height: '2vh' }, {
                height: '90vh',
                top: '10%',
                onComplete: function() {
                    from.remove();
                    console.log('chuyen trang');
                    done();
                }
            })
            .fromTo(to.children[0], 2, { opacity: 0 }, { opacity: 1 })
    }
    out(from, done) {
        console.log("end")
        done()
    }
}

export default Fade;