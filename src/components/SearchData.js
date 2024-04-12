
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
        data.map((e)=> (
        <div>
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