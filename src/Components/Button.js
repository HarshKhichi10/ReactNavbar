import React from 'react'

import './Button.css'


const STYLES =[

    'btn--primary',
    'btn--outline'

]

const SIZES = [

'btn-medium',
'btn--large'

]

const Button = ({
      children,
      type,
      onClick,
      buttonstyle,
      buttonsize,

}) =>{

    const checkButtonstyle =  STYLES.includes(buttonstyle) ? buttonstyle : STYLES[0]
    const checkbuttonsize = SIZES.includes(buttonsize) ? buttonsize : SIZES[0]

    return(
              <button className={`btn ${checkButtonstyle} ${checkbuttonsize}`} onClick={onClick}
                  type={type} > {children} </button> 
         )
}


export default Button