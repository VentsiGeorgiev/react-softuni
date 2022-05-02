function TodoListItem(props) {
   // console.log(props);

   return <li>{props.children}</li>;

   // return <li>{props.text}</li>;
}

export default TodoListItem;