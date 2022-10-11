import { React } from "react";
import'./card_list.css'
import Card from "../card/Card"

const Cardlist=props=>{
    return(
        <div className="card-list">
          {props.Monsters.map(monster=>(<Card
            key={monster.id} monster={monster}
          />))}
        </div>
    )
}
export default Cardlist