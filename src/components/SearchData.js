
const SearchData= ({data}) => {

    return(
   <div>
   {/* { data.map((d) => (
    <div>
    <p key={d.id} style={{color: "red"}}>{d.title}</p>
    <p key={d.id}>{d.description}</p>
    </div>
    ))}; */}
    <h1>{data.length}</h1>
    {
        data.map((e)=> (
        <div>
       <a href={e} target="_blank">{e}</a>
       <br/>
       </div>
        ))
    }
    
</div>
    );
}
export default SearchData;