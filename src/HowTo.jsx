
import './HowTo.css'



function HowTo() {

    return (
        <>
            <div className="howto-cont container">
                <h3 className="text-center mt-3 mb-3">How To Play</h3>
                <ol>
                    <li>
                        <p>To play, pick a number then click a square in the grid.</p>
                    </li>
                    <li>
                        <p>Players take turns in putting numbers on the grid.</p>
                    </li>
                    <li>
                        <p>The First Player to achieve a <b>Sum of 15</b> from the numbers on a Row or Column (Diagonals are excluded) on their turn <b><span style={{color: 'green'}}>Wins</span></b>.</p>
                    </li>
                    <li>
                        <p>If the player achieved a <b>Sum of Greater than 15</b> on their turn <b><span style={{color: 'red'}}>Loses</span></b>.</p>
                    </li>
                </ol>
            </div>
        </>
    )
}


export default HowTo