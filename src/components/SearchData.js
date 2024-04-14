
const SearchData= ({data}) => {

    return(
   <div>
   {/* { data.map((d) => (
    <div>
    <p key={d.id} style={{color: "red"}}>{d.title}</p>
    <p key={d.id}>{d.description}</p>
    </div>
    ))}; */}
    
    {
        data.results.map((e)=> (
        <div>
            <h1>{data.input}</h1>
           
       <a href={e} target="_blank">{e}</a>
       <br/>
       <br/>
       </div>
        ))
    }
    
</div>
    );
}
export default SearchData;