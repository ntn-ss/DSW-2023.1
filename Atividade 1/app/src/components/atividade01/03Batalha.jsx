import React, { Component } from "react";

import Hero from "./Hero.png"
import Enemy from "./Enemy.png"

function Heroi({name, sourceIMG}) {
    return (
        <div className="Heroi">
            <img src={sourceIMG} alt={name} style={{maxWidth:400, marginBottom: 10}}/>
            <span>{name}.</span>
        </div>
    )
}

function Inimigo({name, sourceIMG}){
    return(
        <div className="Vilao">
            <img src={sourceIMG} alt={name} style={{maxWidth:320, marginBottom: 10}}/>
            <span>{name}.</span>
        </div>
    )
}

function Arena() {
    return(
        <div className="Arena">
            {/* Alterar os nomes caso queira novos personagens. */}
            <Heroi name="Link" sourceIMG={Hero}/>
            <Inimigo name="Ganondorf" sourceIMG={Enemy} />
        </div>
    )
}

class World extends React.Component {
    render() {
        return <div className="Mundo">{this.props.children}</div>
    }
}

export {Arena, World}