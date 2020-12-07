const gList = ['Cucumbers', 'Kale', 'Almonds', 'Coffee Beans']

class GroceryList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false,
      hover: false
    };
  };

  onItemClick (e) {
    this.setState({
      done: !this.state.done
    })
  };

  onItemHover (e) {
    this.setState({
      hover: !this.state.hover
    })
  };

  render() {
    const style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal'
    }

    return (
      <li 
        style={style} 
        onClick={this.onItemClick.bind(this)} 
        onMouseEnter={this.onItemHover.bind(this)} 
        onMouseLeave={this.onItemHover.bind(this)}
      >
        {this.props.groceries}
      </li>
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

