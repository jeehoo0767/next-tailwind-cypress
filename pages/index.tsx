import type { NextPage } from 'next'
import { useState } from 'react'
import TodoRow from '../components/TodoRow'
interface TodoList {
  text: string
  isComplete: boolean
}
const Home: NextPage = () => {
  const [todoList, setTodoList] = useState<TodoList[]>([])
  const [isEdit, setIsEdit] = useState(false)
  const [todoValue, setTodoValue] = useState('')

  const submitTodo = (v: string) => {
    const nextTodo = [...todoList, { text: v, isComplete: false }]

    setTodoList(nextTodo)
    setIsEdit(false)
    setTodoValue('')
  }
  return (
    <>
      <main id={'todo-container'} className={'text-[20px] p-s32 bg-primary-background h-[100vh]'}>
        <h1
          className={
            'text-center font-bold text-[25px] mx-auto text-white bg-primary-default max-w-[576px] px-[60px] py-[8px] shadow-default'
          }
        >
          Discovery Challenge
        </h1>

        <section className={'bg-white mt-s12 p-s16 max-w-[576px] mx-auto text-primary-color shadow-default relative'}>
          <ul>
            {todoList.map((item) => (
              <>
                <TodoRow text={item.text} isComplete={item.isComplete} />
              </>
            ))}
          </ul>
          {isEdit && (
            <div className={'flex items-center mb-s8 animate-appear-todo translate-x-[80px]'}>
              <span className={'rounded-[50%] w-[8px] h-[8px] inline-block mr-s8 border-[1px] border-primary-color'}></span>
              <input
                type="text"
                className={'border-2 rounded-[4px] py-[4px] px-[8px]'}
                value={todoValue}
                onChange={(e) => setTodoValue(e.target.value)}
              />
              <button className={'ml-s8'} onClick={() => submitTodo(todoValue)}>
                Submit
              </button>
            </div>
          )}

          <button
            className={
              'bg-primary-default w-[180px] py-s8 text-center text-white rounded-[30px] absolute left-[50%] translate-x-[-50%] shadow-default hover:scale-105'
            }
            onClick={() => setIsEdit(true)}
          >
            + New Task
          </button>
        </section>
      </main>
    </>
  )
}

export default Home
