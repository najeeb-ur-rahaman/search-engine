import { useState } from "react";
const SearchData= ({data}) => {
    const [position, setPosition] = useState('10')
    
      const styles = {
        baseText: {
          fontFamily: 'Cochin',
        },
        titleText: {
          fontSize: 20,
          fontWeight: 'bold',
          color:'purple'
        },
      };
    return(
   <div style={{ position: 'absolute', left: `clamp(0vw, ${position}rem, 100vw - 1rem)` }}>
   {/* { data.map((d) => (
    <div>
    <p key={d.id} style={{color: "red"}}>{d.title}</p>
    <p key={d.id}>{d.description}</p>
    </div>
    ))}; */}
    
    {
        data.map((e)=> (
        <div >
            {/* <img src={e.favicon} alt={e.favicon} width="50" height="50"></img> */}
            <p style={styles.titleText}>{e?.title}</p>
            <p style={styles.titleText}>{e?.type}</p>
             <p style={{color:'green'}}>{e?.publication_info?.summary}</p>
            <p>{e?.snippet}</p>
       <a href={e.url} target="_blank">{e?.url}</a> 
       <br/>
       <br/>
       </div>
        ))
    }
    
</div>
    );
}
export default SearchData;