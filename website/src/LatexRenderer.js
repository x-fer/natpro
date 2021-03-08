import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext'; //docs: https://v2.docusaurus.io/docs/2.0.0-alpha.69/theme-classic#usethemecontext
import styles from './pages/styles.module.css';

const LatexRenderer = ({latexExpression, altText}) => {
  const { isDarkTheme } = useThemeContext();

  var latexSource = "https://latex.codecogs.com/svg.latex?\\color{" + (isDarkTheme ? "white" : "black") + "}{" + latexExpression + "}";

  return (
    <img src={latexSource} alt={"Latex izraz: " + altText} className={styles.latex}/>
  )
}

export default LatexRenderer;