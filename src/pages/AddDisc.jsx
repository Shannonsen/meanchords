import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import shopServices from "services/shop-services";
import '../styles/pages/discPanel.scss'
import Select from "react-select"
import discManager from "services/disc-manager";

const AddDisc = () => {
  const navigate = useNavigate();
  const [disc, setDisc] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const [author, setAuthor] = useState({value:0, label:""});
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        async function fetchMyAPI(id) {
            try {
                const consulta = await shopServices.getDisc(id);
                setDisc(JSON.parse(consulta));
                setName(JSON.parse(consulta).Name)
                setDescription(JSON.parse(consulta).Description)
                setImgUrl(JSON.parse(consulta).DiscImgUrl)
                setPrice(JSON.parse(consulta).Price)
                setAmount(JSON.parse(consulta).Amount)
                setTags(JSON.parse(consulta).Categories.map((e, index) => {return {value: index, label: e.Name}}))
                
                const consultaCategories = await shopServices.getAllCategories();
                const cat = JSON.parse(consultaCategories)?.map(c => {return{value: c.TagId, label : c.Name}})
                setCategories(cat);
                const consulAuthors = await discManager.getAllAuthors();
                const authorss = JSON.parse(consulAuthors)?.map(c => {return{value: c.AuthorId, label : c.FullName}})
                setAuthors(authorss);
                let authorFromDisc = {value:1, label:JSON.parse(consulta).Author.FullName}
                authorss.forEach(element => {
                  if (element.label === authorFromDisc.label) authorFromDisc.value = element.value
                });
                setAuthor(authorFromDisc)
            } catch (error) {
                console.log(error)
            }
        }
        async function fetchCategories() {
          try {
            const consultaCategories = await shopServices.getAllCategories();
            const cat = JSON.parse(consultaCategories)?.map(c => {return{value: c.TagId, label : c.Name}})
            setCategories(cat);

            const consulAuthors = await discManager.getAllAuthors();
            const authorss = JSON.parse(consulAuthors)?.map(c => {return{value: c.AuthorId, label : c.FullName}})
            setAuthors(authorss);
          } catch (error) {
              console.log(error)
          }
      }
        if (id) fetchMyAPI(id);
        else fetchCategories()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const save = async (e) => {
      e.preventDefault()
      try{
        const discToUpload = { DiscId: disc.DiscId, name, description, imgUrl, price, amount, author, tags}
        if (id){
          await discManager.putDisc(discToUpload)
          .then(() => {
            alert("Se ha guardado correctamente!")
            navigate("/a/discos");
            window.location.reload();
          })
        }
        else {
          discManager.postDisc(discToUpload)
          .then(() => {
            alert("Se ha guardado correctamente!")
            navigate("/a/discos");
            window.location.reload();
          })
        }
        
      }
      catch(err){
        alert(err)
      }
    }

    const orderOptions = (values) => {
      return values
        .filter((v) => v.isFixed)
        .concat(values.filter((v) => !v.isFixed));
    };

    const onChangeTags = ( newValue, actionMeta) => {
      // eslint-disable-next-line default-case
      switch (actionMeta.action) {
        case 'remove-value':
        case 'pop-value':
          if (actionMeta.removedValue.isFixed) {
            return;
          }
          break;
        case 'clear':
          newValue = categories.filter((v) => v.isFixed);
          break;
      }
  
      setTags(orderOptions(newValue));
    };

    const onChangeAuthor = (e) => {
      var sel = document.getElementById("author");
      var text= sel.options[sel.selectedIndex].text;
      const newAuthor = {
        value: e.target.value,
        label: text

      }
      setAuthor(newAuthor)
    }

  return (
    <div className=" content ">
      <Link to="/a/discos/" ><a href="/" className="btn btn-outline-danger">&#60;- Regresar</a></Link>
      <form className="form w-75" onSubmit={save}>
        <label for="exampleInputEmail1" className="form-label">Nombre del disco</label>
        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        
        <label for="exampleInputEmail1" className="form-label">Descripcion</label>
        <textarea className="form-control text-wrap" value={description} onChange={(e) => setDescription(e.target.value)} />
        
        <label for="exampleInputEmail1" className="form-label">URL de imagen</label>
        <input type="text" className="form-control" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
        
        <label for="exampleInputEmail1" className="form-label">Precio</label>
        <input type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
        
        <label for="exampleInputEmail1" className="form-label">Cantidad</label>
        <input type="number" className="form-control" value={amount} onChange={(e) => setAmount(e.target.value)} />
        
        <label for="exampleInputEmail1" className="form-label">Autor</label>
        <select id="author" className="form-control" value={author.value} onChange={onChangeAuthor} disabled={id} >
        <option value={0}></option>
          {authors.map(authorr => {
            return <option value={authorr.value}>{authorr.label}</option>
          })}
        </select>
        
        <label for="exampleInputEmail1" className="form-label">Categorias</label>
        <Select 
        value={tags} 
        className="" 
        isMulti 
        options={categories} 
        onChange={onChangeTags}
        isClearable={tags.some((v) => !v.isFixed)}
         />
        
        <div className=" d-flex justify-content-center mt-3">
          <input type="button" onClick={save} value="Guardar" className="primary-button2 edit-button" />
        </div>
      </form>
    </div>
  )
}

export default AddDisc;