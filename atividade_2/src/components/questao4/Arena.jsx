import React from 'react'
import { URL_HERO, URL_ENEMY } from '../../config/constants'
import 'bootstrap/dist/css/bootstrap.min.css';


const Hero = props =>
    <div class="ccard text-white bg-dark mb-3">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src={URL_HERO} width="200" height="400"/>
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h3 class="card-title">Este é o {props.name} da arena {props.arena}</h3>
                </div>
            </div>
        </div>     
    </div>

const Enemy = props =>
    <div class="ccard text-white bg-dark mb-3">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src={URL_ENEMY} width="200" height="400"/>
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h3 class="card-title">Este é o {props.name} da arena {props.arena}</h3>
                </div>
            </div>
        </div>     
    </div>


const Arena4 = props =>
    <div>
        {React.Children.map(props.children, arena => {
            return React.cloneElement(arena, { ...props });
        })}
    </div>

export {Hero, Enemy, Arena4}





