import { useState } from 'react'

const MarketItemApp = () => {
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  const formData = new FormData(e.target); //ຮັບຄ່າຂໍ້ມູນມາຈາກ form ໂດຍກົງ

  const itemName = formData.get("name"); //ເອົາຂໍ້ມູນຈາກformData

  // const itemPrice = formData.get("price"); 
  // console.log("ລາຍການທີ່ເຈົ້າຕ້ອງການ");
  // alert(`add name list: ${itemName} lw, price: ${itemPrice}` )

  setItems([...items, itemName]); //ເພີ່ມ item ໃໝ່ເຂົ້າໄປໃນໃລາຍການ items
  // ຄືນຄ່າໃຫ້ form ເປັນຄ່າຫວ່າງອີກຄັ້ງ
  e.target.reset();
  }
  
 // function ສຳລັບຕິກ


  // function delete
  function handleRemoveItem(index){
    const newItems = items.filter((item, i) => i !== index);

    setItems(newItems);
  }  
  console.log("items:", items);  
  
  return ( 
    
    <div className='from_ListMarket'>
    <div className='ToDoList'>
      <h1>notes</h1>
      <form className='form_ToDoList' onSubmit={handleSubmit}>
        <input className='text_listToDo'
          name = "name"
          id = "name"
          type="text" 
          placeholder="input"
        />
        {/* <input 
          name = "price"
          id = "price"
          type="number" 
          placeholder="ລາຄາ"
        /> */}
        <button>add</button>
        
      </form>

      {items.length === 0 ? (
        <p>br thun mee line kan</p>
      ):(
        items.map((item, index) => (
        <p>{item} {""}
        <button onClick={() => handleRemoveItem(index)}>❌</button>
        </p>))
      )} 
    </div> 
    </div>
  )
}

export default MarketItemApp