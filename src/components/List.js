import {react} from 'react'
import data from "./../ListData.json"
const List = () => {
console.log(data);
   return( <ul>
        {data.map((item) => (

        
        <li key={item.id}>
          {item.text}
        </li>
        ))
}
    </ul>)

}

export default List;