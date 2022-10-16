interface TodoRow {
  text: string
  isComplete: boolean
  handleComplete: (targetIndex: number) => void
}
const TodoRow = (props: TodoRow) => {
  return (
    <>
      {props.isComplete ? (
        <li className={'flex items-center mb-s8 line-through opacity-50 cursor-pointer'} onClick={props.handleComplete}>
          <span
            className={'rounded-[50%] w-[10px] h-[10px] inline-block bg-primary-default mr-s8 border-[1px] border-primary-color'}
          ></span>
          {props.text}
        </li>
      ) : (
        <li className={'flex items-center mb-s8 cursor-pointer'} onClick={props.handleComplete}>
          <span className={'rounded-[50%] w-[8px] h-[8px] inline-block mr-s8 border-[1px] border-primary-color'}></span>
          {props.text}
        </li>
      )}
    </>
  )
}

export default TodoRow
