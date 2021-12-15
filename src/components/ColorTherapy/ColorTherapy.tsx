import React, { useState } from "react";
import styles from './colortherapy.module.scss';
import Button from '@mui/material/Button';
import { ButtonGroup } from "@mui/material";

const ColorTherapy = ():JSX.Element => {
    let [bgColor, setbgColor] = useState('color-therapy__gradient-rainbow');
    return(
        <div className={styles['color-therapy']}>
            <div style={{ display: 'flex', justifyContent: 'space-around' }} className={styles[bgColor]}>
                <div className={styles['color-therapy__button-header']}>
                    <ButtonGroup variant="text" aria-label="text button group">
                        <Button onClick={() => setbgColor('color-therapy__gradient-warm')}>Warm Tones</Button>
                        <Button onClick={() => setbgColor('color-therapy__gradient-cool')}>Cool tones</Button>
                        <Button onClick={() => setbgColor('color-therapy__gradient-rainbow')}>Rainbow</Button>
                    </ButtonGroup>
                </div>
            </div>
        </div>
    );
}

export default ColorTherapy;