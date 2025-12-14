import {useState} from 'react'

const ToDoList = () => {

  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // ກວດສອບວ່າມີການປ້ອນຂໍ້ມູນຫຼືບໍ່
    if (inputValue && inputValue.trim()) {
      // ສ້າງ object ໃໝ່ທີ່ມີ name ແລະ completed
      const newItem = {
        name: inputValue,
        completed: false
      };
      setItems([...items, newItem]);
      setInputValue('');
    }
  }

  // 4. ຟັງຊັນສຳລັບຕິກ toggle completed (ຄືກັບໃນຮູບ)
  const toggleTodo = (id) => {
    setItems(
      items.map((todo, index) => {
        if (index === id) {
          // ສ້າງ Object ໃໝ່, ສະຫຼັບກັນ 'completed'
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

   // function delete
  function handleRemoveItem(index){
    const newItems = items.filter((item, i) => i !== index);
    setItems(newItems);
  }

  console.log("items:", items);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
           ລາຍການສິນຄ້າ
        </h1>

        {/* Form ເພີ່ມລາຍການ */}
        <div className="mb-8">
          <div className="flex gap-2">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
              placeholder="ປ້ອນຊື່ສິນຄ້າ..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button 
              onClick={handleSubmit}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
            >
              ເພີ່ມ
            </button>
          </div>
        </div>

        {/* ສະແດງລາຍການ */}
        <div className="space-y-2">
          {items.length === 0 ? (
            <p className="text-center text-gray-500 py-8">
              ຍັງບໍ່ທັນມີລາຍການ
            </p>
          ) : (
            items.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3 flex-1">
                  {/* Checkbox ສຳລັບຕິກວ່າສຳເລັດ */}
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => toggleTodo(index)}
                    className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                  />
                  <span 
                    className={`text-lg ${
                      item.completed 
                        ? 'line-through text-gray-400' 
                        : 'text-gray-800'
                    }`}
                  >
                    {index + 1}. {item.name}
                  </span>
                </div>
                <button 
                  onClick={() => handleRemoveItem(index)}
                  className="text-2xl hover:scale-110 transition-transform"
                  title="ລຶບລາຍການ"
                > 
                ❌
                </button>
              </div>
            ))
          )}
        </div>

        {/* ສະຫຼຸບຈຳນວນ */}
        {items.length > 0 && (
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex justify-around text-center">
              <div>
                <p className="text-gray-600">ທັງໝົດ</p>
                <p className="font-bold text-indigo-600 text-xl">{items.length}</p>
              </div>
              <div>
                <p className="text-gray-600">ສຳເລັດແລ້ວ</p>
                <p className="font-bold text-green-600 text-xl">
                  {items.filter(item => item.completed).length}
                </p>
              </div>
              <div>
                <p className="text-gray-600">ຍັງບໍ່ທັນສຳເລັດ</p>
                <p className="font-bold text-orange-600 text-xl">
                  {items.filter(item => !item.completed).length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ToDoList