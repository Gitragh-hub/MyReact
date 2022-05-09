import ItemList from './ItemList';



const Content = ({ items, handleCheck, handleDelete, length }) => {

   
  return (
    <main>
      {length ? (
       <ItemList
        items ={items}
        handleCheck ={handleCheck}
        handleDelete= {handleDelete}
       ></ItemList>
      ):(<p>List is empty</p>

      )}
    </main>
  )
}

export default Content