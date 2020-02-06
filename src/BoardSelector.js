import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core';
import { changeBoard } from './redux/actions/kanboard';
import { useSelector, useDispatch } from "react-redux";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles(theme => ({
    formControl: {
        position: 'relative',
        right: 0,
        width: theme.spacing(20)
    }
}))

const BoardSelector = ({ className }) => {

    const classes = useStyles()
    const dispatch = useDispatch()

    const currentId = useSelector(store => store.kanboard.currentBoardId)
    const availableIds = useSelector(store => store.kanboard.availableBoardsIds)

    const inputLabel = useRef(null);

const menuItems = availableIds.map(id => <MenuItem key={id} value={id}> {id} </MenuItem>)

    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                Board
            </InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={currentId}
                onChange={event => dispatch(changeBoard(event.target.value))}
            >
                {menuItems}
            </Select>
        </FormControl>
    )
}

export default BoardSelector;