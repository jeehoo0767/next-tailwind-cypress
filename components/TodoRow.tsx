import trashIcon from 'assets/trash.png'
import Image from 'next/image'
interface TodoRow {
  text: string
  isComplete: boolean
  handleComplete: (targetIndex: number) => void
  handleTodoRemove: any
  index: number
}

const TodoRow = (props: TodoRow) => {
  return (
    <>
      {props.isComplete ? (
        <li
          data-cy="todo-row-complete"
          className={'flex items-center mb-s8 line-through opacity-50 cursor-pointer'}
          onClick={() => props.handleComplete}
        >
          <span
            className={'rounded-[50%] w-[10px] h-[10px] inline-block bg-primary-default mr-s8 border-[1px] border-primary-color'}
          ></span>
          <span className={'mr-s8'}>{props.text}</span>
          <span data-cy="todo-remove" className={'cursor-pointer h-[20px]'} onClick={(e) => props.handleTodoRemove(e, props.index)}>
            <Image src={trashIcon} alt="쓰레기통" width={20} height={20} />
          </span>
        </li>
      ) : (
        <li data-cy="todo-row-no-complete" className={'flex items-center mb-s8 cursor-pointer'} onClick={() => props.handleComplete(props.index)}>
          <span className={'rounded-[50%] w-[8px] h-[8px] inline-block mr-s8 border-[1px] border-primary-color'}></span>
          {props.text}
        </li>
      )}
    </>
  )
}

export default TodoRow
