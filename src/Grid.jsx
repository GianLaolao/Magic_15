
import './Grid.css'
import React, { useState } from 'react';

function Grid(props) {

    const [grid, setGrid] = useState([[null,null,null],[null,null,null],[null,null,null]]);
    const [isGridDisabled, setGridDisable] = useState(false);
    const WIN = 15;
    
    const handleGrid = (x, y, event) => {
        if(props.newNum !== null) {

            var newGrid = [...grid];

            newGrid[x][y] = props.newNum;
    
            setGrid(newGrid);
    
            event.target.disabled = true;
    
            var newDis = [...props.dis];
    
            newDis[props.newNum-1] = true;
            
            props.numFunc(null);
            props.disableFunc(newDis);    

            if(!checkGrid()) {
                switch (props.turn) {
                    case 1: props.turnFunc(2); break;
                    case 2: props.turnFunc(1); break;
                }
            }
        }
    } 

    function gameEnd() {
        props.disableFunc([true, true, true, true, true, true, true, true, true]);
        setGridDisable(true);   
        props.endFunc(true);
    }

    function checkGrid() {

        const r = checkRow();
        const c = checkCol();

        if(r === true || c === true) {
            gameEnd();
            props.winFunc(true);

            return true;
        }
        else if (r === 2 || c === 2) {
            gameEnd();
            props.winFunc(false);
            return true;
        }

        return false;
    }

    function checkSum(sum) {
        if(sum === WIN) {
            return 1;
        }
        else if (sum > WIN) {
            return 2;
        }
        return false;
    }

    function checkRow() {
        var sum;
        var skip;
        for(var i=0; i < 3; i++) {
            sum = 0;
            skip = 0;
            for(var j=0; j < 3; j++) {
                if (grid[i][j] === null) {
                    skip = 1;
                    break;  
                }
                sum += parseInt(grid[i][j]);
            }
            if (!skip) {
                const check = checkSum(sum);
                if(check === 1) {
                    return true;
                }
                else if(check === 2) {
                    return 2;
                }
            }
        }
        return false;
    }

    function checkCol() {
        var sum;
        var skip;
        for(var i=0; i < 3; i++) {
            sum = 0;
            skip = 0;
            for(var j=0; j < 3; j++) {
                if (grid[j][i] === null) {
                    skip = 1;
                    break;
                }
                sum += parseInt(grid[j][i]);
            }
            if(!skip) {
                const check = checkSum(sum);
                if(check === 1) {
                    return true;
                }
                else if(check === 2) {
                    return 2;
                }
            }
        }
        return false;
    }

    return (    
        <div className="grid-cont container">
            <div className="row mb-3">
                <div className="col-sm-4">
                    <button disabled={isGridDisabled} className="btn btn-secondary" onClick={(event) => handleGrid(0,0, event)}>{grid[0][0]}</button>
                </div>
                <div className="col-sm-4">
                    <button disabled={isGridDisabled} className="btn btn-secondary" onClick={(event) => handleGrid(0,1, event)}>{grid[0][1]}</button>
                </div>
                <div className="col-sm-4">
                    <button disabled={isGridDisabled} className="btn btn-secondary" onClick={(event) => handleGrid(0,2, event)}>{grid[0][2]}</button>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-sm-4">
                    <button disabled={isGridDisabled} className="btn btn-secondary" onClick={(event) => handleGrid(1,0, event)}>{grid[1][0]}</button>
                </div>
                <div className="col-sm-4">
                    <button disabled={isGridDisabled} className="btn btn-secondary" onClick={(event) => handleGrid(1,1, event)}>{grid[1][1]}</button>
                </div>
                <div className="col-sm-4">
                    <button disabled={isGridDisabled} className="btn btn-secondary" onClick={(event) => handleGrid(1,2, event)}>{grid[1][2]}</button>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-sm-4">
                    <button disabled={isGridDisabled} className="btn btn-secondary" onClick={(event) => handleGrid(2,0, event)}>{grid[2][0]}</button>
                </div>
                <div className="col-sm-4">
                    <button disabled={isGridDisabled} className="btn btn-secondary" onClick={(event) => handleGrid(2,1, event)}>{grid[2][1]}</button>
                </div>
                <div className="col-sm-4">
                    <button disabled={isGridDisabled} className="btn btn-secondary" onClick={(event) => handleGrid(2,2, event)}>{grid[2][2]}</button>
                </div>
            </div>
        </div>
    );
}

export default Grid;