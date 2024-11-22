import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import { Container, ToDoList, Input, Button, ListItem, Check, Trash } from './styles';



function App() {
  const [list, setList] = useState([])
  const [inputTask, setInputTask] = useState("");

  function typedInInput(event) {
    setInputTask(event.target.value)
  }
  function clickedTheButton() {
    if(inputTask) {
      setList([...list, { id: uuid(), task: inputTask, finished: false }])
      setInputTask("")
    }
  }
  function finalizarTarefa(id) {
    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)
  }
  function excluirTarefa(id) {
    const clearTask = list.filter(item => (item.id !== id))
    setList(clearTask);
  }


  return (
    <Container>
      <ToDoList>
        <Input value={inputTask} onChange={typedInInput} type="text" placeholder="Digite aqui sua proxima tarefa" />
        <Button onClick={clickedTheButton}>Adicionar</Button>
        <ul>
          {
            list.length > 0 ? (
              list.map(item => (
                <ListItem isFinished={item.finished} key={item.id}>
                  <Check onClick={() => finalizarTarefa(item.id)} />
                  <li>{item.task}</li>
                  <Trash onClick={() => excluirTarefa(item.id)} />
                </ListItem>

              ))
            ) :
              <h3>
                NÃO HÁ TAREFAS
              </h3>
          }
        </ul>
      </ToDoList>
    </Container>

  )
}

export default App
