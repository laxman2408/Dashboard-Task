const globalTheme = {
    switchWidth: '40px',
    switchHeight: '20px',
    switchPadding: '3px',
    colorContrastLow: '#d3d3d4',
    colorWhite: '#FFF',
    switchColorPrimary: '#302C40',
    switchAnimationDuration: '0.2s',
    gradient: 'linear-gradient(122deg, rgba(128,74,216,1) 0%, rgba(98,75,217,1) 100%)',
    colorGreen: '#5DC399',
    colorGray: '#adadad',
}


export const lightTheme = {
    primary: '#FFF',
    secondary: '#F8F8F8',
    textColor: '#585280',
    header: '#585280',
    headerNumber: '#FFF',
    activeMenu: '#585280',
    ...globalTheme
}

export const darkTheme = {
    primary: '#302C40',
    secondary: '#2C2839',
    textColor: '#FFF',
    header: '#FFF',
    headerNumber: '#585280',
    activeMenu: '#FFF',
    ...globalTheme
}









// import React from 'react'
// import styled from 'styled-components'
// import { useThemeContext } from 'themeContext'


// const Switch = styled.div`
//     display: flex;
//     flex-shrink: 0;
//     align-items: center;
//     position: absolute;
//     bottom: 1rem;
//     right: 1rem;
//     width: ${({ theme }) => theme.switchWidth};
//     height: ${({ theme }) => theme.switchHeight};
//     border-radius: 50em;
//     padding: ${({ theme }) => theme.switchPadding} 0;
//     .switch__input, .switch__label {
//         position: absolute;
//         left: 0;
//         top: 0;
//     }
//     .switch__input {
//         margin: 0;
//         padding: 0;
//         opacity: 0;
//         height: 0;
//         width: 0;
//         pointer-events: none;
//         &:checked + .switch__label {
//             background-color: ${({ theme }) => theme.colorWhite};
//         }
//         &:checked + .switch__label + .switch__marker {
//             left: calc(100% - ${({ theme }) => theme.switchHeight} + ${({ theme }) => theme.switchPadding});
//         }
//         &:focus + .switch__label,
//         &:active + .switch__label {
//             box-shadow: 0 0 0 3px alpha(${({ theme }) => theme.primary}, 0.2);
//         }
//     }
//     .switch__label {
//         width: 100%;
//         height: 100%;
//         color: transparent;
//         user-select: none;
//         background-color: ${({ theme }) => theme.textColor};
//         border-radius: inherit;
//         z-index: 1;
//         transition: background ${({ theme }) => theme.switchAnimationDuration};
//     }
//     .switch__marker {
//         position: relative;
//         background-color: ${({ theme }) => theme.primary};
//         width: calc(${({ theme }) => theme.switchHeight} - ${({ theme }) => theme.switchPadding} * 2);
//         height: calc(${({ theme }) => theme.switchHeight} - ${({ theme }) => theme.switchPadding} * 2);
//         border-radius: 50%;
//         z-index: 2;
//         pointer-events: none;
//         box-shadow: 0 1px 1px hsla(0, 0%, 0%, 0.25);
//         left: ${({ theme }) => theme.switchPadding};
//         transition: left ${({ theme }) => theme.switchAnimationDuration};
//         will-change: left;
//     }
// `

// const ToggleSwitch = () => {
//     const { toggleTheme } = useThemeContext()


//     return (
//         <>
//             <Switch>
//                 <input className="switch__input" type="checkbox" id="switchCheckbox1" onClick={toggleTheme} />
//                 <label aria-hidden="true" className="switch__label" htmlFor="switchCheckbox1">On</label>
//                 <div aria-hidden="true" className="switch__marker"></div><styled-components/>
//             </Switch>
//         </>
//     )
// }

// export default ToggleSwitch