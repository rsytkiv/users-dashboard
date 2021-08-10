import React from 'react'

export default function Users() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(
            (result) => {
                setItems(result);
                console.log(result);
            },
        )
    }, []);
    
    return (
      <div className="container">
        <table>
            {items.length && items.map((item) => 
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                </tr>
            )}
        </table>
        <button>Posts</button>
      </div>
    );
}