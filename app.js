const gList = ['Cucumbers', 'Kale', 'Almonds', 'Coffee Beans']

class GroceryList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false,
    };
  };

  onItemClick (e) {
    this.setState({
      done: !this.state.done
    })
  };

  render() {
    const style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    }

    return (
      <li style={style} onClick={this.onItemClick.bind(this)}>{this.props.groceries}</li>
    )
  };
}


function App() {
  const allItems = () => gList.map(items => <GroceryList key={items} groceries={items} />);
  return (
    <div>
      <h2>My Todo List</h2>
      <ul>
        {allItems()}
      </ul>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));

// function GroceryList(props) {

//   const onListClickHandler = (e) => {
//     console.log('I got clicked');
//   }

//   const groceries = props.groceries.map((item) => <li key={item} onClick={onListClickHandler}>{item}</li>)

//   return(
//     <ul>
//       {groceries}
//     </ul>
//   );
// }

