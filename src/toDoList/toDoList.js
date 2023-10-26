    import { useState } from 'react';
    import './toDoList.css';

    function ToDoList(){

        const [tarefa, setTarefa] = useState('');
        const [list, setList] = useState([]);
        
        function adicionarToList(){ 
            let tarefaLower = tarefa.toLowerCase()
            let a = true;
            for(let i = 0;i<list.length;i++){
                let item = list[i];
                if(item.toLowerCase() === tarefaLower){
                    a =  false;
                    alert('O item ja esta na lista');
                }
            }
            if(tarefa.trim() !== '' && a){
                setList([...list, tarefa]);
                console.log(list.includes(tarefa))
                setTarefa('');
            }
        }

        function deletar(index){
            console.log("Entrou funcao de deletar");
            console.log(index);
            const newList = [...list];
            for(let i = 0;i<newList.length;i++){
                if(i == index){
                    newList.splice(index,1);
                }
            }
            console.log(newList);
            setList(newList);
        }

        const pressEnter = (e) => {
            if(e.key === 'Enter'){
                adicionarToList();
                console.log('Entrou na funcaooo')
            }
        }

        

        return(
            <div className='todolist'>
                <p className='title'>To Do List.</p>
                <div className='main'>
                    <div className='display'>
                        <p className='subTitle'>Tarefa</p>

                        <input
                        className='input' 
                        type='text'
                        value={tarefa}
                        onChange={(e) => setTarefa(e.target.value)}
                        onKeyDown={pressEnter}
                        />
                        
                        <button className='submit' onClick={adicionarToList} >Enviar</button>
                    </div>
                    <div className='tarefas'>
                        <p className='subTitle2'>Lista de Tarefas:</p>
                        
                        <ul className='listaTarefas'>
                        <div className='lista'>  
                        {list.map((item, index) => (
                                <li className='li' key={index}>
                                    <input type='checkbox' className='check'/>
                                    <span>{index + 1} -  {item}</span>
                                    <button className='delete' onClick={() => deletar(index)}></button>
                                </li>
                            ))}
                        </div> 
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    export default ToDoList;