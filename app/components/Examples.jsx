var React = require('react');
var {NavLink} = require('react-router-dom');

var Examples = () => {
    return (
        <div>
            <h1 className="text-center">I love you!</h1>
            <h6>{"this is my first original on the internet  website ever, and I'm making it for you :)"}</h6>
            <p><a target="_blank" href='https://www.google.com/search?q=cats&espv=2&source=lnms&tbm=isch&sa=X&ved=0ahUKEwili8CmyfbSAhXow1QKHYsYCJgQ_AUIBigB&biw=1280&bih=612'>
                {' ฅ/ᐠ｡ᆽ｡ᐟ\\\ \ (ﾐⓛᆽⓛﾐ) I love that you like cats so much and that we have a little cat family =^._.^=  (^..^)ﾉ ก₍⸍⸌̣ʷ̣̫⸍̣⸌₎ค'}
            </a></p>
            <ol>
                <li>
                    <NavLink to='/?location=Iloveyou!'>{'You are the best feeder-er ever! I love when you make food :)'}</NavLink>
                </li>
                <li>
                    <NavLink to='/?location=mwah'>{"I like when you take care of me when I'm sick.  You are the bestest in the world :)"}</NavLink>
                </li>
            </ol>
        </div>
    )
};

module.exports = Examples;