'use client';

import React from "react";

interface PrimeiroComponentProps {
    mensagem?: string;
    mensagemDoBotao?: string;
}

export const PrimeiroComponent: React.FC<PrimeiroComponentProps> = (props: PrimeiroComponentProps) => {
     
    function handleClick() {
        alert(props.mensagemDoBotao);
    }
   
    
    return (
        <div>
            {props.mensagem} {/* { } serve para interpretar o conteúdo como código JavaScript */}
            <button onClick={handleClick}>Clique-me</button>
        </div>
    );
}

export const ArrowFunction = () => {
    return (
        <div>
            <p>Componente definido como Arrow Function!</p>
        </div>
    )
}