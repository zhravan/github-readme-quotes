/*const animations = {
    default:{
        animation:"",
        keyframes:""
    },

    grow_out_in: {
        animation: `animation:grow-out-in 2s linear infinite alternate;`,
        keyframes: `@keyframes grow-out-in{
                        0% {
                                box-shadow:0 2px 4px -2px rgba(0,0,0,.25);
                                transform:scale(.95);
                            }
                            100% {
                                box-shadow:0 0 4px 2px rgba(0,0,0,.25);
                                transform:scale(1);
                            }
                    }`, 
    },
};

module.exports = animations;
*/
//this help in the central storage of animation that defines that you can apply to diffrent UI components without repeating css
const animations = {
    growOutlin:{
        animation:"grow-out-in 2s linear infinite alternate",
        keyframe:`@keyframes grow-out-in{
        0%{
        box-shadow: 2px 2px 4px 4px rgba(0,0,0,0.50);
        transfrom:scale(0.95);
        }
        100%{
        box-shadow: 2px 2px 4px 4px rgba(0,0,0,0.50);
        transform:scale(1);
        }
      }
    `
    }
}
module.exports = animations;