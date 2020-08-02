import React from 'react';
import {URL_HERO, URL_ENEMY} from '../../config/constants';
import 'bootstrap/dist/css/bootstrap.min.css';

function Hero(props){
    return(
        <div class="ccard text-white bg-dark mb-3">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img src={props.img} width="200" height="400"/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h3 class="card-title">{props.name}</h3>
                    </div>
                </div>
            </div>     
            
        </div>
    )
}

function Enemy(props){
    return(
        <div class="ccard text-white bg-dark mb-3">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img src={props.img} width="200" height="400"/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h3 class="card-title">{props.name}</h3>
                    </div>
                </div>
            </div>     
            
        </div>
    )
}

function Arena(){
    return(
        <div>
            <Hero name="Buki" img={URL_HERO}/>
            <Enemy name="Yujiro" img={URL_ENEMY}/>
        </div>
    )
}

export default Arena