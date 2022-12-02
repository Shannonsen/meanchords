const Table = (props) => {
  const {data, ...elements} = props

  if(!data.length) return <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>

  return (
    <div className="w-75">
      <table className="table table-light table-striped ">
        <thead className="table-dark">
          <tr>
            {Object.keys(data[0])?.map(element => {
              return <th scope="col">{element}</th>
            })}
            {Object.entries(elements).map(e => {
                return <th scope="col">{e[0]}</th>
              })}
          </tr>
        </thead>
        <tbody>
          {data?.map((element, key) => {
            return <tr className="table-light" key={key} role="row">
              {Object.values(element)?.map(e => {
                return <td>{e}</td>
              })}
              {Object.entries(elements).map(e => {
                return <td>{e[1](element.ID)}</td>
              })}
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table;